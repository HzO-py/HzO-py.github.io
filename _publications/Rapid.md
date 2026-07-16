---
title: "Rapid Adaptation of SpO2 Estimation to Wearable Devices via Transfer Learning on Low-Sampling-Rate PPG"
collection: publications
category: manuscripts
permalink: /publication/rapid
excerpt: 'Author: **Zequan Liang**, Ruoyu Zhang, Wei Shao, Krishna Karthik, Ehsan Kourkchi, Setareh Rafatirad, Houman Homayoun'
date: 2025-11-03
venue: '2025 IEEE 21st International Conference on Body Sensor Networks (BSN)'
detail_paperurl: 'https://ieeexplore.ieee.org/abstract/document/11337411'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/rapid.png' | relative_url }})

Blood oxygen saturation (SpO2) is a vital marker for healthcare monitoring. Traditional SpO2 estimation methods often rely on complex clinical calibration, making them unsuitable for low-power, wearable applications. In this paper, we propose a transfer learning-based framework for the rapid adaptation of SpO2 estimation to energy-efficient wearable devices using low-sampling-rate (25Hz) dual-channel photoplethysmography (PPG). We first pretrain a bidirectional Long ShortTerm Memory (BiLSTM) model with self-attention on a public clinical dataset, then fine-tune it using data collected from our wearable We-Be band and an FDA-approved reference pulse oximeter. Experimental results show that our approach achieves a mean absolute error (MAE) of 2.967% on the public dataset and 2.624% on the private dataset, significantly outperforming traditional calibration and non-transferred machine learning baselines. Moreover, using 25Hz PPG reduces power consumption by 40% compared to 100 Hz, excluding baseline draw. Our method also attains an MAE of 3.284% in instantaneous SpO2 prediction, effectively capturing rapid fluctuations. These results demonstrate the rapid adaptation of accurate, low-power SpO2 monitoring on wearable devices without the need for clinical calibration.