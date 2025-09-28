// Carousel functionality for work page
let currentSlideIndex = {};

function changeSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelectorAll('img');
  const dots = carousel.closest('.work-card, .arts-card').querySelectorAll('.dot');
  
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
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelectorAll('img');
  const dots = carousel.closest('.work-card, .arts-card').querySelectorAll('.dot');
  
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
  // Initialize all carousels to show first image
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const carouselId = carousel.id;
    const images = carousel.querySelectorAll('img');
    
    // Hide all images except the first one
    images.forEach((img, index) => {
      img.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Initialize current slide index
    currentSlideIndex[carouselId] = 0;
  });
});
