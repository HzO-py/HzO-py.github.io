---
title: "Unit-Independent Low-Rate Wrist GSR Processing for Stress Detection Using Phasic nSCR Features"
collection: publications
category: manuscripts
permalink: /publication/gsr
excerpt: 'Author: **Zequan Liang**, Sally Hang, Geneva M Jost, Ning Miao, Wei Shao, Mahdi Pirayesh Shirazi Nejad, Hossein Sayadi, Ehsan Kourkchi, Setareh Rafatirad, Camelia E Hostinar, Houman Homayoun'
date: 2026-07-09
venue: 'arXiv preprint arXiv:2607.08007'
detail_paperurl: 'https://arxiv.org/abs/2607.08007'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/gsr.png' | relative_url }})

Galvanic skin response (GSR) is widely used for stress detection, but wrist-based GSR remains challenging because its absolute amplitude can differ substantially from laboratory-grade palmar measurements. In this paper, we propose a unit-independent low-rate wrist GSR processing pipeline to extract the number of skin conductance responses per minute (nSCR/min) as a stress-related feature. We collect paired wrist and palmar GSR recordings from 31 participants during sitting baseline, standing baseline, neutral speaking, and the Trier Social Stress Test (TSST), a laboratory social stressor task. The proposed pipeline cleans the raw GSR signal, decomposes it into tonic skin conductance level (SCL) and phasic skin conductance response (SCR), applies robust z-score normalization, and detects phasic SCR peaks to compute nSCR/min. Using random forest on 25Hz We-Be GSR, nSCR/min achieved balanced accuracies of 0.823 and 0.871 for binary classification between TSST and the sitting and standing baselines, respectively. Moreover, the 25Hz We-Be GSR features achieved comparable balanced accuracy to the original 100Hz features across the evaluated tasks. These results suggest the feasibility of low-rate, unit-independent wrist GSR processing for wearable stress detection.
