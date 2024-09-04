$(document).ready(function() {
    $("#nav-placeholder").load("/static/nav.html", function() {
        // Get current path
        var currentPath = window.location.pathname;

        // Select all <a> elements within the loaded <nav> element
        var navLinks = $('nav[itemtype="http://schema.org/SiteNavigationElement"] a');
        console.log(navLinks); // This will log the <a> elements
        navLinks.each(function() {
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