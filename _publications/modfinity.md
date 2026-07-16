---
title: "Modfinity: Unsupervised domain adaptation with multimodal information flow intertwining"
collection: publications
category: manuscripts
permalink: /publication/modfinity
excerpt: 'Author: Shanglin Liu, Jianming Lv, Jingdan Kang, Huaidong Zhang, **Zequan Liang**, Shengfeng He'
date: 2025-07-11
venue: 'Proceedings of the Computer Vision and Pattern Recognition Conference (CVPR)'
detail_paperurl: 'https://openaccess.thecvf.com/content/CVPR2025/html/Liu_MODfinity_Unsupervised_Domain_Adaptation_with_Multimodal_Information_Flow_Intertwining_CVPR_2025_paper.html'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/modfinity.png' | relative_url }})

Multimodal unsupervised domain adaptation leverages unlabeled data in the target domain to enhance multimodal systems continuously. While current state-of-the-art methods encourage interaction between sub-models of different modalities through pseudo-labeling and feature-level exchange, varying sample quality across modalities can lead to the propagation of inaccurate information, resulting in error accumulation. To address this, we propose Modal-Affinity Multimodal Domain Adaptation (MODfinity), a method that dynamically manages multimodal information flow through fine-grained control over teacher model selection, guiding information intertwining at both feature and label levels. By treating labels as an independent modality, MODfinity enables balanced performance assessment across modalities, employing a novel modal-affinity measurement to evaluate information quality. Additionally, we introduce a modal-affinity distillation technique to control sample-level information exchange, ensuring reliable multimodal interaction based on affinity evaluations within the feature space. Extensive experiments on three multimodal datasets demonstrate that our framework consistently outperforms state-of-the-art methods, particularly in high-noise environments.

