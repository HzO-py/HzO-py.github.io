document.addEventListener("DOMContentLoaded", () => {
    const WORKER_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "http://localhost:8787"
        : "https://zequan-research-assistant.zequan.workers.dev";

  const form = document.getElementById("assistant-form");
  const input = document.getElementById("assistant-input");
  const submitButton = document.getElementById("assistant-submit");
  const clearButton = document.getElementById("assistant-clear");
  const messages = document.getElementById("assistant-messages");
  const suggestionButtons = document.querySelectorAll(
    ".assistant-suggestion"
  );

  if (!form || !input || !submitButton || !messages) {
    return;
  }

  let history = [];

  function addMessage(role, content) {
    const wrapper = document.createElement("div");

    wrapper.className =
      role === "user"
        ? "assistant-message assistant-message--user"
        : role === "error"
          ? "assistant-message assistant-message--bot assistant-message--error"
          : "assistant-message assistant-message--bot";

    const label = document.createElement("div");
    label.className = "assistant-message__label";
    label.textContent =
      role === "user" ? "You" : "Zequan AI";

    const messageContent = document.createElement("div");
    messageContent.className = "assistant-message__content";
    messageContent.textContent = content;

    wrapper.appendChild(label);
    wrapper.appendChild(messageContent);


    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;

    return wrapper;
  }

  function setLoading(isLoading) {
    submitButton.disabled = isLoading;
    input.disabled = isLoading;
    submitButton.textContent = isLoading ? "Thinking..." : "Ask";
  }

function createTypewriter(element, delayMs = 18) {
  const characterQueue = [];
  const idleResolvers = [];

  let running = false;

  function resolveIdlePromises() {
    while (idleResolvers.length > 0) {
      const resolve = idleResolvers.shift();
      resolve();
    }
  }

  function renderNextCharacter() {
    if (characterQueue.length === 0) {
      running = false;
      resolveIdlePromises();
      return;
    }

    const character = characterQueue.shift();

    element.textContent += character;

    messages.scrollTop = messages.scrollHeight;

    window.setTimeout(
      renderNextCharacter,
      delayMs
    );
  }

  return {
    push(text) {
      if (!text) {
        return;
      }

      /*
       * Array.from() separates Unicode code points correctly, including
       * Chinese characters, instead of iterating over UTF-16 code units.
       */
      characterQueue.push(...Array.from(text));

      if (!running) {
        running = true;
        renderNextCharacter();
      }
    },

    waitUntilIdle() {
      if (!running && characterQueue.length === 0) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        idleResolvers.push(resolve);
      });
    }
  };
}

async function askQuestion(question) {
  const trimmedQuestion = question.trim();

  if (!trimmedQuestion) {
    return;
  }

  addMessage("user", trimmedQuestion);

  input.value = "";
  setLoading(true);

  /*
   * Create the assistant bubble immediately.
   */
  const assistantMessage = addMessage(
    "assistant",
    "Thinking"
  );

  const assistantContent =
    assistantMessage.querySelector(
      ".assistant-message__content"
    );

  /*
   * Thinking → Thinking. → Thinking.. → Thinking...
   */
  const thinkingStates = [
    "Thinking",
    "Thinking.",
    "Thinking..",
    "Thinking..."
  ];

  let thinkingIndex = 0;
  let streamStarted = false;
  let fullAnswer = "";

  const thinkingTimer = window.setInterval(() => {
    if (streamStarted) {
      return;
    }

    thinkingIndex =
      (thinkingIndex + 1) % thinkingStates.length;

    assistantContent.textContent =
      thinkingStates[thinkingIndex];

    messages.scrollTop = messages.scrollHeight;
  }, 350);

  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: trimmedQuestion,
        history
      })
    });

    /*
     * Worker errors are still JSON before streaming begins.
     */
    if (!response.ok) {
      let errorMessage =
        "The request could not be completed.";

      try {
        const errorData = await response.json();

        if (errorData.error) {
          errorMessage = errorData.error;
        }
      } catch {
        const errorText = await response.text();

        if (errorText) {
          errorMessage = errorText;
        }
      }

      throw new Error(errorMessage);
    }

    if (!response.body) {
      throw new Error(
        "The browser did not receive a response stream."
      );
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    /*
     * 18 ms per character:
     * approximately 55 characters per second.
     */
    const typewriter = createTypewriter(
      assistantContent,
      18
    );

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      const text = decoder.decode(value, {
        stream: true
      });

      if (!text) {
        continue;
      }

      if (!streamStarted) {
        streamStarted = true;

        window.clearInterval(thinkingTimer);

        /*
         * Remove Thinking... when the first model text arrives.
         */
        assistantContent.textContent = "";
      }

      fullAnswer += text;
      typewriter.push(text);
    }

    /*
     * Flush any bytes retained by TextDecoder.
     */
    const finalText = decoder.decode();

    if (finalText) {
      if (!streamStarted) {
        streamStarted = true;
        window.clearInterval(thinkingTimer);
        assistantContent.textContent = "";
      }

      fullAnswer += finalText;
      typewriter.push(finalText);
    }

    /*
     * Wait until all queued characters have appeared on screen.
     */
    await typewriter.waitUntilIdle();

    window.clearInterval(thinkingTimer);

    if (!fullAnswer.trim()) {
      assistantContent.textContent =
        "The model returned an empty response.";

      throw new Error(
        "The model returned an empty response."
      );
    }

    history.push(
      {
        role: "user",
        content: trimmedQuestion
      },
      {
        role: "assistant",
        content: fullAnswer.trim()
      }
    );

    history = history.slice(-10);
  } catch (error) {
    window.clearInterval(thinkingTimer);

    /*
     * If no model text appeared, remove the Thinking bubble.
     * If partial text already appeared, retain it.
     */
    if (!streamStarted) {
      assistantMessage.remove();
    }

    addMessage(
      "error",
      error.message ||
        "The research assistant is temporarily unavailable."
    );
  } finally {
    window.clearInterval(thinkingTimer);

    setLoading(false);
    input.focus();
  }
}

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    askQuestion(input.value);
  });

  input.addEventListener("keydown", (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.isComposing
    ) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  suggestionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.dataset.question || "";
      askQuestion(question);
    });
  });

  clearButton?.addEventListener("click", () => {
    history = [];

    messages.innerHTML = `
    <div class="assistant-message assistant-message--bot">
        <div class="assistant-message__label">
        Zequan AI
        </div>
        <div class="assistant-message__content">Conversation cleared.</div>
    </div>
    `;

    input.focus();
  });
});