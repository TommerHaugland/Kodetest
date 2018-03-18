
$(window).scroll(function() {
    if ($(this).scrollTop() >= 800) {        // Hvis page er scrolelt mer enn x pixler
        $('#return-to-top').fadeIn(1000);    // Fadein tidsetting
    } else {
        $('#return-to-top').fadeOut(1000);   // Fadeut setting
    }
});
$('#return-to-top').click(function() {      // Klikk på pil
    $('body,html').animate({
        scrollTop : 0                       // Scrolle opp
    }, 500);
});
