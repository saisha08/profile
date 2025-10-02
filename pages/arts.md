---
layout: default
title: Arts
permalink: /arts/
---

<section class="section">
  <h2>Arts</h2>

  <div class="arts-cards-stack">
    <!-- Violin Card -->
    <article class="arts-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f0f4f7; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); align-items: center;">
      <div class="image-container" style="flex: 0 0 400px; position: relative;">
        <img src="{{ '/assets/img/Violin/violin.webp' | relative_url }}" alt="Violin" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px;">
      </div>
      <div class="content" style="flex: 1;">
        <h3 style="margin-bottom: 0;">Violin</h3>
        <div class="meta" style="margin-top: 0;"><strong style="color: #3eb0d2;">Orchestra</strong> · 2018 – 2025</div>
        <p>Active member of the school orchestra, performing in concerts and competitions. Achieved Texas Music Federation All-State Winner recognition in 2022 and 2023. Participated in ensemble performances and solo recitals, contributing to the musical community through classical and contemporary repertoire.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>2× All-State</span>
          <span>6+ Years</span>
          <span>Orchestra</span>
        </div>
      </div>
    </article>

    <!-- Card-Making Card -->
    <article class="arts-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f0f4f7; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); align-items: center;">
      <div class="carousel-container" style="flex: 0 0 400px; position: relative;">
        <div class="carousel" id="card-making-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/Card-Making/IMG_9930.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: block;">
          <img src="{{ '/assets/img/Card-Making/IMG_6729.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_6737.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_6739.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_6945.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_8463.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_8469 (1).jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_9917.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_9926.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
          <img src="{{ '/assets/img/Card-Making/IMG_9932.jpg' | relative_url }}" alt="Card making" style="width: 100%; height: 250px; object-fit: contain; object-position: center; display: none;">
        </div>
        <button class="carousel-btn prev" onclick="changeSlide('card-making-carousel', -1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">‹</button>
        <button class="carousel-btn next" onclick="changeSlide('card-making-carousel', 1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">›</button>
        <div class="carousel-dots" style="text-align: center; margin-top: 10px;">
          <span class="dot active" onclick="currentSlide('card-making-carousel', 0)" style="height: 10px; width: 10px; background-color: #3eb0d2; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 1)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 2)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 3)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 4)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 5)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 6)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 7)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 8)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('card-making-carousel', 9)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
        </div>
      </div>
      <div class="content" style="flex: 1;">
        <h3 style="margin-bottom: 0;">Card-Making (Hobby)</h3>
        <div class="meta" style="margin-top: 0;"><strong style="color: #3eb0d2;">Card Maker</strong> · 2022 – Present</div>
        <p>Create handmade cards to show appreciation for teachers and community. Experimented with a multitude of different styles and mediums including pencil sketches, watercolor, and now embroidered cards.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>Handmade</span>
          <span>Creative Design</span>
          <span>Personal Touch</span>
        </div>
      </div>
    </article>
  </div>
</section>

<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>