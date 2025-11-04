---
layout: default
title: Work
permalink: /work/
---

<section class="section">
  <h2>Work</h2>
  <p>My work experience reflects my commitment to driving impact through strategic thinking, data-driven decision-making, and cross-cultural collaboration. From advising startups to consulting with international businesses, I bring a results-oriented approach that transforms challenges into opportunities for growth and innovation.</p>

  <div class="work-cards-stack">
    <!-- Gymnastics Coach Card -->
    <article class="work-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f0f4f7; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); align-items: center;">
      <div class="carousel-container" style="flex: 0 0 300px; position: relative;">
        <div class="carousel" id="gymnastics-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/gymnastics-coaching/img_7222.jpg' | relative_url }}" alt="Gymnastics coaching" style="width: 100%; height: 200px; object-fit: cover; display: block;">
          <img src="{{ '/assets/img/gymnastics-coaching/img_8513.jpg' | relative_url }}" alt="Team training" style="width: 100%; height: 200px; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/gymnastics-coaching/img_9993.jpg' | relative_url }}" alt="Competition" style="width: 100%; height: 200px; object-fit: cover; display: none;">
        </div>
        <button class="carousel-btn prev" onclick="changeSlide('gymnastics-carousel', -1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">‹</button>
        <button class="carousel-btn next" onclick="changeSlide('gymnastics-carousel', 1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">›</button>
        <div class="carousel-dots" style="text-align: center; margin-top: 10px;">
          <span class="dot active" onclick="currentSlide('gymnastics-carousel', 0)" style="height: 10px; width: 10px; background-color: #3eb0d2; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('gymnastics-carousel', 1)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('gymnastics-carousel', 2)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
        </div>
      </div>
      <div class="content" style="flex: 1;">
        <h3 style="margin-bottom: 0;">Gymnastics Coach, Austin Gymnastics Club</h3>
        <div class="meta" style="margin-top: 0;"><strong style="color: #3eb0d2;">Gymnastics Coach</strong> · Mar 2023 – Present</div>
        <p>Head coach for a total of over 400+ students across Pre-School, 101, Pre-Competitive, Camps, and Birthday Parties. Collaborated with staff and parents to run high-quality programs and develop curriculum.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>400+ Students</span>
          <span>Curriculum Development</span>
        </div>
      </div>
    </article>

    <!-- Archivist Card -->
    <article class="work-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f0f4f7; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); align-items: center;">
      <div class="carousel-container" style="flex: 0 0 300px; position: relative;">
        <div class="carousel" id="archivalist-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/IndieMeme/Mixer.jpg' | relative_url }}" alt="Film festival archival work" style="width: 100%; height: 200px; object-fit: cover; display: block;">
          <img src="{{ '/assets/img/IndieMeme/WhatsApp Image 2025-09-28 at 5.05.05 PM.jpeg' | relative_url }}" alt="Interview process" style="width: 100%; height: 200px; object-fit: cover; display: none;">
        </div>
        <button class="carousel-btn prev" onclick="changeSlide('archivalist-carousel', -1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">‹</button>
        <button class="carousel-btn next" onclick="changeSlide('archivalist-carousel', 1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">›</button>
        <div class="carousel-dots" style="text-align: center; margin-top: 10px;">
          <span class="dot active" onclick="currentSlide('archivalist-carousel', 0)" style="height: 10px; width: 10px; background-color: #3eb0d2; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('archivalist-carousel', 1)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
        </div>
      </div>
      <div class="content" style="flex: 1;">
        <h3 style="margin-bottom: 0;">Archivist, Indie Meme: South Asian Film Festival</h3>
        <div class="meta" style="margin-top: 0;"><strong style="color: #3eb0d2;">Archivist</strong> · Dec 2023 – Present</div>
        <p>Managed archival initiatives under a City of Austin funded grant, to preserve Indie Meme's history and project materials at the Austin History Center. Conducted 30+ interviews, transcribed 50+ hours of content, and curated posters, trailers, and metadata for public access to preserve South Asian film heritage. This project ensures the cultural legacy of South Asian cinema is preserved for future generations.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>30+ Interviews</span>
          <span>50+ Hours of Content Transcribed</span>
          <span>City Funded</span>
        </div>
      </div>
    </article>

    <!-- MockStreetAI Card -->
    <article class="work-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f0f4f7; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); align-items: center;">
      <div class="carousel-container" style="flex: 0 0 300px; position: relative;">
        <div class="carousel" id="mockstreet-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/MockStreet/Screenshot 2025-11-02 122327.png' | relative_url }}" alt="MockStreetAI" style="width: 100%; height: 200px; object-fit: cover; display: block;">
        </div>
      </div>
      <div class="content" style="flex: 1;">
        <h3 style="margin-bottom: 0;">Go-To-Market (GTM) Strategy Intern, MockStreetAI</h3>
        <div class="meta" style="margin-top: 0;"><strong style="color: #3eb0d2;">Go-To-Market (GTM) Strategy Intern</strong> · SEP 2025 – Present</div>
        <p>Collaborated with founders to define and execute the B2C go-to-market strategy for MockStreetAI, an AI-powered finance interview preparation platform, driving the startup to achieve 4-figure Monthly Recurring Revenue (MRR) in two months. Led comprehensive market research and in-depth competitor analysis spanning 20+ industry players to uncover market whitespace and sharpen product positioning for strategic advantage. Launched targeted outreach campaigns to university finance clubs and LinkedIn communities, growing early-access signups by 40% in 3 weeks. Designed and A/B-tested highly personalized cold email and landing page copy, resulting in a 2.3x increase in conversion rates from free users to paid subscribers.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>4-Figure MRR</span>
          <span>40% Growth</span>
          <span>2.3x Conversion</span>
        </div>
      </div>
    </article>

    <!-- Leadership Initiative International Consulting Card -->
    <article class="work-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f0f4f7; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); align-items: center;">
      <div class="carousel-container" style="flex: 0 0 300px; position: relative;">
        <div class="carousel" id="li-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/LI/Screenshot 2025-11-03 072939.png' | relative_url }}" alt="Strategy implementation" style="width: 100%; height: 200px; object-fit: cover; display: block;">
          <img src="{{ '/assets/img/LI/Screenshot 2025-01-19 094150.png' | relative_url }}" alt="Leadership Initiative consulting work" style="width: 100%; height: 200px; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/LI/Screenshot 2025-03-09 093847.png' | relative_url }}" alt="Client consulting" style="width: 100%; height: 200px; object-fit: cover; display: none;">
        </div>
        <button class="carousel-btn prev" onclick="changeSlide('li-carousel', -1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">‹</button>
        <button class="carousel-btn next" onclick="changeSlide('li-carousel', 1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">›</button>
        <div class="carousel-dots" style="text-align: center; margin-top: 10px;">
          <span class="dot active" onclick="currentSlide('li-carousel', 0)" style="height: 10px; width: 10px; background-color: #3eb0d2; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('li-carousel', 1)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('li-carousel', 2)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
        </div>
      </div>
      <div class="content" style="flex: 1;">
        <h3 style="margin-bottom: 0;">Consultant, Leadership Initiatives International Internship Program (LI-IIP)</h3>
        <div class="meta" style="margin-top: 0;"><strong style="color: #3eb0d2;">Consultant</strong> · Jan 2024 – Dec 2024</div>
        <p>Advised a small business in Nigeria: built advertising strategy and a comprehensive financial plan; designed and executed campaigns; led monthly client reviews to optimize strategy; secured $700 in funding for community initiatives.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>$700 Funding</span>
          <span>International</span>
          <span>Strategy & Finance</span>
        </div>
      </div>
    </article>
  </div>
</section>

<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>