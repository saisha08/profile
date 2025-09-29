---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div class="intro">
    <h1>Hello! I'm {{ site.title }}.</h1>
    <p>I'm a high‑school senior with interests spanning <strong>computer science</strong>, <strong>research</strong>, <strong>arts</strong>, and <strong>leadership</strong>. This site highlights a concise selection of my work for college applications. <a href="{{ '/resume/' | relative_url }}">View my resume</a></p>
  </div>
</section>

<section class="section">
  <h2>Highlights</h2>
  
  <!-- Activity Cards Section -->
  <div class="activity-cards-container" style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
    
    <!-- DECA Activity Card -->
    <div class="activity-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
        <div class="activity-icon" style="font-size: 1.2rem;">🏆</div>
        <h3 style="color: #000; margin: 0;">DECA Leadership</h3>
      </div>
      <p style="margin: 0 0 1rem 0; color: #666;">Vice President of Texas's #2 ranked chapter with 634 members. Led charity events raising $10k+ and improved State qualification rates by 30%.</p>
      <div class="activity-stats" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #3eb0d2; font-weight: bold;">
        <span>634 Members</span>
        <span>$10k+ Raised</span>
      </div>
    </div>

    <!-- Research Activity Card -->
    <div class="activity-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
        <div class="activity-icon" style="font-size: 1.2rem;">🔬</div>
        <h3 style="color: #000; margin: 0;">AI Research</h3>
      </div>
      <p style="margin: 0 0 1rem 0; color: #666;">Team Lead for NYAS Ethical AI Challenge. Designed AI-driven solutions for education with international researchers and 3 school districts.</p>
      <div class="activity-stats" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #3eb0d2; font-weight: bold;">
        <span>Top 10/300</span>
        <span>3 Countries</span>
      </div>
    </div>

    <!-- Community Service Card -->
    <div class="activity-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
        <div class="activity-icon" style="font-size: 1.2rem;">🤝</div>
        <h3 style="color: #000; margin: 0;">Community Impact</h3>
      </div>
      <p style="margin: 0 0 1rem 0; color: #666;">Co-founded Generation STRIVE health program for seniors. Achieved 78% improvement in bone health awareness through 10-hour curriculum.</p>
      <div class="activity-stats" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #3eb0d2; font-weight: bold;">
        <span>60+ Seniors</span>
        <span>78% Improvement</span>
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

    <!-- Community Impact Article Card -->
    <div class="featured-article-card" style="flex: 1; min-width: 300px; background: #f0f4f7; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
      <img src="{{ '/assets/img/sample-leadership.jpg' | relative_url }}" alt="Community Impact Article" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
      <h3 style="color: #000; margin: 0 0 0.5rem 0;">Youth Leadership Impact</h3>
      <p style="margin: 0 0 1rem 0; color: #666;">High school students across Texas are making significant contributions to their communities through innovative leadership programs and service initiatives.</p>
      <div class="article-stats" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #888;">
        <span>Youth Focus</span>
        <span>Community Service</span>
      </div>
      <div style="margin-top: 1rem;">
        <a href="#" style="color: #3eb0d2; text-decoration: none; font-size: 0.9rem; font-weight: bold;">Read Full Article →</a>
      </div>
    </div>
    
  </div>
</section>
