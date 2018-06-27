import 'normalize.css';
import 'fullpage.js';
import './sass/main.sass';
import './images/cup.png';
import './images/table.png';
import './images/char.png';
import './images/portfolio_1.png';
import './images/portfolio_2.png';
import './images/portfolio_3.png';
import './images/blogImg.png';

$(document).ready(function () {

    var $menu = $('.menu');
    console.log();
    $('.homeSection__wrapper').hide();

    setTimeout(function () {
        $('.homeSection__wrapper').fadeIn();
    }, 1000);

    $menu.on('click', function () {
        $(this).toggleClass('change');
        if ($(window).width() >= 1200) {
            $('.navigation').toggleClass('active');
            $('.socialLinks').toggleClass('active');
        } else {
            $('.fullscreenNavigation').toggleClass('active');
        }
    });
    if ($(window).width() >= 1200) {
        setTimeout(function () {
            $menu.click();
        }, 1500);
    }
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        var $li = $('.navigation li');

        $li.each(function () {
            $(this).removeClass('active');
        });

        $(this).parent('li').addClass('active');

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

        if ($(window).width() <= 1200) {
            $menu.click();
        }
    });

});


function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 200 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navigation li').removeClass("active");
            currLink.parent('li').addClass('active');
        }
        else {
            currLink.parent('li').removeClass('active');
        }
    });
}