$(document).ready(function() {
  // Load the navigation bar into the placeholder div
  $("#navbar-placeholder").load("/static/nav.html", function() {
      console.log("loaded")
  });
});
