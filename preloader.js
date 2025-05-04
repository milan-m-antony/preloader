// Handle preloader fade-out and removal after page load
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  // Delay fade-out and removal by 4 seconds
  setTimeout(() => {
    preloader.classList.add('fade-out');
    // After fade-out animation, remove preloader from DOM
    setTimeout(() => {
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 800);
    // Restore focus to body for accessibility
    document.body.setAttribute('tabindex', '-1');
    document.body.focus();
    // Update ARIA attributes
    preloader.setAttribute('aria-busy', 'false');
    preloader.setAttribute('aria-hidden', 'true');
  }, 2000);
});

// Fallback timeout to remove preloader if load event is delayed
setTimeout(() => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 800);
    // Restore focus and update ARIA attributes
    document.body.setAttribute('tabindex', '-1');
    document.body.focus();
    preloader.setAttribute('aria-busy', 'false');
    preloader.setAttribute('aria-hidden', 'true');
  }
}, 4000); // 4 seconds fallback
