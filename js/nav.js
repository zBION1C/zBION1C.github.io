$(document).ready(function() {
    $("#nav-placeholder").load("/static/nav.html");
    $('#nav-placeholder a').filter(function () {
      return this.href === location.href;
  }).addClass('active');
});