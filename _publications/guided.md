---
title: "SpO2 Predictor-Guided Stage-Wise Time-Frequency Reconstruction of Low-Quality Dual-Wavelength PPG for Oxygen Saturation Estimation"
collection: publications
category: manuscripts
permalink: /publication/guided
excerpt: 'Author: **Zequan Liang**, Elahe Hosseini, Ning Miao, Mahdi Pirayesh Shirazi Nejad, Wei Shao, Ehsan Kourkchi, Setareh Rafatirad, Houman Homayoun'
date: 2026-07-10
venue: 'arXiv preprint arXiv:2607.07996'
detail_paperurl: 'https://arxiv.org/abs/2607.07996'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/guided.png' | relative_url }})

Continuous oxygen saturation (SpO2) estimation from wearable photoplethysmography (PPG) is important for long-term health monitoring, but low-quality red and infrared PPG segments can distort waveform morphology and degrade SpO2 prediction accuracy. Existing PPG denoising and reconstruction methods usually optimize waveform fidelity or heart rate characteristics, while time-domain waveform loss on PPG signals alone insufficiently preserves frequency structure and SpO2-relevant information. This paper proposes a SpO2 predictor-guided stage-wise time-frequency reconstruction framework for low-quality dual-wavelength PPG signals. The proposed method first selects high-quality PPG segments to pretrain a SpO2 predictor. A masked reconstruction model is then trained to recover randomly masked PPG regions using a joint reconstruction objective that combines time-domain waveform loss with frequency-domain loss computed from the short-time Fourier transform (STFT). To make the reconstruction task physiologically relevant, the pretrained SpO2 predictor is incorporated as an additional constraint, encouraging the reconstructed PPG to preserve SpO2 information rather than only minimizing waveform reconstruction error. The SpO2 predictor and PPG reconstructor model are optimized through four training stages. Experiments on the public OpenOximetry Repository and a private wearable PPG dataset show that the proposed approach achieves the lowest subject-level MAE, with 2.882\% on the public dataset and 2.359\% on the private dataset.