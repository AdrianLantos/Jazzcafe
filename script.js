$(document).ready(function(){
    
    $('.gallery_img').click(function(){
        var src = $(this).attr('src'); 
        $('#fullscreen img').attr('src', src);
        $('#fullscreen').css('display', 'flex');
        $('.nav').fadeOut();
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function(){
        $(this).fadeOut(); 
        $('.nav').fadeIn();
    });

    $('.nav_btn').click(() => {
        $('.nav_btn_icon').toggleClass('inactive');
        $('.red').toggleClass('active');
    });

    $('.mobile_nav_btn').click(() =>{
        $('.red').toggleClass('active');
        $('.nav_btn_icon').toggleClass('inactive');
    });

    $(window).scroll(() => {
        const nav = document.querySelector('.nav');

        if(window.scrollY > nav.offsetHeight + 150) {
                    nav.classList.add('active')
                } else {
                    nav.classList.remove('active')
                }
    });
});
