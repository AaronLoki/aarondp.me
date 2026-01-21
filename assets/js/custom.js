// Simple home link fix for Just the Docs theme
(function() {
  'use strict';
  
  const HOME_URL = 'https://aarondp.me';
  
  // Just the Docs theme uses a site title link - ensure it goes to the right place
  function fixHomeLink() {
    // Find the site title/logo link
    const siteTitle = document.querySelector('.site-title, .site-logo, .site-header a[href="/"], header a[href="/"]');
    if (siteTitle) {
      siteTitle.href = HOME_URL;
      siteTitle.onclick = function(e) {
        e.preventDefault();
        window.location.href = HOME_URL;
        return false;
      };
    }
    
    // Also fix any navigation home links
    const homeLinks = document.querySelectorAll('a[href="/"], a[href=""]');
    homeLinks.forEach(function(link) {
      // Check if it's in the header/navigation area
      const inNav = link.closest('header, nav, .site-header, .site-nav');
      if (inNav) {
        link.href = HOME_URL;
        link.onclick = function(e) {
          e.preventDefault();
          window.location.href = HOME_URL;
          return false;
        };
      }
    });
  }
  
  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixHomeLink);
  } else {
    fixHomeLink();
  }
  
  // Run after a delay to ensure theme has loaded
  setTimeout(fixHomeLink, 500);
})();
