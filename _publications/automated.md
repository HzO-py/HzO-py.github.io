---
title: "Automated scoring of asynchronous interview videos based on multi-modal window-consistency fusion"
collection: publications
category: manuscripts
permalink: /publication/automated
excerpt: 'Author: Jianming Lv, Chujie Chen, **Zequan Liang**'
date: 2023-07-11
venue: 'IEEE Transactions on Affective Computing'
detail_paperurl: 'https://ieeexplore.ieee.org/abstract/document/10178060'
---
[Paper Link]({{ page.detail_paperurl }})

![Model architecture]({{ '/images/publications/automated.gif' | relative_url }})

Soft skills, such as personality characteristics, communication skills and leadership, affect personal career performance greatly. Therefore, predicting the soft skills of interviewees can provide interviewers with a strong reference for the decision of hiring. Nowadays, as asynchronous video interviews have gradually become a popular form of interviews, automatic interview evaluation of soft skills has attracted widespread attention from researchers. However, existing automatic evaluation methods have two significant drawbacks. First, most of them model the problem as multi-modal fusion of long-term sequences, while ignoring the consistency of multi-modal expression in short-time windows, which is a key attribute of the interview scene. Second, without embedding of professional knowledge in the interview field, the interpretability of the model is relatively weak. To address the above problems, we propose a novel Multi-modal Window-Consistency Fusion network, namely MWCF, to capture the expression consistency of different modalities in a short-time window and re-weight the language signals to enhance important portions in verbal clues. Meanwhile, in order to enhance the interpretability of the evaluation model, we introduce the professional knowledge of interviewers by proposing a topic generation module based on question attention, and embedding the most representative keywords under different soft skills into the model. Furthermore, a real-world interview dataset is built by developing an asynchronous interview platform, and extensive experiments are conducted to show the superior performance of our proposed model.
