// Unified carousel functionality for all pages
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
  
  // Find dots - try multiple selectors
  let dots = [];
  const cardContainer = carousel.closest('.work-card, .arts-card, .flip-leadership-card, .leadership-card');
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
  
  // Find dots - try multiple selectors
  let dots = [];
  const cardContainer = carousel.closest('.work-card, .arts-card, .flip-leadership-card, .leadership-card');
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
