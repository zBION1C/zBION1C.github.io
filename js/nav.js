$(document).ready(function() {
    // Load the navigation bar into the placeholder div
    $("#navbar-placeholder").load("/static/nav.html", function() {
        // Remove 'active' class from any currently active element
        $("nav a").removeClass("active");

        // Get the current URL path
        var currentPath = window.location.pathname;

        // Highlight based on the current path
        if (currentPath.includes("/static/posts/posts.html")) {
            // Add 'active' class to the Posts link
            $("#post").addClass("active");
        } else if (currentPath.includes("/index.html")) {
            // Add 'active' class to the Home link
            $("#home").addClass("active");
        }

        // Add more conditions if needed for other pages
    });
});