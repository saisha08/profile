// Modal functionality for STRIVE banner
function openModal() {
  document.getElementById('striveModal').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  document.getElementById('striveModal').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('striveModal');
  if (event.target === modal) {
    closeModal();
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
