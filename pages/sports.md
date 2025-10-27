---
layout: default
title: Sports
permalink: /sports/
---

<section class="section">
  <h2>Sports</h2>

  <div class="leadership-cards-stack">
    <!-- Gymnastics Card -->
    <article class="leadership-card" id="gymnastics">
      <div class="card-content">
        <div class="image-section">
          <div class="image-container">
            <img src="{{ '/assets/img/Gymnastics - Sports/Team.jpg' | relative_url }}" alt="Gymnastics team" class="sports-image">
          </div>
          <div class="recent-skills">
            <h4>Recent Skills</h4>
            <div class="skills-divider"></div>
            
            <div class="video-grid">
              <div class="video-item">
                <video controls preload="metadata">
                  <source src="{{ '/assets/img/Gymnastics - Sports/Vault.mp4' | relative_url }}" type="video/mp4">
                  Your browser does not support the video tag. <a href="{{ '/assets/img/Gymnastics - Sports/Vault.mp4' | relative_url }}" download>Download Vault video</a>
                </video>
                <p>Handspring Front Tuck Vault (Level 9 Vault)</p>
              </div>
              
              <div class="video-item">
                <video controls preload="metadata">
                  <source src="{{ '/assets/img/Gymnastics - Sports/Fulls.mp4' | relative_url }}" type="video/mp4">
                  Your browser does not support the video tag. <a href="{{ '/assets/img/Gymnastics - Sports/Fulls.mp4' | relative_url }}" download>Download Full Routine video</a>
                </video>
                <p>Front Handspring Front Full</p>
              </div>
              
              <div class="video-item">
                <video controls preload="metadata">
                  <source src="{{ '/assets/img/Gymnastics - Sports/Front tuck.mp4' | relative_url }}" type="video/mp4">
                  Your browser does not support the video tag. <a href="{{ '/assets/img/Gymnastics - Sports/Front tuck.mp4' | relative_url }}" download>Download Front Tuck video</a>
                </video>
                <p>Front Tuck on Beam</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-text-content">
          <h3>Gymnastics</h3>
          <div class="meta"><strong>Competitive Gymnast & Coach</strong> · 2018 – Present</div>
          <p>Competitive gymnast with 8+ years of experience, specializing in artistic gymnastics (vault, beam, floor, bars). Currently coaching young athletes and helping develop fundamental skills. Won gold in regional competitions and state championships.</p>
          <div class="activity-stats">
            <span>8+ Years</span>
            <span>Regional Competitions</span>
            <span>Youth Coach</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Ballroom Card -->
    <article class="leadership-card" id="ballroom">
      <div class="card-content">
        <div class="image-section">
          <div class="image-container">
            <img src="{{ '/assets/img/Ballroom Dancing/teacher.jpg' | relative_url }}" alt="Ballroom dancing" class="sports-image" style="object-position: center 20%;">
          </div>
          <div class="recent-competition" style="margin-top: 1rem;">
            <h4 style="margin-bottom: 0.5rem; color: #333; font-size: 1rem;">Most Recent Competition - San Antonio Classic</h4>
            <div class="skills-divider"></div>
            
            <div class="video-grid" style="margin-top: 2.5rem;">
              <div style="position: relative; width: 100%; overflow: hidden;">
                <div style="display: flex; gap: 1rem; transition: transform 0.3s ease;" id="ballroom-carousel">
                  <div style="flex: 0 0 calc(33.333% - 0.67rem);">
                    <video controls style="width: 100%; height: 200px; border-radius: 8px; margin-bottom: 0.5rem; object-fit: cover;" preload="metadata">
                      <source src="{{ '/assets/img/Ballroom Dancing/Waltz.mp4' | relative_url }}" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;">Waltz</p>
                  </div>
                  
                  <div style="flex: 0 0 calc(33.333% - 0.67rem);">
                    <video controls style="width: 100%; height: 200px; border-radius: 8px; margin-bottom: 0.5rem; object-fit: cover;" preload="metadata">
                      <source src="{{ '/assets/img/Ballroom Dancing/Tango.mp4' | relative_url }}" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;">Tango</p>
                  </div>
                  
                  <div style="flex: 0 0 calc(33.333% - 0.67rem);">
                    <video controls style="width: 100%; height: 200px; border-radius: 8px; margin-bottom: 0.5rem; object-fit: cover;" preload="metadata">
                      <source src="{{ '/assets/img/Ballroom Dancing/Foxtrot.mp4' | relative_url }}" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                    <p style="font-size: 0.9rem; color: #666; margin: 0;">Foxtrot</p>
                  </div>
                  
                  <div style="flex: 0 0 calc(33.333% - 0.67rem);">
                    <img src="{{ '/assets/img/Ballroom Dancing/Award.JPG' | relative_url }}" alt="Award photo" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 0.5rem;">
                    <p style="font-size: 0.9rem; color: #666; margin: 0;">1st Place in Waltz, Tango, Foxtrot</p>
                  </div>
                  
                  <div style="flex: 0 0 calc(33.333% - 0.67rem);">
                    <img src="{{ '/assets/img/Ballroom Dancing/dad.JPG' | relative_url }}" alt="Dad photo" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 0.5rem;">
                  </div>
                </div>
                
                <button onclick="scrollBallroomCarousel(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(62, 176, 210, 0.8); color: white; border: none; padding: 12px 16px; border-radius: 50%; cursor: pointer; font-size: 1.2rem; z-index: 10;">‹</button>
                <button onclick="scrollBallroomCarousel(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(62, 176, 210, 0.8); color: white; border: none; padding: 12px 16px; border-radius: 50%; cursor: pointer; font-size: 1.2rem; z-index: 10;">›</button>
              </div>
            </div>
          </div>
        </div>
        <div class="content" style="flex: 1;">
          <h3 style="margin-bottom: 0;">Ballroom Dancing</h3>
          <div class="meta" style="margin-top: 0;"><strong style="color: #3eb0d2;">Competitive Dancer</strong> · 2024 – Present</div>
          <p>Competitive ballroom dancer specializing in American Smooth styles (Waltz, Tango, Foxtrot, Viennese Waltz). Won gold in regional competitions and showcases. Focus on technique, performance, and partnership dynamics in competitive dance.</p>
          <div class="activity-stats" style="display: flex; gap: 1rem; font-size: 0.9rem; color: #888; margin-top: 1rem;">
            <span>American Smooth</span>
            <span>Regional Competitions</span>
            <span>Performance Focus</span>
          </div>
      </div>
      </div>
    </article>
  </div>
</section>

<script>
let ballroomCarouselPosition = 0;
const ballroomCarouselItems = 5; // Total number of items
const ballroomCarouselVisible = 3; // Number of items visible at once

function scrollBallroomCarousel(direction) {
  const carousel = document.getElementById('ballroom-carousel');
  const container = carousel.parentElement;
  const maxPosition = ballroomCarouselItems - ballroomCarouselVisible;
  
  ballroomCarouselPosition += direction;
  
  // Clamp position between 0 and maxPosition
  ballroomCarouselPosition = Math.max(0, Math.min(ballroomCarouselPosition, maxPosition));
  
  // Calculate scroll amount based on container width
  const itemWidth = container.offsetWidth / ballroomCarouselVisible;
  const scrollAmount = ballroomCarouselPosition * itemWidth;
  
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
}
</script>
