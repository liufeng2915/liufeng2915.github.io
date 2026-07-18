---
layout: page
permalink: /research/person-centric-video/
title: Person-Centric Long-Duration Video Intelligence
description:
nav: false
importance: 91
---

<div class="research">

  <p class="research-lede">Long-duration video from fixed, aerial, and body-worn cameras contains
  brief, high-value moments buried in hours of routine footage. We develop the representations and
  decision mechanisms needed to find, connect, and rank this evidence: persistent models of people
  and their activities that survive clothing change, viewpoint shift, low resolution, and gaps across
  cameras and time, paired with open-set uncertainty estimation that keeps false matches under
  control.</p>

  <div class="research-section">
    <h2>Three strands of one program</h2>

    <div class="thread">
      <div class="thread-title">Persistent person representation</div>
      <p>Multi-cue models combining appearance, 3D body shape, and motion for identification and
      retrieval in long, fragmented video &mdash; including clothing- and pose-invariant 3D shape
      representations and recognition at long range and from elevated platforms.</p>
    </div>

    <div class="thread">
      <div class="thread-title">Open-set recognition and uncertainty</div>
      <p>Identification-detection formulations, threshold learning, and calibrated confidence for
      deciding when a match should be accepted, deferred to a human, or rejected &mdash; the core
      requirement for retrieval and alerting systems that avoid false-alarm fatigue.</p>
    </div>

    <div class="thread">
      <div class="thread-title">Motion as interpretable evidence</div>
      <p>Vision-language systems that convert fine-grained human motion in unconstrained video into
      structured, interpretable semantic descriptions rather than coarse action labels, supporting
      downstream reasoning and human review.</p>
    </div>
  </div>

  <div class="research-section">
    <h2>Ongoing directions</h2>
    <p>We are extending this foundation toward interactive video triage: learning a user's evolving
    objectives from sparse, natural feedback such as example clips and short natural-language
    corrections, propagating that feedback through persistent person- and activity-centric indexes,
    and prioritizing large unreviewed video collections with calibrated confidence and abstention.
    Recent work on reinforcement-learned, cost-aware model selection for video-based person
    recognition (<a href="https://arxiv.org/abs/2602.18990" target="_blank">IDSelect</a>, 2026) is a
    first step toward systems that decide, per clip, which evidence is worth computing and which
    results are worth a human's attention. The goal is a system a non-technical user can teach
    through ordinary review behavior, without ever drawing a bounding box.</p>
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
        <span class="work-title"><a href="https://arxiv.org/abs/2503.08121" target="_blank">AG-VPReID: A Challenging Large-Scale Benchmark for Aerial-Ground Video-based Person Re-Identification</a></span><br>
        <span class="work-venue">CVPR 2025</span>
      </li>
      <li>
        <span class="work-title"><a href="https://arxiv.org/abs/2407.16133" target="_blank">Open-Set Biometrics: Beyond Good Closed-Set Models</a></span><br>
        <span class="work-venue">ECCV 2024</span>
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
      <span class="tag">Defense &amp; ISR</span>
      <span class="tag">Aerial-ground surveillance</span>
      <span class="tag">Large-scale video analytics</span>
      <span class="tag">Forensics</span>
      <span class="tag">Interactive video triage</span>
    </div>
  </div>

  <p class="research-sponsors">This research thread has been supported in part by the IARPA BRIAR
  program and other federal sponsors. Sponsor acknowledgments follow the language used in the
  corresponding publications.</p>

  <a class="research-back" href="{{ '/research/' | relative_url }}">&larr; All research</a>

</div>
