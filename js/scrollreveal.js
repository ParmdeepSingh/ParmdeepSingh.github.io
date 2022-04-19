$(function () {
    $('.scroll').on("click", function (e) {
        e.preventDefault();
        //console.log('you clicked');
        $('html, body').animate ({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });

    //ScrollReveal().reveal('.footer');

    const sr = ScrollReveal ({
        origin: 'left',
        distance: '30px',
        duration: 1000,
        reset: true
    });
    sr.reveal('.mainsr1', {
        delay: 100
    });
    sr.reveal('.mainsr2', {
        delay: 250
    });
    sr.reveal('.mainsr3', {
        delay: 350
    });
    sr.reveal('.mainsr4', {
        delay: 450
    });
    sr.reveal('.mainsr2', {
        delay: 450
    });

});