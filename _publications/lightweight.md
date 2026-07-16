---
title: "Lightweight Cross-Device Sleep Tracking on the WeBe Wearable Platform"
collection: publications
category: manuscripts
permalink: /publication/lightweight
excerpt: 'Author: Wei Shao, Ehsan Kourkchi, Krishi Shah, **Zequan Liang**, Setareh Rafatirad, Houman Homayoun'
date: 2026-06-22
venue: 'Proceedings of the Great Lakes Symposium on VLSI 2026'
detail_paperurl: 'https://dl.acm.org/doi/full/10.1145/3787109.3816396'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/lightweight.jpg' | relative_url }})

Wearable devices are widely used for continuous health monitoring, yet reliable sleep tracking on emerging platforms remains underexplored due to reliance on proprietary algorithms and device-specific activity representations. We present a lightweight and reproducible sleep tracking pipeline that operates directly on raw accelerometer signals. The method converts data into epoch-level activity features, applies temporal smoothing and normalized scoring, and performs sleep/wake classification using a globally calibrated threshold. We calibrate the model on the Multilevel Monitoring of Activity and Sleep in Healthy People (MMASH) dataset and evaluate it in a cross-device study using the WeBe wearable platform and a commercial ActiGraph device. On MMASH, the method achieves a mean absolute error of 41.6 minutes in Total Sleep Time (TST), with onset and offset errors of 6.3 and 7.4 minutes. On real-world WeBe data from three participants across five sessions, it achieves a mean TST error of 27.4 minutes and onset and offset errors of 13.9 and 8.0 minutes. In contrast, a commercial ActiGraph pipeline shows larger discrepancies relative to ground truth. These results demonstrate accurate and generalizable sleep tracking using a simple and reproducible pipeline.
