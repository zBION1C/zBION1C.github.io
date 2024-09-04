$(document).ready(function() {
    $("#nav-placeholder").load("/static/nav.html");
    $('nav li a').filter(function () {
      return this.href === location.href;
  }).addClass('active');
});