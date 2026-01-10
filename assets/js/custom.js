// Ensure home icon/link always goes to https://aarondp.me
(function() {
  'use strict';
  
  const HOME_URL = 'https://aarondp.me';
  
  // More aggressive approach: use MutationObserver to watch for all links
  function fixHomeLinks() {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      const fullHref = link.href;
      
      // Check if this looks like a home link
      if (href === '/' || 
          href === '' || 
          href === '#' ||
          href === window.location.pathname ||
          fullHref === window.location.href ||
          fullHref === window.location.origin + '/' ||
          fullHref === window.location.origin) {
        
        // Force set the href to absolute URL
        link.href = HOME_URL;
        link.setAttribute('href', HOME_URL);
        
        // Remove any existing event listeners by cloning
        const newLink = link.cloneNode(true);
        if (link.parentNode) {
          link.parentNode.replaceChild(newLink, link);
        }
        
        // Set new click handler
        newLink.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.location.href = HOME_URL;
          return false;
        }, true);
      }
    });
  }
  
  // Intercept ALL clicks at the document level with highest priority
  document.addEventListener('click', function(e) {
    let element = e.target;
    
    // Walk up to find a link
    while (element && element !== document.body) {
      if (element.tagName === 'A') {
        const href = element.getAttribute('href');
        const fullHref = element.href;
        
        if (href === '/' || 
            href === '' || 
            href === '#' ||
            href === window.location.pathname ||
            fullHref === window.location.href ||
            fullHref === window.location.origin + '/' ||
            fullHref === window.location.origin) {
          
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          // Force navigation
          setTimeout(function() {
            window.location.href = HOME_URL;
          }, 0);
          
          return false;
        }
        break;
      }
      element = element.parentNode;
    }
  }, true);
  
  // Also capture at window level as last resort
  window.addEventListener('click', function(e) {
    let element = e.target;
    
    while (element && element !== document.body) {
      if (element.tagName === 'A') {
        const href = element.getAttribute('href');
        const fullHref = element.href;
        
        if (href === '/' || 
            href === '' || 
            href === '#' ||
            href === window.location.pathname ||
            fullHref === window.location.href ||
            fullHref === window.location.origin + '/' ||
            fullHref === window.location.origin) {
          
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          window.location.href = HOME_URL;
          return false;
        }
        break;
      }
      element = element.parentNode;
    }
  }, true);
  
  // Run fix immediately
  fixHomeLinks();
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixHomeLinks);
  }
  
  // Watch for changes in the DOM
  const observer = new MutationObserver(function(mutations) {
    fixHomeLinks();
  });
  
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['href']
  });
  
  // Also run periodically as backup
  setInterval(fixHomeLinks, 500);
  
  // Run after delays to catch late-loading elements
  setTimeout(fixHomeLinks, 100);
  setTimeout(fixHomeLinks, 500);
  setTimeout(fixHomeLinks, 1000);
  setTimeout(fixHomeLinks, 2000);
})();
