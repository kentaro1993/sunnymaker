$(function() {
    $('#lesson01 a').hover(
        function() {
            $('.map1').fadeIn();
        },
        function() {
            $('.map1').fadeOut();
        }
    );
});

$(function() {
    $('#lesson02 a').hover(
        function() {
            $('.map2').fadeIn();
        },
        function() {
            $('.map2').fadeOut();
        }
    );
});

$(function() {
    $('#lesson03 a').hover(
        function() {
            $('.map3').fadeIn();
        },
        function() {
            $('.map3').fadeOut();
        }
    );
});

$(function() {
    $('#lesson04 a').hover(
        function() {
            $('.map4').fadeIn();
        },
        function() {
            $('.map4').fadeOut();
        }
    );


    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          'scrollTop': position 
        }, 500);
      });

$('#top-btn').click(function(){
    $('html,body').animate({
        'scrollTop':0
    },500);
});

$('.leftmenu a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top-160;
    $('html, body').animate({
      'scrollTop': position 
    }, 500);
  });

  $(function(){
    $('.faq-list-item').click(function(){
        $(this).next('.answer').slideToggle();
    });
  });
});