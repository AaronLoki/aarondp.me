// Ensure home icon/link always goes to https://aarondp.me
(function() {
  'use strict';
  
  const HOME_URL = 'https://aarondp.me';
  
  // Intercept ALL clicks and check if they're on home elements
  document.addEventListener('click', function(e) {
    // Start from the actual clicked element
    let element = e.target;
    let link = null;
    
    // Walk up the DOM tree to find a link
    while (element && element !== document) {
      if (element.tagName === 'A') {
        link = element;
        break;
      }
      element = element.parentElement;
    }
    
    if (link) {
      const href = link.getAttribute('href');
      const fullHref = link.href;
      
      // Check if this is a home link (various formats)
      // Also check if link contains home-related classes or IDs
      const isHomeLink = 
        href === '/' || 
        href === '' || 
        href === '#' ||
        href === window.location.origin ||
        href === window.location.origin + '/' ||
        fullHref === window.location.origin + '/' ||
        fullHref === window.location.origin ||
        fullHref === HOME_URL ||
        fullHref === HOME_URL + '/' ||
        link.classList.contains('site-title') ||
        link.classList.contains('navbar-brand') ||
        link.classList.contains('home') ||
        link.id === 'home' ||
        link.querySelector('svg') !== null && (href === '/' || href === '' || href === '#'); // Icon links
      
      if (isHomeLink) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.location.href = HOME_URL;
        return false;
      }
    }
  }, true); // Use capture phase to catch events before anything else
  
  // Also update href attributes when DOM is ready
  function updateHomeLinks() {
    // Find all potential home links including those with icons
    const selectors = [
      'a[href="/"]',
      'a[href=""]', 
      'a[href="#"]',
      'a.navbar-brand',
      'a.site-title',
      '.site-title a',
      '.navbar-brand a',
      'a.home',
      'a#home',
      'header a[href="/"]',
      'nav a[href="/"]',
      '.navbar a:first-child'
    ];
    
    const homeLinks = document.querySelectorAll(selectors.join(', '));
    homeLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === '/' || href === '' || href === '#' || !href) {
        link.setAttribute('href', HOME_URL);
        // Also set onclick handler as backup
        link.onclick = function(e) {
          e.preventDefault();
          window.location.href = HOME_URL;
          return false;
        };
      }
    });
  }
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateHomeLinks);
  } else {
    updateHomeLinks();
  }
  
  // Run periodically to catch dynamically added elements
  setInterval(updateHomeLinks, 1000);
  
  // Also run after a short delay to ensure theme has loaded
  setTimeout(updateHomeLinks, 2000);
})();
