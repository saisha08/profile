---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div class="intro">
    <h1>Hello! I'm {{ site.title }}.</h1>
    <p style="text-indent: 2rem; margin-top: 1rem;">I'm a curious, results-driven student passionate about using data and behavioral science to make finance and education more equitable. I love tackling complex problems with both creativity and strategy—whether I'm leading global projects or collaborating with diverse teams. Outside of academics and analytics, I diversify my perspective through the arts, channeling the discipline of gymnastics, the elegance of ballroom dance, and the artistry of the violin. This blend of precision and imagination empowers me to create solutions that are both effective and deeply human-centered.</p>
    <p style="margin-top: 1rem;">
      <a href="{{ '/assets/Saisha_Siram_Resume.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" style="color: var(--brand); text-decoration: none !important; font-weight: 600; border: none;">View my resume →</a>
    </p>
  </div>
  <div class="hero-decoration">
    <div class="floating-shape shape-1"></div>
    <div class="floating-shape shape-2"></div>
    <div class="floating-shape shape-3"></div>
  </div>
</section>

<section class="section">
  <h2>Current/Recent Projects</h2>
  
  <!-- Activity Cards Section -->
  <div class="activity-cards-container animate-on-scroll">
    
    <!-- DECA Activity Card -->
    <div class="activity-card enhanced-card">
      <div class="card-header">
        <div class="activity-icon">🏆</div>
        <h3 style="margin-bottom: 0;">DECA 5k Dash Fundraiser</h3>
      </div>
      
      <h4 style="color: #1a7a8a; font-size: 0.9rem; font-weight: 600; margin: -0.5rem 0 0.5rem 0;">Team Lead · Executive Vice President</h4>
      
      <!-- Image Carousel -->
      <div class="image-carousel">
        <img src="{{ '/assets/img/DECA/WarriorDash1.jpeg' | relative_url }}" alt="DECA 5k Dash Fundraiser" class="carousel-image">
      </div>
      
      <p style="margin: 0 0 0.3rem 0;">Launched Westwood DECA's first community race to raise funds for our teachers. In partnership with the City of Austin, I orchestrated event logistics, including facility permissions, official racing bib distributions, safety measures, etc.</p>
      <ul style="margin: 0 0; padding-left: 1.2rem; color: var(--muted);">
        <li>612 participants</li>
        <li>$10,000 raised</li>
        <li>4 local sponsors</li>
        <li>Now a chapter annual tradition</li>
      </ul>
      <p style="margin: 0.5rem 0 0.3rem 0;"><strong>Honors/Awards:</strong> 2x Finalist and Top 10 Presenter at the International Career Development Conference (ICDC) for Financial Consulting; Member of the Year</p>
      <p style="margin: 0 0 0 0; font-style: italic; color: #1a7a8a; font-size: 0.9rem; font-weight: 600;">Learned how to translate a small idea into real-world execution</p>
      <p style="margin: 0.3rem 0 0 0; font-size: 0.9rem;">
        <a href="{{ '/leadership/' | relative_url }}#deca" style="color: var(--brand); text-decoration: none !important; font-weight: 600; border: none;">More about my impact in DECA →</a>
      </p>
    </div>

    <!-- Research Activity Card -->
    <div class="activity-card enhanced-card">
      <div class="card-header">
        <div class="activity-icon">🔬</div>
        <h3 style="margin-bottom: 0;">Indiana University Machine Learning Datathon</h3>
      </div>
      
      <h4 style="color: #1a7a8a; font-size: 0.9rem; font-weight: 600; margin: -0.5rem 0 0.5rem 0;">Team Lead</h4>
      
      <!-- Image Carousel -->
      <div class="image-carousel">
        <img src="{{ '/assets/img/Datathon Homepage.png' | relative_url }}" alt="Indiana University Datathon" class="carousel-image">
      </div>
      
      <p style="margin: 0 0 0.3rem 0;">Placed in the Top 3 Teams at Indiana University's Datathon, where our team researched offensive language detection on social media. Under the guidance of <strong>Dr. Daniel Miehling</strong>, <strong>Prof. Gunther Jikeli Jr.</strong>, and <strong>Prof. Damir Cavar</strong>, we built and annotated a large dataset of social media posts. We then fine-tuned a HuggingFace transformer model in PyTorch to enhance hate-speech detection accuracy while studying the ethical implications of NLP in moderation systems.</p>
      
      <ul style="margin: 0.2rem 0; padding-left: 1.2rem; color: var(--muted);">
        <li>Placed in Top 3 overall among collegiate teams</li>
        <li>Achieved 14% accuracy improvement over baseline model</li>
        <li>Created and validated 500+ labeled data points for hate-speech detection</li>
        <li>Presented findings on AI ethics, fairness, and policy implications to industry leaders</li>
      </ul>
      
      <p style="margin: 0.2rem 0 0 0; font-style: italic; color: #1a7a8a; font-size: 0.9rem; font-weight: 600;">Gained a deeper understanding of how data quality and model tuning shape both accuracy and fairness in real-world NLP systems.</p>
      
      <p style="margin: 0.3rem 0 0 0; font-size: 0.9rem;">
        <a href="{{ '/academics-research/' | relative_url }}#datathon" style="color: var(--brand); text-decoration: none; font-weight: 600;">More about my research →</a>
      </p>
    </div>

    <!-- NTHS Book Drive Activity Card -->
    <div class="activity-card enhanced-card">
      <div class="card-header">
        <div class="activity-icon">📚</div>
        <h3 style="margin-bottom: 0;">NTHS Book Drive</h3>
      </div>
      
      <h4 style="color: #1a7a8a; font-size: 0.9rem; font-weight: 600; margin: -0.5rem 0 0.5rem 0;">Organizer</h4>
      
      <!-- Image Carousel -->
      <div class="carousel-container" style="position: relative; margin-bottom: 1rem; height: 250px; padding-bottom: 0;">
        <div class="carousel" id="nths-book-drive-carousel" style="display: flex; overflow: hidden; border-radius: 8px; height: 100%;">
          <img src="{{ '/assets/img/Book Drive/IMG_1884 (1).jpg' | relative_url }}" alt="NTHS Book Drive" style="width: 100%; height: 100%; object-fit: cover; display: block;">
          <img src="{{ '/assets/img/Book Drive/IMG_1740 (1).jpg' | relative_url }}" alt="NTHS Book Drive" style="width: 100%; height: 100%; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/Book Drive/IMG_1881 (1).jpg' | relative_url }}" alt="NTHS Book Drive" style="width: 100%; height: 100%; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/Book Drive/IMG_1917.jpg' | relative_url }}" alt="NTHS Book Drive" style="width: 100%; height: 100%; object-fit: cover; display: none;">
        </div>
        <button class="carousel-btn prev" onclick="changeSlide('nths-book-drive-carousel', -1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer; z-index: 10;">‹</button>
        <button class="carousel-btn next" onclick="changeSlide('nths-book-drive-carousel', 1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer; z-index: 10;">›</button>
        <div class="carousel-dots" style="position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 10; background: rgba(255, 255, 255, 0.9); padding: 4px 10px; border-radius: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <span class="dot active" onclick="currentSlide('nths-book-drive-carousel', 0)" style="height: 6px; width: 6px; background-color: #3eb0d2; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('nths-book-drive-carousel', 1)" style="height: 6px; width: 6px; background-color: rgba(255, 255, 255, 0.5); border-radius: 50%; display: inline-block; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('nths-book-drive-carousel', 2)" style="height: 6px; width: 6px; background-color: rgba(255, 255, 255, 0.5); border-radius: 50%; display: inline-block; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('nths-book-drive-carousel', 3)" style="height: 6px; width: 6px; background-color: rgba(255, 255, 255, 0.5); border-radius: 50%; display: inline-block; cursor: pointer;"></span>
        </div>
      </div>
      
      <p style="margin: 0 0 0.3rem 0;">Launched Westwood's largest-ever community book drive to expand access to reading for underprivileged children. In partnership with BookSpring, I coordinated cross-campus collection efforts, book curation, and distribution logistics, including age-based sorting and quality control.</p>
      <ul style="margin: 0 0; padding-left: 1.2rem; color: var(--muted);">
        <li>1,000+ books donated</li>
        <li>400 bookmarks distributed</li>
        <li>Partnered with 6 local high schools and feeder schools</li>
        <li>First-ever book drive for NTHS</li>
      </ul>
      <p style="margin: 0.2rem 0 0 0; font-style: italic; color: #1a7a8a; font-size: 0.9rem; font-weight: 600;">Learned how to scale a service initiative through partnerships, operations, and attention to impact quality.</p>
      <p style="margin: 0.3rem 0 0 0; font-size: 0.9rem;">
        <a href="{{ '/leadership/' | relative_url }}#nths" style="color: var(--brand); text-decoration: none !important; font-weight: 600; border: none;">Learn about my work in NTHS →</a>
      </p>
    </div>

  </div>
</section>

<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>

