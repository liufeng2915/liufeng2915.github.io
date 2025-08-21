---
layout: page
permalink: /teaching/
title: Teaching
nav: true
importance: 2
---

<style>
  .teaching-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .teaching-intro {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 40px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  .teaching-intro h2 {
    margin: 0 0 15px 0;
    font-size: 1.5em;
    font-weight: 600;
  }
  
  .teaching-intro p {
    margin: 0;
    font-size: 1.1em;
    opacity: 0.95;
    line-height: 1.6;
  }
  
  .courses-section {
    margin: 40px 0;
  }
  
  .section-header {
    border-left: 4px solid #667eea;
    padding-left: 20px;
    margin: 30px 0 25px 0;
  }
  
  .section-header h3 {
    margin: 0;
    color: #333;
    font-size: 1.4em;
    font-weight: 600;
  }
  
  .section-header .institution {
    color: #666;
    font-size: 1em;
    margin-top: 5px;
  }
  
  .courses-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .course-item {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .course-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border-color: #667eea;
  }
  
  .course-header {
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .course-info {
    flex: 1;
    min-width: 300px;
  }
  
  .course-title {
    font-size: 1.2em;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .course-title a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .course-title a:hover {
    color: #764ba2;
  }
  
  .course-code {
    background: #f8f9fa;
    color: #495057;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.9em;
    font-weight: 500;
    margin-right: 10px;
  }
  
  .course-details {
    color: #666;
    font-size: 0.95em;
    margin-top: 8px;
  }
  
  .course-semester {
    background: #667eea;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 500;
    white-space: nowrap;
  }
  
  .no-courses {
    text-align: center;
    color: #666;
    font-style: italic;
    padding: 40px 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 2px dashed #ddd;
  }
  
  @media (max-width: 768px) {
    .course-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .course-info {
      min-width: auto;
      width: 100%;
    }
    
    .course-semester {
      align-self: flex-start;
    }
    
    .teaching-intro {
      padding: 25px 20px;
    }
    
    .section-header {
      padding-left: 15px;
    }
  }
</style>

<div class="teaching-container">

  <div class="courses-section">
    <div class="section-header">
      <h3>Current Courses</h3>
      <div class="institution">Drexel University</div>
    </div>
    
    <ul class="courses-list">
      <li class="course-item">
        <div class="course-header">
          <div class="course-info">
            <div class="course-title">
              <span class="course-code">CS583</span>
              <a href="../assets/pdf/CS583_syllabus.pdf" target="_blank">Introduction to Computer Vision</a>
            </div>
          </div>
          <div class="course-semester">Fall 2025-2026</div>
        </div>
      </li>
      
      <li class="course-item">
        <div class="course-header">
          <div class="course-info">
            <div class="course-title">
              <span class="course-code">CS435</span>
              <a href="" target="_blank">Computational Photography</a>
            </div>
          </div>
          <div class="course-semester">Winter 2025-2026</div>
        </div>
      </li>
    </ul>
  </div>

  <div class="courses-section">
    <div class="section-header">
      <h3>Previous Courses</h3>
      <div class="institution">Drexel University</div>
    </div>
    
    <ul class="courses-list">
      <li class="course-item">
        <div class="course-header">
          <div class="course-info">
            <div class="course-title">
              <span class="course-code">CS583</span>
              <a href="" target="_blank">Introduction to Computer Vision</a>
            </div>
          </div>
          <div class="course-semester">Fall 2025-2026</div>
        </div>
      </li>
      
      <li class="course-item">
        <div class="course-header">
          <div class="course-info">
            <div class="course-title">
              <span class="course-code">CS435</span>
              <a href="" target="_blank">Computational Photography</a>
            </div>
          </div>
          <div class="course-semester">Winter 2025-2026</div>
        </div>
      </li>
    </ul>
  </div>


  <!-- Previous Courses - Michigan State University -->
  <div class="courses-section">
    <div class="section-header">
      <h3>Previous Courses</h3>
      <div class="institution">Michigan State University</div>
    </div>
    
    <ul class="courses-list">
      <li class="course-item">
        <div class="course-header">
          <div class="course-info">
            <div class="course-title">
              <span class="course-code">CSE803</span>
              <a href="" target="_blank">Computer Vision</a>
            </div>
          </div>
          <div class="course-semester">Fall 2023-2024</div>
        </div>
      </li>
    </ul>
  </div>
</div>