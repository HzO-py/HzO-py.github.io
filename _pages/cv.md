---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}


<a href="https://drive.google.com/file/d/1iYzi7Zc6pdpITQ141ecJyfotN8bQT-ql/view">
Download CV (PDF)
</a>

Education
======

* **University of California, Davis**  
  Ph.D. in Computer and Information Science, September 2024 – Present

* **South China University of Technology**  
  M.S. in Computer Technology, September 2021 – June 2024

* **South China University of Technology**  
  B.S. in Computer Science and Technology, September 2017 – July 2021


Research Experience
======

## Research Assistant, University of California, Davis

**Advisors:** Houman Homayoun and Setareh Rafatirad  
**September 2024 – Present**

### Machine Learning for Physiological Signal Modeling

* Developed a predictor-guided Transformer framework for reconstructing PPG signals for SpO₂ estimation using random temporal masking and joint time-domain, frequency-domain, and SpO₂-prediction losses.

* Trained a Transformer-based PPG reconstructor and self-attention BiLSTM SpO₂ regressor through stage-wise optimization.

* Developed a transfer-learning framework with a self-attention BiLSTM by pretraining on clinical PPG data and fine-tuning on low-sampling-rate wearable PPG for SpO₂ estimation.

* Co-designed a related BiLSTM-attention architecture for continuous user authentication.

* Developed a generalizable blood-pressure estimation framework based on attention-fused CNN features from multi-wavelength PPG signals.

* Integrated curriculum learning from hypertension classification to blood-pressure regression and gradient-reversal adversarial training to learn subject-invariant features.

* Developed an XGBoost-based SpO₂ confidence-assessment model using PPG signal-quality indices and accelerometer data as inputs, with SpO₂ prediction error serving as the supervision target.

* Developed a unit-independent wrist-GSR stress-detection pipeline using cvxEDA decomposition and robust z-score normalization to extract phasic nSCR features for stress-task classification with a Random Forest classifier.

### Wearable Healthcare Firmware Algorithms

* Designed a lightweight, real-time wrist SpO₂ estimation pipeline for smartwatch firmware using beat-level AC/DC extraction, accelerometer-derived motion weighting, weighted-median ratio-of-ratios aggregation, and perfusion-guided calibration on low-rate PPG under micro-perturbations.

* Implemented FFT-based spectral heart-rate estimation with Wiener filtering to suppress motion artifacts.

* Implemented PID-controlled optical-intensity adjustment in smartwatch firmware.

* Led data management and preprocessing for ECG, PPG, GSR, and respiratory signals collected during stress tasks.

* Authored IRB protocols for human-subject physiological-data collection.


## Research Assistant, South China University of Technology

**Advisor:** Jianming Lv  
**September 2021 – June 2024**

### Multimodal Pain Assessment System in Children

* Developed a multimodal multi-expert framework for postoperative pediatric pain-score regression.

* Trained modality-specific expert models on clustered facial and crying expressions and applied confidence-based fusion to address individual variability and label imbalance.

* Developed a Django-based web platform and mobile applications for database management and multimodal result analysis in collaboration with a pediatric hospital.

* Contributed to a Science and Technology Program of Guangzhou grant proposal.

* Authored two Chinese patents on the pain-assessment framework.

### Unsupervised Multimodal Domain Adaptation

**September 2023 – April 2024**

* Co-designed an early-stage prototype of MODfinity comprising multimodal and label encoders, label classifiers, and domain discriminators.

* Applied joint contrastive learning, domain-adversarial training, and cross-entropy objectives.

### Multimodal Psychological Assessment for the Power Grid Industry

**March 2021 – June 2021**

* Proposed a multimodal psychological-assessment framework integrating facial, speech, and gait data through CNN-LSTM, BiLSTM, and ST-GCN models.

* Contributed to a paper submission to *Software Guide*.


Work Experience
======

## Platform and Content Group, Tencent

**Backend Development Intern — Self-Study Module in the QQ App**  
**July 2020 – August 2020**

* Developed Go backend interfaces to map multiple object-ID types from the database.

* Collaborated on developing a ranking system with push-pull diffusion logic.

* Used MySQL for persistent storage, Redis for caching, and message queues for asynchronous updates.


Publications
======

<ul>
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>


Technical Skills
======

* **Research Fields:** Machine Learning, Deep Learning, Signal Processing, Wearable Healthcare, Multimodal Fusion

* **Programming:** Python, C, C++, JavaScript, Go, HTML, MySQL, Redis, Shell

* **Tools and Frameworks:** PyTorch, Scikit-learn, OpenCV, Django, Segger Embedded Studio


Course Projects
======

## Diversity in LLM-Simulated Survey Responses

**January 2025 – March 2025**

* Implemented Retrieval-Augmented Generation and zero-shot prompting strategies for large language models using GPT and DeepSeek APIs.

* Analyzed the distributions of LLM-generated responses against human survey data.


Teaching Experience
====== 
<ul>
{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>
