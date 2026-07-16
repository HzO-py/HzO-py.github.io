---
title: "Self-Supervised and Topological Signal-Quality Assessment for Any PPG Device"
collection: publications
category: manuscripts
permalink: /publication/self
excerpt: 'Author: Wei Shao, Ruoyu Zhang, **Zequan Liang**, Ehsan Kourkchi, Setareh Rafatirad, Houman Homayoun'
date: 2025-11-03
venue: '2025 IEEE 21st International Conference on Body Sensor Networks (BSN)'
detail_paperurl: 'https://ieeexplore.ieee.org/abstract/document/11337749'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/self.png' | relative_url }})

Wearable photoplethysmography (PPG) is embedded in billions of devices, yet its optical waveform is easily corrupted by motion, perfusion loss, and ambient light—jeopardizing downstream cardiometric analytics. Existing signal-quality assessment (SQA) methods rely either on brittle heuristics or on data-hungry supervised models. We introduce the first fully unsupervised SQA pipeline for wrist PPG. Stage 1 trains a contrastive 1-D ResNet-18 on 276 h of raw, unlabeled data from heterogeneous sources (varying in device and sampling frequency), yielding optical-emitter- and motioninvariant embeddings (i.e., the learned representation is stable across differences in LED wavelength, drive intensity, and device optics, as well as wrist motion). Stage 2 converts each 512-D encoder embedding into a 4-D topological signature via persistent homology (PH) and clusters these signatures with HDBSCAN. To produce a binary signal-quality index (SQI), the acceptable PPG signals are represented by the densest cluster while the remaining clusters are assumed to mainly contain poor-quality PPG signals. Without re-tuning, the SQI attains Silhouette, Davies-Bouldin, and Calinski-Harabasz scores of 0.72,0.34, and 6,173, respectively, on a stratified sample of 10,000 windows. In this study, we propose a hybrid self-supervised-learning-topological-dataanalysis (SSL-TDA) framework that offers a drop-in, scalable, cross-device quality gate for PPG signals.