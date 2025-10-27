---
layout: page
permalink: /lab/
title: Visual Intelligence Lab
description:
nav: true
importance: 6
---

<style>
  .lab-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .coming-soon-hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 60px 40px;
    border-radius: 16px;
    margin: 40px 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }
  
  .coming-soon-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
  }
  
  .lab-title {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0 0 20px 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .coming-soon-text {
    font-size: 1.3em;
    margin: 0 0 30px 0;
    opacity: 0.95;
  }
  
  .subtitle {
    font-size: 1.1em;
    opacity: 0.9;
    margin-bottom: 40px;
    line-height: 1.6;
  }
  
  .github-link {
    background: rgba(255,255,255,0.2);
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
  }
  
  .github-link:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    color: white;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .lab-container {
      padding: 15px;
    }
    
    .coming-soon-hero {
      padding: 40px 25px;
    }
    
    .lab-title {
      font-size: 2em;
    }
    
    .coming-soon-text {
      font-size: 1.1em;
    }
  }
</style>

<div class="lab-container">
  
  <div class="coming-soon-hero">
    <div class="hero-content">
      <h1 class="lab-title">🔬 <a href="https://vilab-group.com/" target="_blank" style="color: white; text-decoration: none;">Visual Intelligence Lab</a></h1>
      <p class="coming-soon-text">Coming Soon</p>
      <p class="subtitle">
      </p>
      <a href="https://github.com/VILab-Drexel" target="_blank" class="github-link">
        <span>🔗</span>
        Visit Our GitHub
      </a>
    </div>
  </div>

</div>