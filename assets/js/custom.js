// Ensure home icon/link always goes to https://aarondp.me
(function() {
  'use strict';
  
  // Intercept all clicks on links that should go home
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target) {
      const href = target.getAttribute('href');
      const fullHref = target.href;
      
      // Check if this is a home link (various formats)
      if (href === '/' || 
          href === '' || 
          href === '#' ||
          href === window.location.origin ||
          href === window.location.origin + '/' ||
          fullHref === window.location.origin + '/' ||
          fullHref === window.location.origin ||
          target.classList.contains('site-title') ||
          target.classList.contains('navbar-brand')) {
        e.preventDefault();
        window.location.href = 'https://aarondp.me';
        return false;
      }
    }
  }, true); // Use capture phase to catch events early
  
  // Also update href attributes when DOM is ready
  function updateHomeLinks() {
    const homeLinks = document.querySelectorAll('a[href="/"], a[href=""], a[href="#"], a.navbar-brand, a.site-title, .site-title a, .navbar-brand a');
    homeLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === '/' || href === '' || href === '#') {
        link.setAttribute('href', 'https://aarondp.me');
      }
    });
  }
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateHomeLinks);
  } else {
    updateHomeLinks();
  }
  
  // Also run periodically to catch dynamically added elements
  setInterval(updateHomeLinks, 1000);
})();
