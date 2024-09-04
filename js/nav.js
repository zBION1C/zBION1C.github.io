$(document).ready(function() {
  // Load the navigation bar into the placeholder div
  $("#navbar-placeholder").load("/static/nav.html", function() {
      // Get the current URL path
      var currentPath = window.location.pathname;

      // Iterate over each <a> tag in the loaded navigation
      $('#navbar-placeholder nav a').each(function() {
          // Get the href attribute of each <a>
          var href = $(this).attr('href');

          // Check if the href matches the current path
          if (currentPath === href) {
              // Remove 'active' class from all <a> tags
              $('#navbar-placeholder nav a').removeClass('active');

              // Add 'active' class to the matching <a>
              $(this).addClass('active');
          }
      });
  });
});
