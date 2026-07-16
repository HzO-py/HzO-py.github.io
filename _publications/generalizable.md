---
title: "Generalizable Blood Pressure Estimation from Multi-Wavelength PPG Using Curriculum-Adversarial Learning"
collection: publications
category: manuscripts
permalink: /publication/generalizable
excerpt: 'Author: **Zequan Liang**, Ruoyu Zhang, Wei Shao, Mahdi Pirayesh Shirazi Nejad, Ehsan Kourkchi, Setareh Rafatirad, Houman Homayoun'
date: 2025-11-03
venue: '2025 IEEE 21st International Conference on Body Sensor Networks (BSN)'
detail_paperurl: 'https://ieeexplore.ieee.org/abstract/document/11337701'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/generalizable.png' | relative_url }})

Accurate and generalizable blood pressure (BP) estimation is vital for the early detection and management of cardiovascular diseases. In this study, we enforce subjectlevel data splitting on a public multi-wavelength photoplethysmography (PPG) dataset and propose a generalizable BP estimation framework based on curriculum-adversarial learning. Our approach combines curriculum learning, which transitions from hypertension classification to BP regression, with domainadversarial training that confuses subject identity to encourage the learning of subject-invariant features. Experiments show that multi-channel fusion consistently outperforms single-channel models. On the four-wavelength PPG dataset, our method achieves strong performance under strict subject-level splitting, with mean absolute errors (MAE) of 14.2mmHg for systolic blood pressure (SBP) and 6.4mmHg for diastolic blood pressure (DBP). Additionally, ablation studies validate the effectiveness of both the curriculum and adversarial components. These results highlight the potential of leveraging complementary information in multi-wavelength PPG and curriculum-adversarial strategies for accurate and robust BP estimation.
