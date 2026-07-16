---
title: "A multi-modal multi-expert framework for pain assessment in postoperative children"
collection: publications
category: manuscripts
permalink: /publication/pain
excerpt: 'Author: **Zequan Liang**, Hao Luo, Xi Chen, Zhipeng Zhong, Cheng Fan, Xingrong Song, Bilian Li, Jianming Lv'
date: 2025-05-13
venue: 'IEEE Transactions on Affective Computing'
detail_paperurl: 'https://ieeexplore.ieee.org/abstract/document/11002650'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/pain.jpg' | relative_url }})

Automatic pain assessment in postoperative children is crucial for monitoring their health and preventing potential complications. However, the automatic pain assessment still faces the following challenges. Firstly, the individual variation of painful expressions in children enhances the difficulty of mapping diverse features of expressions to pain scores accurately. Secondly, the imbalanced label distribution caused by abundant non-painful samples usually makes the model more likely to predict an unexpectedly lower pain score. To address the above challenges, we propose a novel multi-modal multi-expert framework, namely MMF, for postoperative pain assessment in children. Specifically, the samples are clustered in each modality to train multiple expert models, each focusing on a smaller feature subspace for easier regression of pain scores. Meanwhile, some expert models are allocated to rare painful samples to relieve the side effects caused by the imbalanced distribution of labels. Moreover, a confidence-based integration of multi-modal features from multiple experts is made to achieve a more accurate final prediction. Experimental results show that MMF exhibits superior accuracy of pain assessment on the multi-modal pain database collected from postoperative children by us. In particular, MMF can achieve the mean absolute error (MAE) of 1.03 and the Pearson correlation coefficient (PCC) of 0.88.
