$(document).ready(function() {
    // Load the navigation bar into the placeholder div
    $("#navbar-placeholder").load("/static/nav.html", function() {
        // Get the current URL path
        var currentPath = window.location.pathname;

        // Check if the path matches the Posts page
        if (currentPath.includes("/static/posts/posts.html")) {
            // Remove 'active' class from any currently active element
            $("nav a").removeClass("active");

            // Add 'active' class to the Posts link
            $("#post").addClass("active");
        } else if (currentPath.includes("/index.html")) {
            // For home page, ensure home is active
            $("nav a").removeClass("active");
            $("#home").addClass("active");
        }
    });
});