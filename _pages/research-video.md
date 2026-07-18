---
layout: page
permalink: /research/person-centric-video/
title: Understanding People in Long, Real-World Video
description:
nav: false
importance: 91
---

<div class="research">

  <p class="research-problem">In long, multi-camera, real-world video, can we persistently understand
  who a person is, what they are doing, how they change over time, and which moments deserve
  attention?</p>

  <p>Real deployments produce far more video than anyone can watch. We build systems that follow
  people through long, unconstrained, multi-camera and aerial-ground footage: recognizing identity
  across time, clothing, and viewpoint, interpreting activities and motion, and deciding which
  evidence is reliable enough to act on and which needs a human's judgment.</p>

  <div class="research-section">
    <h2>What we work on</h2>
    <ul class="bullets">
      <li>Persistent person understanding across long videos</li>
      <li>Multimodal person recognition combining appearance, 3D body shape, and gait</li>
      <li>Multi-camera and aerial-ground video understanding</li>
      <li>Open-set recognition and uncertainty-aware matching</li>
      <li>Person-centric video retrieval and ranking</li>
      <li>Cost-aware evidence selection for video analysis</li>
      <li>Human motion as interpretable, language-grounded evidence</li>
    </ul>
  </div>

  <div class="research-section">
    <h2>Emerging directions</h2>
    <p>We are extending this line toward video analysis that non-expert users can steer. Rather than
    requiring labeled data or precisely specified queries, we want systems that infer what a user is
    looking for from a few example clips, short corrections, and ordinary review behavior, then
    reorganize large unwatched collections accordingly: surfacing likely-relevant moments, flagging
    the unexpected, and knowing when to defer to human judgment. Our recent work on cost-aware model
    selection (<a href="https://arxiv.org/abs/2602.18990" target="_blank">IDSelect</a>) is a first
    step &mdash; a system that decides, per video, which evidence is worth computing and which results
    are worth a person's attention.</p>
  </div>

  <div class="research-section">
    <h2>Selected work</h2>
    <ul class="works">
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2508.05038" target="_blank">HAMoBE: Hierarchical and Adaptive Mixture of Biometric Experts for Video-based Person Re-ID</a></span><br>
        <span class="work-venue">ICCV 2025</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2308.10658" target="_blank">Learning Clothing and Pose Invariant 3D Shape Representation for Long-Term Person Re-Identification</a></span><br>
        <span class="work-venue">ICCV 2023</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2306.17206" target="_blank">FarSight: A Physics-Driven Whole-Body Biometric System at Large Distance and Altitude</a></span><br>
        <span class="work-venue">WACV 2024</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2504.04708" target="_blank">SapiensID: Foundation for Human Recognition</a></span><br>
        <span class="work-venue">CVPR 2025</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2407.16133" target="_blank">Open-Set Biometrics: Beyond Good Closed-Set Models</a></span><br>
        <span class="work-venue">ECCV 2024</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2503.08121" target="_blank">AG-VPReID: A Challenging Large-Scale Benchmark for Aerial-Ground Video-based Person Re-Identification</a></span><br>
        <span class="work-venue">CVPR 2025</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2602.18990" target="_blank">IDSelect: A RL-Based Cost-Aware Selection Agent for Video-based Multi-Modal Person Recognition</a></span><br>
        <span class="work-venue">2026</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2603.26938" target="_blank">From 3D Pose to Prose: Biomechanics-Grounded Vision&ndash;Language Coaching</a></span><br>
        <span class="work-venue">CVPR 2026</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2511.17674" target="_blank">Person Recognition in Aerial Surveillance: A Decade Survey</a></span><br>
        <span class="work-venue">IEEE T-BIOM 2025</span>
      </li>
    </ul>
  </div>

  <div class="research-section">
    <h2>Where it applies</h2>
    <div class="tags">
      <span class="tag">Public safety</span>
      <span class="tag">Defense and national security</span>
      <span class="tag">Large-scale video analytics</span>
      <span class="tag">Forensics</span>
      <span class="tag">Smart infrastructure</span>
    </div>
  </div>

  <a class="research-back" href="{{ '/research/' | relative_url }}">&larr; All research</a>

</div>
