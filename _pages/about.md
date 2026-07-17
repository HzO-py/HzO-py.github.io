---
permalink: /
title: "About Me"
description: "Zequan Liang's personal website"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

**= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =**

Hi, I am **Zequan Liang**. I know my Chinese name can be difficult to pronounce, so please feel free to call me **Lucas**.

I am a second-year Ph.D. student in Computer and Information Science at the University of California, Davis, advised by Prof. Houman Homayoun.

My research interests include machine learning, wearable healthcare, physiological signal processing, multimodal learning, and trustworthy AI. I am currently working on unsupervised foundation models for physiological data.

Please see my **[Publications](/publications/)** and **[CV](/cv/)** for more details about my research and academic experience.

Outside of academia, I enjoy playing badminton and tennis, exploring new video games, and watching strange things—especially *Stranger Things*.

<section class="research-assistant" aria-labelledby="research-assistant-title">
  <div class="research-assistant__header">
      <h2 id="research-assistant-title">Talk with Zequan AI</h2>

    <button
      id="assistant-clear"
      class="research-assistant__clear"
      type="button"
    >
      Clear
    </button>
  </div>

  <div
    id="assistant-messages"
    class="research-assistant__messages"
    aria-live="polite"
  >
    <div class="assistant-message assistant-message--bot">
      <div class="assistant-message__label">Research Assistant</div>
      <div class="assistant-message__content">
        Hi! I am Zequan AI. You can ask me about my experience and publications.
      </div>
    </div>
  </div>


  <form id="assistant-form" class="research-assistant__form">
    <label class="sr-only" for="assistant-input">
      Ask a question
    </label>

    <textarea
      id="assistant-input"
      class="research-assistant__input"
      rows="2"
      maxlength="1500"
      placeholder="Ask about my research..."
      required
    ></textarea>

    <button
      id="assistant-submit"
      class="research-assistant__submit"
      type="submit"
    >
      Ask
    </button>
  </form>

  <p class="research-assistant__notice">
    My AI may make mistakes. Please verify important information using my CV pages.
  </p>
</section>

<script src="{{ '/assets/js/research-assistant.js' | relative_url }}"></script>