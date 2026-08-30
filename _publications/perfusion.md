---
title: "Low-Rate Wrist SpO2 Estimation under Micro-Perturbations Using Motion-Aware Beat Selection and Perfusion-Guided Calibration"
collection: publications
category: manuscripts
permalink: /publication/perfusion
excerpt: 'Author: **Zequan Liang**, Ning Miao, Wei Shao, Mahdi Pirayesh Shirazi Nejad, Ehsan Kourkchi, Hossein Sayadi, Setareh Rafatirad, Houman Homayoun'
date: 2026-07-09
venue: '2026 IEEE 21st International Conference on Body Sensor Networks (BSN)'
detail_paperurl: 'https://arxiv.org/abs/2607.08001'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/perfusion.png' | relative_url }})

Continuous oxygen saturation (SPO2) monitoring from photoplethysmography (PPG) is important for wearable health sensing, but wrist-based SPO2 estimation remains challenging due to subtle wrist micro-perturbations and inter-subject differences in local perfusion status. These factors can destabilize the red-to-infrared ratio-of-ratios (R) and reduce the reliability of conventional fixed R-SPO2 mapping. This paper proposes a lightweight low-rate wrist SPO2 estimation framework that integrates motion-aware beat selection and perfusion-guided calibration. The proposed method extracts beat-level alternating-current/direct-current (AC/DC) components from dual-wavelength PPG signals, computes beat-level R values, and uses accelerometer-derived motion scores to weight beats within each sliding window. A subject-specific perfusion reference is further used to guide calibration across different perfusion conditions. Experiments on a private wearable dataset show that the proposed method achieves the best 25 Hz performance, with an MAE of 2.305±1.113% and an RMSE of 3.117±1.743%, while maintaining performance comparable to the 100 Hz sampling rate and reducing PPG sensor power consumption for energy-efficient wearable implementation. These results demonstrate the effectiveness of the proposed framework for low-rate wrist SPO2 estimation under micro-perturbations.