// Carousel functionality for leadership page
function changeSlide(button, direction) {
  const carouselContainer = button.closest('.carousel-container');
  const slides = carouselContainer.querySelectorAll('.carousel-slide');
  const dots = carouselContainer.querySelectorAll('.dot');
  
  let currentIndex = 0;
  
  // Find current active slide
  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      currentIndex = index;
    }
  });
  
  // Calculate new index
  let newIndex = currentIndex + direction;
  
  // Handle wrapping
  if (newIndex >= slides.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = slides.length - 1;
  }
  
  // Update slides
  slides[currentIndex].classList.remove('active');
  slides[newIndex].classList.add('active');
  
  // Handle videos in all slides
  slides.forEach((slide, index) => {
    const video = slide.querySelector('video');
    if (video) {
      if (index === newIndex) {
        // Video is now active - ensure it's visible and can play
        video.style.display = 'block';
      } else {
        // Video is inactive - hide it and pause
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0; // Reset to beginning
      }
    }
  });
  
  // Update dots
  dots[currentIndex].classList.remove('active');
  dots[newIndex].classList.add('active');
}

function currentSlide(dot, slideNumber) {
  const carouselContainer = dot.closest('.carousel-container');
  const slides = carouselContainer.querySelectorAll('.carousel-slide');
  const dots = carouselContainer.querySelectorAll('.dot');
  
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Handle videos in all slides
  slides.forEach((slide, index) => {
    const video = slide.querySelector('video');
    if (video) {
      if (index === slideNumber - 1) {
        // Video is now active - ensure it's visible and can play
        video.style.display = 'block';
      } else {
        // Video is inactive - hide it and pause
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0; // Reset to beginning
      }
    }
  });
  
  // Add active class to selected slide and dot
  slides[slideNumber - 1].classList.add('active');
  dots[slideNumber - 1].classList.add('active');
}

// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Optional: Enable auto-advance
  // autoAdvanceCarousel();
});
