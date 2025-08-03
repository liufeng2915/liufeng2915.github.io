---
layout: page
permalink: /team/
title: Team
description: 
nav: true
importance: 5
---

<style>
  .team-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .recruitment-notice {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 12px;
    margin: 30px 0;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  .recruitment-notice h3 {
    margin: 0 0 10px 0;
    font-size: 1.3em;
    font-weight: 600;
  }
  
  .recruitment-notice p {
    margin: 0;
    font-size: 1.1em;
    opacity: 0.95;
  }
  
  .section-header {
    border-left: 4px solid #667eea;
    padding-left: 20px;
    margin: 40px 0 30px 0;
  }
  
  .section-header h2 {
    margin: 0;
    color: #333;
    font-size: 1.8em;
    font-weight: 600;
  }
  
  .section-header .subtitle {
    color: #666;
    font-size: 1em;
    margin-top: 5px;
  }
  
  .members-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 30px 0;
  }
  
  .member-card {
    background: white;
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #f0f0f0;
  }
  
  .member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }
  
  .member-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 20px;
    border: 4px solid #f8f9fa;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  .placeholder-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3em;
    border: 4px solid #f8f9fa;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  .member-name {
    font-size: 1.3em;
    font-weight: 600;
    color: #333;
    margin: 0 0 10px 0;
  }
  
  .member-name a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .member-name a:hover {
    color: #764ba2;
  }
  
  .member-info {
    color: #666;
    line-height: 1.6;
    margin: 10px 0;
  }
  
  .member-info strong {
    color: #333;
  }
  
  .topic-tag {
    background: #667eea;
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    display: inline-block;
    margin: 10px 0;
  }
  
  .recruiting-card {
    background: linear-gradient(135deg, #4285f4 0%, #1976d2 100%);
    color: white;
    border: none;
  }
  
  .recruiting-card .placeholder-photo {
    background: rgba(255,255,255,0.2);
    color: white;
  }
  
  .recruiting-card .member-name {
    color: white;
    font-size: 1.2em;
  }
  
  .recruiting-card p {
    color: rgba(255,255,255,0.9);
  }
  
  .section-divider {
    height: 2px;
    background: linear-gradient(90deg, transparent, #667eea, transparent);
    margin: 50px 0;
    border: none;
  }
  
  .former-members-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin: 30px 0;
  }
  
  .former-member-item {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    transition: background-color 0.3s ease;
  }
  
  .former-member-item:hover {
    background: #e9ecef;
  }
  
  .former-member-name {
    font-size: 1.1em;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .former-member-note {
    color: #666;
    font-size: 0.9em;
    font-style: italic;
  }
  
  @media (max-width: 768px) {
    .members-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .former-members-list {
      grid-template-columns: 1fr;
      gap: 10px;
    }
    
    .member-photo, .placeholder-photo {
      width: 150px;
      height: 150px;
    }
    
    .recruitment-notice {
      padding: 20px;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .members-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }
    
    .former-members-list {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }
</style>

<div class="team-container">

  <div class="recruitment-notice">
    <h3>🔍 Join Our Research Team</h3>
    <p>We are actively looking for new PhD students and research interns to join our team</p>
    <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqVpcdBiuOVPPv897ubjZS-3uu-Q8RfO3HDo1WTjoAmS4iog/viewform?usp=dialog" target="_blank" style="background: white; color: #667eea; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; display: inline-block; transition: all 0.3s ease; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 2px 10px rgba(0,0,0,0.1)'">
        🎓 Apply for PhD Position
      </a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSgnTBbcmMwAt6twIICKNpEHGrqbTRylCkZS9MqJL3YpDpuw/viewform?usp=dialog" target="_blank" style="background: rgba(255,255,255,0.9); color: #4285f4; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; display: inline-block; transition: all 0.3s ease; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 2px 10px rgba(0,0,0,0.1)'">
        🔬 Apply for Research Intern
      </a>
    </div>
  </div>

  <div class="section-header">
    <h2>PhD Students</h2>
  </div>

  <div class="members-grid">
    <div class="member-card">
      <img src="../assets/img/Yuyang_pic.jpg" alt="Yuyang Ji" class="member-photo">
      <div class="member-name"><a href="https://steins45.github.io/" target="_blank">Yuyang Ji</a></div>
      <div class="member-info">
        <strong>Institution:</strong> Drexel University (Fall 2025-)<br>
        <strong>Email:</strong> yj428@drexel.edu<br>
        <strong>M.S.:</strong> New York University<br>
        <strong>B.Eng.:</strong> Southwest Jiaotong University
      </div>
    </div>
    
    <div class="member-card recruiting-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Open Position</div>
      <p>We're recruiting exceptional PhD candidates to join our research team. Apply now!</p>
    </div>
    
    <div class="member-card recruiting-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Open Position</div>
      <p>Another exciting opportunity for motivated doctoral students. Contact us to learn more!</p>
    </div>
  </div>

  <hr class="section-divider">

  <div class="section-header">
    <h2>Research Assistants & Interns</h2>
    <div class="subtitle">Graduate and undergraduate researchers contributing to ongoing projects</div>
  </div>

  <div class="members-grid">
    <div class="member-card">
      <img src="../assets/img/Behafarin_pic.jpg" alt="Behafarin Emam" class="member-photo">
      <div class="member-name">Behafarin Emam</div>
      <div class="topic-tag">WiFi data-based 3D human modeling</div>
      <div class="member-info">
        <strong>Master Student</strong>, Drexel University<br>
        <strong>Email:</strong> be379@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <img src="../assets/img/Ariji.jpg" alt="Arijit Chakma" class="member-photo">
      <div class="member-name">Arijit Chakma</div>
      <div class="topic-tag">Controllable image generation</div>
      <div class="member-info">
        <strong>Undergraduate</strong>, Drexel University<br>
        <strong>Email:</strong> ac4393@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <img src="../assets/img/Shengyang_pic.jpg" alt="Shengyang Dong" class="member-photo">
      <div class="member-name">Shengyang Dong</div>
      <div class="topic-tag">Discriminative 3D human digitization</div>
      <div class="member-info">
        <strong>Undergraduate</strong>, Drexel University<br>
        <strong>Email:</strong> sd3666@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <img src="../assets/img/Safa_pic.jpg" alt="Safa Obuz" class="member-photo">
      <div class="member-name">Safa Obuz</div>
      <div class="topic-tag">3D scene/object reconstruction</div>
      <div class="member-info">
        <strong>Undergraduate</strong>, Drexel University<br>
        <strong>Email:</strong> seo52@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <img src="../assets/img/Channacy.JPG" alt="Channacy Un" class="member-photo">
      <div class="member-name">Channacy Un</div>
      <div class="topic-tag">AI & Building</div>
      <div class="member-info">
        <strong>Undergraduate</strong>, Drexel University<br>
        <strong>Email:</strong> cu62@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Tasmia Rahman</div>
      <div class="topic-tag">Deepfake detection</div>
      <div class="member-info">
        <strong>STAR Scholars Program</strong>, Drexel University<br>
        <strong>Email:</strong> tjr364@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Yixuan Shen</div>
      <div class="topic-tag">4D motion modeling</div>
      <div class="member-info">
        <strong>Master Student</strong>, Drexel University<br>
        <strong>Email:</strong> ys844@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Helen Fan</div>
      <div class="topic-tag">Visual AI + Education</div>
      <div class="member-info">
        <strong> Master </strong>, UC Berkeley<br>
        <strong>Email:</strong> hf385@drexel.edu
      </div>
    </div>

    <div class="member-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Pengxiao Han</div>
      <div class="topic-tag">4D rigging</div>
      <div class="member-info">
        <strong> Master </strong>, Australian National University<br>
      </div>
    </div>

    <div class="member-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Anthony Chen</div>
      <div class="topic-tag">Gait clinic</div>
      <div class="member-info">
        <strong> Master </strong>, WashU<br>
      </div>
    </div>

    <div class="member-card">
      <div class="placeholder-photo">👤</div>
      <div class="member-name">Lucas Hathaway</div>
      <div class="topic-tag">4D motion generation</div>
      <div class="member-info">
        <strong>Undergraduate</strong>, Princeton University<br>
      </div>
    </div>
  </div>

  <hr class="section-divider">

  <div class="section-header">
    <h2>Former Lab Members</h2>
    <div class="subtitle">Alumni who have contributed to our research and moved on to new opportunities</div>
  </div>

  <div class="former-members-list">
    <div class="former-member-item">
      <div class="former-member-name">Rui Xia</div>
      <div class="former-member-note">2024 - Traffic scenario generation (2024)</div>
    </div>
    
    <div class="former-member-item">
      <div class="former-member-name">Ziang Gu</div>
      <div class="former-member-note">2024 - 4D motion planning and generation </div>
    </div>
    
    <!-- Add more former members as needed -->
  </div>

</div>