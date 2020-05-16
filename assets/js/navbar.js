$(document).ready(function(){
    $("#toggle").click(function(){
        $('#navbarNav').toggleClass('bg')
    });
    $('.nav-link').click(function () {
        $('#navbarNav').toggleClass('show').toggleClass('bg')
    })
  });