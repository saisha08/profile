// Universal carousel functionality - works for all pages
let carouselStates = {};

function changeSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    console.error('Carousel not found:', carouselId);
    return;
  }
  
  const allChildren = Array.from(carousel.children);
  const media = allChildren.filter(child => child.tagName === 'IMG' || child.tagName === 'VIDEO');
  
  if (media.length === 0) {
    console.error('No media found in carousel:', carouselId);
    return;
  }
  
  // Initialize state if not exists
  if (!carouselStates[carouselId]) {
    carouselStates[carouselId] = 0;
  }
  
  let currentIndex = carouselStates[carouselId];
  
  // Pause current video if it exists
  if (media[currentIndex] && media[currentIndex].tagName === 'VIDEO') {
    media[currentIndex].pause();
  }
  
  let newIndex = currentIndex + direction;
  
  // Handle wrapping
  if (newIndex >= media.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = media.length - 1;
  }
  
  // Hide current media
  if (media[currentIndex]) {
    media[currentIndex].style.display = 'none';
  }
  
  // Show new media
  if (media[newIndex]) {
    media[newIndex].style.display = 'block';
    if (media[newIndex].tagName === 'VIDEO') {
      // Try to play video, but allow user control if autoplay fails
      const video = media[newIndex];
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented, user can manually play via controls
          console.log('Video autoplay prevented, user can play manually');
        });
      }
    }
  }
  
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
  
  const allChildren = Array.from(carousel.children);
  const media = allChildren.filter(child => child.tagName === 'IMG' || child.tagName === 'VIDEO');
  
  if (media.length === 0) {
    console.error('No media found in carousel:', carouselId);
    return;
  }
  
  // Pause all videos and hide all media
  media.forEach((item, index) => {
    if (item.tagName === 'VIDEO') {
      item.pause();
    }
    item.style.display = index === slideNumber ? 'block' : 'none';
    if (index === slideNumber && item.tagName === 'VIDEO') {
      // Try to play video, but allow user control if autoplay fails
      const video = item;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented, user can manually play via controls
          console.log('Video autoplay prevented, user can play manually');
        });
      }
    }
  });
  
  // Update dots
  updateDots(carouselId, slideNumber);
  
  // Update state
  carouselStates[carouselId] = slideNumber;
}

function updateDots(carouselId, activeIndex) {
  const carousel = document.getElementById(carouselId);
  const cardContainer = carousel.closest('.work-card, .arts-card, .flip-leadership-card, .leadership-card, .activity-card');
  
  if (cardContainer) {
    const dots = cardContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.style.backgroundColor = '#3eb0d2';
        dot.classList.add('active');
      } else {
        dot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        dot.classList.remove('active');
      }
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
    const videos = carousel.querySelectorAll('video');
    const allChildren = Array.from(carousel.children);
    const media = allChildren.filter(child => child.tagName === 'IMG' || child.tagName === 'VIDEO');
    
    console.log('Initializing carousel:', carouselId, 'with', media.length, 'media items');
    
    if (media.length > 0) {
      // Hide all media except the first one
      media.forEach((item, index) => {
        if (index === 0) {
          item.style.display = 'block';
          if (item.tagName === 'VIDEO') {
            // Try to play video, but allow user control if autoplay fails
            const video = item;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                // Autoplay was prevented, user can manually play via controls
                console.log('Video autoplay prevented, user can play manually');
              });
            }
          }
        } else {
          item.style.display = 'none';
          if (item.tagName === 'VIDEO') {
            item.pause();
          }
        }
      });
      
      // Initialize state
      carouselStates[carouselId] = 0;
      
      // Update dots
      updateDots(carouselId, 0);
    }
  });
  
  console.log('Carousel initialization complete');
});
