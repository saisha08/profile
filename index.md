---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div class="intro">
    <h1>Hello! I'm {{ site.title }}.</h1>
    <p>I am a results-driven student leader with a passion for business, proven communication and analytical skills, and a commitment to academic and personal growth. <a href="{{ '/resume/' | relative_url }}">View my resume</a></p>
  </div>
</section>

<section class="section">
  <h2>Highlights</h2>
  
  <!-- Activity Cards Section -->
  <div class="activity-cards-container" style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
    
    <!-- DECA Activity Card -->
    <div class="activity-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); display: flex; flex-direction: column;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
        <div class="activity-icon" style="font-size: 1.2rem;">🏆</div>
        <h3 style="color: #000; margin: 0;">DECA 5k Fundraiser</h3>
      </div>
      <p style="margin: 0 0 1rem 0; color: #666; flex-grow: 1;">I spearheaded a 5K charity run with over 500 participants, securing sponsorship from 4 corporations for the event and successfully raising over $10,000 in funds for teachers. Our team orchestrated all event logistics, including permits, road closures, and safety measures, in partnership with the City of Austin.</p>
      
      <div class="activity-stats" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #3eb0d2; font-weight: bold; margin-top: auto;">
        <span>500+ Participants</span>
        <span>$10k+ Raised</span>
      </div>
    </div>

    <!-- Research Activity Card -->
    <div class="activity-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); display: flex; flex-direction: column;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
        <div class="activity-icon" style="font-size: 1.2rem;">🔬</div>
        <h3 style="color: #000; margin: 0;">AI Research</h3>
      </div>
      <p style="margin: 0 0 1rem 0; color: #666; flex-grow: 1;">Working with Professor Nathalie Japkowicz at American University in developing an app that uses NLP to detect hate speech (Antisemitism) in social media posts. The goal will be to expand the application of the app to various demographics including Anti-Asian, Anti-Islamic, and Anti-Black.</p>
      
      <div class="activity-stats" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #3eb0d2; font-weight: bold; margin-top: auto;">
        <span>NLP</span>
        <span>Hate-Speech Detection</span>
      </div>
    </div>

  </div>
</section>

<section class="section">
  <h2>Featured Articles</h2>
  
  <!-- Featured Articles Cards -->
  <div class="featured-articles-container" style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
    
    <!-- Ethics Bowl Article Card -->
    <div class="featured-article-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
      <img src="{{ '/assets/img/New Article/Screenshot 2025-09-28 134807.png' | relative_url }}" alt="Ethics Bowl Article" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
      <h3 style="color: #000; margin: 0 0 0.5rem 0;">Ethics Bowl Champions</h3>
      <p style="margin: 0 0 1rem 0; color: #666;">Westwood High School emerged victorious at the 13th Annual UT Tyler Ethics Bowl, competing against teams from across Texas. The team advanced to nationals and won the Social Media Award.</p>
      <div style="margin-top: 1rem;">
        <a href="https://www.uttyler.edu/research/centers/ethics/ethics-bowl/" target="_blank" style="color: #3eb0d2; text-decoration: none; font-size: 0.9rem; font-weight: bold;">Read Full Article →</a>
      </div>
    </div>

    <!-- WashU Olin Article Card -->
    <div class="featured-article-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
      <img src="{{ '/assets/img/New Article/Washu.png' | relative_url }}" alt="WashU Olin Article" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
      <h3 style="color: #000; margin: 0 0 0.5rem 0;">High School Students' Life at Olin Summer Programs</h3>
      <p style="margin: 0 0 1rem 0; color: #666;">High school students experience life at Washington University's Olin Business School through competitive summer programs, gaining hands-on experience in business, economics, and leadership.</p>
      <div style="margin-top: 1rem;">
        <a href="https://olin.washu.edu/about/news-and-media/news/2024/07/high-school-students-life-olin-summer-programs.php" target="_blank" style="color: #3eb0d2; text-decoration: none; font-size: 0.9rem; font-weight: bold;">Read Full Article →</a>
      </div>
    </div>

    
  </div>
</section>
