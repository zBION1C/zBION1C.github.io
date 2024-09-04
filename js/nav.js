$(document).ready(function() {
    $("#nav-placeholder").load("/static/nav.html");
    var links = $('#nav-placeholder a');
    console.log(links)
});