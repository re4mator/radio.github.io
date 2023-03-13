$(document).ready(function(){
  $('.gallery').isotope(function(){
      itemSelector:'.gallery-item'
    });



  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');


    var selector = $(this).attr('data-filter');
      $('.gallery').isotope({
        filter: selector
      })
      return false;
  });
});