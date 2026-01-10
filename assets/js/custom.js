// Ensure home icon/link always goes to https://aarondp.me
document.addEventListener('DOMContentLoaded', function() {
  // Find all potential home links and ensure they point to the correct URL
  const homeLinks = document.querySelectorAll('a[href="/"], a[href=""], a.navbar-brand, a.site-title, .navbar a:first-child, header a:first-child');
  
  homeLinks.forEach(function(link) {
    if (link.href === window.location.origin + '/' || 
        link.href === window.location.origin || 
        link.getAttribute('href') === '/' ||
        link.getAttribute('href') === '') {
      link.href = 'https://aarondp.me';
    }
  });
  
  // Also intercept clicks on home-related elements
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target) {
      const href = target.getAttribute('href');
      if (href === '/' || href === '' || href === window.location.origin) {
        e.preventDefault();
        window.location.href = 'https://aarondp.me';
      }
    }
  });
});
