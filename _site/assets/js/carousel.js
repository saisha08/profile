// Universal carousel functionality - works for all pages
let carouselStates = {};

function changeSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    console.error('Carousel not found:', carouselId);
    return;
  }
  
  const images = carousel.querySelectorAll('img');
  if (images.length === 0) {
    console.error('No images found in carousel:', carouselId);
    return;
  }
  
  // Initialize state if not exists
  if (!carouselStates[carouselId]) {
    carouselStates[carouselId] = 0;
  }
  
  let currentIndex = carouselStates[carouselId];
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
  updateDots(carouselId, newIndex);
  
  // Update state
  carouselStates[carouselId] = newIndex;
}

function currentSlide(carouselId, slideNumber) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    console.error('Carousel not found:', carouselId);
    return;
  }
  
  const images = carousel.querySelectorAll('img');
  if (images.length === 0) {
    console.error('No images found in carousel:', carouselId);
    return;
  }
  
  // Hide all images
  images.forEach(img => img.style.display = 'none');
  
  // Show selected image
  images[slideNumber].style.display = 'block';
  
  // Update dots
  updateDots(carouselId, slideNumber);
  
  // Update state
  carouselStates[carouselId] = slideNumber;
}

function updateDots(carouselId, activeIndex) {
  const carousel = document.getElementById(carouselId);
  const cardContainer = carousel.closest('.work-card, .arts-card, .flip-leadership-card, .leadership-card');
  
  if (cardContainer) {
    const dots = cardContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.style.backgroundColor = index === activeIndex ? '#3eb0d2' : '#bbb';
    });
  }
}

// Initialize all carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing carousels...');
  
  const carousels = document.querySelectorAll('.carousel');
  console.log('Found carousels:', carousels.length);
  
  carousels.forEach(carousel => {
    const carouselId = carousel.id;
    const images = carousel.querySelectorAll('img');
    
    console.log('Initializing carousel:', carouselId, 'with', images.length, 'images');
    
    if (images.length > 0) {
      // Hide all images except the first one
      images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none';
      });
      
      // Initialize state
      carouselStates[carouselId] = 0;
      
      // Update dots
      updateDots(carouselId, 0);
    }
  });
  
  console.log('Carousel initialization complete');
});
