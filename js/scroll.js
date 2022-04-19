$(function () {
    $('.scroll').on("click", function (e) {
        e.preventDefault();
        //console.log('you clicked');
        $('html, body').animate ({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    //ScrollReveal().reveal('.footer');

    const sr = ScrollReveal ({
        origin: 'left',
        distance: '30px',
        duration: 1000
    });
    const sr2 = ScrollReveal ({
        origin: 'right',
        distance: '50px',
        duration: 1000
    });

    sr2.reveal('.main1', {
        delay: 100,
        reset: true
    });
    sr2.reveal('.main2', {
        delay: 210,
        reset: true
    });
    sr2.reveal('.main3', {
        delay: 320,
        reset: true
    });

    sr.reveal('.box1', {
        delay: 100,
        reset: true
    });
    sr.reveal('.box2', {
        delay: 100,
    });

});