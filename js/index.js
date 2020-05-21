$(document).ready(function() {

    $('body').css('overflow', 'auto');
    $('.screen-loding').fadeOut(1000, function() { $(this).remove() });

    $('#submit').on('click', function(e) {
        e.preventDefault();
        var name = $('#name1').val() + $('#name2').val();
        var say = $('#say').val()

        if ($('#say').val() == '') {} else if ($('#name1').val() == '') {
            alert('error')
        } else if ($('#name2').val() == '') {
            alert('error')
        } else {
            $('.carousel-inner .active span').text(name);
            $('.carousel-inner .active p').text(say);
            $('#name1,#name2,#say').val("");

        }
    });
    $('.colori').click(function() {
        $('.optionbox div').slideToggle(1000)
    });


    $('.optionbox .Pragraph li').click(function() {
        var color = $(this).data("color");
        $('p').css("color", color);
    });
    $('.optionbox .Heading li').click(function() {
        var color = $(this).data("color");
        $('h1,h2,h3,h4,h5,h6').css("color", color);
    });
    $('.optionbox .Buttons li').click(function() {
        var color = $(this).data("color");
        $('button').css("color", color);
    });
    $('.optionbox div li[data-color="p"]').click(function() {
        $('p').removeAttr('style');
    });
    $('.optionbox div li[data-color="h"]').click(function() {
        $('h1,h2,h3,h4.h5,h6').removeAttr('style');
    });
    $('.optionbox div li[data-color="b"]').click(function() {
        $('button').removeAttr('style');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 700) {
            $('.up').fadeIn(500);
        } else {
            $('.up').fadeOut(500);
        }
    });
    $('.up').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 500);

    });
    var w = setInterval(function() {
        $('.taskbar li').animate({ left: '1000px' }, 20000);
        $('.taskbar li').animate({ left: '0px' }, 20000);
        $('.taskbar li').animate({ left: '-1000px' }, 20000);
        $('.taskbar li').animate({ left: '0px' }, 20000);
    });



    $('.faq-item h2 .q1').click(() => {
        $('.faq-item .a1').slideToggle(1000);

    });
    $('.faq-item h2 .q2').click(() => {
        $('.faq-item .a2').slideToggle(1000);
    });
    $('.faq-item h2 .q3').click(() => {
        $('.faq-item .a3').slideToggle(1000);
    });
    $('.faq-item h2 .q4').click(() => {
        $('.faq-item .a4').slideToggle(1000);
    });
    $('.faq-item h2 .q5').click(() => {
        $('.faq-item .a5').slideToggle(1000);
    });
    $('.faq-item h2 .q6').click(() => {
        $('.faq-item .a6').slideToggle(1000);
    });


    ////////////////////////////////////////////////////////////
    audioplayer();

    function audioplayer() {
        $('#audioplayer').attr('src', $('#playlist li a')[0]);

        $('#audioplayer')[0].play();

        $('#playlist li a').click(function(e) {
            e.preventDefault();
            $('#audioplayer').attr('src', this);
            $('#audioplayer')[0].play();
            $(this).parent('li').addClass('current-song');
            $(this).parent('li').siblings('li').removeClass('current-song');

        });

        var currentsong = 0;
        $('#audioplayer')[0].addEventListener('ended', function() {
            currentsong++;
            if (currentsong == $('#playlist li a').length)
                currentsong = 0;
            $('#playlist li').removeClass('current-song');
            $('#playlist li:eq(' + currentsong + ')').addClass('current-song');
            $('#audioplayer').attr('src', $('#playlist li a')[currentsong]);
            $('#audioplayer')[0].play();
        });
    };
    ///////////////////////////////////////////////////////////

});