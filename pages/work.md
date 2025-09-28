---
layout: default
title: Work
permalink: /work/
---

<section class="section">
  <h2>Work</h2>
  <p>Internships, part-time roles, volunteering, or freelance projects emphasizing impact and skills learned.</p>

  <div class="work-cards-stack">
    <!-- Gymnastics Coach Card -->
    <article class="work-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #3eb0d2; align-items: center;">
      <div class="carousel-container" style="flex: 0 0 300px; position: relative;">
        <div class="carousel" id="gymnastics-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/Gymnastics Coaching/IMG_7222.jpg' | relative_url }}" alt="Gymnastics coaching" style="width: 100%; height: 200px; object-fit: cover; display: block;">
          <img src="{{ '/assets/img/Gymnastics Coaching/IMG_8513 (1).jpg' | relative_url }}" alt="Team training" style="width: 100%; height: 200px; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/Gymnastics Coaching/IMG_9993.jpg' | relative_url }}" alt="Competition" style="width: 100%; height: 200px; object-fit: cover; display: none;">
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
        <div class="meta" style="margin-top: 0;">Mar 2023 – Present</div>
        <p>Head coach for 100+ students across Pre-School, 101, Pre-Competitive, and Camps programs. Team captain for 14 girls, leading them to wins at State and Regional competitions while managing team dynamics and morale. Collaborated with staff and parents to run high-quality programs and develop curriculum.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>100+ Students</span>
          <span>22 hrs/week</span>
          <span>State Champions</span>
        </div>
      </div>
    </article>

    <!-- Archivalist Card -->
    <article class="work-card" style="display: flex; gap: 2rem; margin-bottom: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #3eb0d2; align-items: center;">
      <div class="carousel-container" style="flex: 0 0 300px; position: relative;">
        <div class="carousel" id="archivalist-carousel" style="display: flex; overflow: hidden; border-radius: 8px;">
          <img src="{{ '/assets/img/sample-leadership.jpg' | relative_url }}" alt="Film festival archival work" style="width: 100%; height: 200px; object-fit: cover; display: block;">
          <img src="{{ '/assets/img/sample-leadership-2.jpg' | relative_url }}" alt="Interview process" style="width: 100%; height: 200px; object-fit: cover; display: none;">
          <img src="{{ '/assets/img/sample-leadership-3.jpg' | relative_url }}" alt="Archival materials" style="width: 100%; height: 200px; object-fit: cover; display: none;">
        </div>
        <button class="carousel-btn prev" onclick="changeSlide('archivalist-carousel', -1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">‹</button>
        <button class="carousel-btn next" onclick="changeSlide('archivalist-carousel', 1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 8px 12px; border-radius: 50%; cursor: pointer;">›</button>
        <div class="carousel-dots" style="text-align: center; margin-top: 10px;">
          <span class="dot active" onclick="currentSlide('archivalist-carousel', 0)" style="height: 10px; width: 10px; background-color: #3eb0d2; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('archivalist-carousel', 1)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
          <span class="dot" onclick="currentSlide('archivalist-carousel', 2)" style="height: 10px; width: 10px; background-color: #bbb; border-radius: 50%; display: inline-block; margin: 0 5px; cursor: pointer;"></span>
        </div>
      </div>
      <div class="content" style="flex: 1;">
        <h3 style="margin-bottom: 0;">Archivalist, Indie Meme: South Asian Film Festival</h3>
        <div class="meta" style="margin-top: 0;">Dec 2023 – Present</div>
        <p>Led City-funded archival initiative with Austin History Center. Conducted 20+ interviews, transcribed 50+ hours of content, and curated posters, trailers, and metadata for public access to preserve South Asian film heritage. This project ensures the cultural legacy of South Asian cinema is preserved for future generations.</p>
        <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
          <span>20+ Interviews</span>
          <span>50+ Hours</span>
          <span>City Funded</span>
        </div>
      </div>
    </article>
  </div>
</section>

<script>
// Carousel functionality for work page
let currentSlideIndex = {};

function changeSlide(carouselId, direction) {
  console.log('changeSlide called with:', carouselId, direction);
  
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    console.error('Carousel not found:', carouselId);
    return;
  }
  
  const images = carousel.querySelectorAll('img');
  console.log('Found images:', images.length);
  
  // Find dots
  let dots = [];
  const cardContainer = carousel.closest('.work-card, .arts-card');
  if (cardContainer) {
    dots = cardContainer.querySelectorAll('.dot');
  }
  
  // Initialize current slide index if not set
  if (!currentSlideIndex[carouselId]) {
    currentSlideIndex[carouselId] = 0;
  }
  
  let currentIndex = currentSlideIndex[carouselId];
  let newIndex = currentIndex + direction;
  
  // Handle wrapping
  if (newIndex >= images.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = images.length - 1;
  }
  
  console.log('Changing from', currentIndex, 'to', newIndex);
  
  // Hide current image
  images[currentIndex].style.display = 'none';
  
  // Show new image
  images[newIndex].style.display = 'block';
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === newIndex ? '#3eb0d2' : '#bbb';
  });
  
  // Update current index
  currentSlideIndex[carouselId] = newIndex;
}

function currentSlide(carouselId, slideNumber) {
  console.log('currentSlide called with:', carouselId, slideNumber);
  
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    console.error('Carousel not found:', carouselId);
    return;
  }
  
  const images = carousel.querySelectorAll('img');
  
  // Find dots
  let dots = [];
  const cardContainer = carousel.closest('.work-card, .arts-card');
  if (cardContainer) {
    dots = cardContainer.querySelectorAll('.dot');
  }
  
  // Hide all images
  images.forEach(img => img.style.display = 'none');
  
  // Show selected image
  images[slideNumber].style.display = 'block';
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === slideNumber ? '#3eb0d2' : '#bbb';
  });
  
  // Update current index
  currentSlideIndex[carouselId] = slideNumber;
}

// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing carousels');
  
  // Initialize all carousels to show first image
  const carousels = document.querySelectorAll('.carousel');
  console.log('Found carousels:', carousels.length);
  
  carousels.forEach(carousel => {
    const carouselId = carousel.id;
    const images = carousel.querySelectorAll('img');
    
    console.log('Initializing carousel:', carouselId, 'with', images.length, 'images');
    
    // Hide all images except the first one
    images.forEach((img, index) => {
      img.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Initialize current slide index
    currentSlideIndex[carouselId] = 0;
  });
});
</script>