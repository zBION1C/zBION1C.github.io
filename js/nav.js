$(document).ready(function() {
  // Load the navigation bar into the placeholder div
  $("#navbar-placeholder").load("/static/nav.html", function() {
      // Remove 'active' class from any currently active element
      $("#navbar-placeholder nav a").removeClass("active");

      // Get the current URL path
      var currentPath = window.location.pathname;

      // Highlight based on the current path
      if (currentPath.includes("/static/posts/posts.html")) {
          // Add 'active' class to the Posts link
          $("#navbar-placeholder #post").addClass("active");
      } else if (currentPath.includes("/index.html")) {
          // Add 'active' class to the Home link
          $("#navbar-placeholder #home").addClass("active");
      }

      // Add more conditions if needed for other pages
  });
});