$(document).ready(function() {
    $("#nav-placeholder").load("/static/nav.html");
    var links = $('#nav-placeholder a');
    links.each(function() {
        // Get the href attribute of each <a>
        var href = $(this).attr('href');
        console.log(href)

        // Check if the href matches the current path
        if (currentPath === href) {
            // Remove 'active' class from all <a> tags
            $('#navbar-placeholder nav a').removeClass('active');

            // Add 'active' class to the matching <a>
            $(this).addClass('active');
        }
    });
});