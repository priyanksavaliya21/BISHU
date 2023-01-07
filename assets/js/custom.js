
$(document).ready(function(){


    $('.shep_menu span').click(function(){
        $('body').toggleClass('open_mobile_menu');
        $('body').toggleClass('cm_overflow');
    });

    $('.mobile_menu li a').click(function(){
        $('body').removeClass('open_mobile_menu');
        $('body').removeClass('cm_overflow');
    });
    

    /*--------- Wow Js ----------*/
    
    new WOW().init();

    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 100) {
    //        $('.section').addClass('init_animation');
    //     } else {
    //        $('.section').removeClass('init_animation');
    //     }
    // });

    //All Section Add Class
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        gsap.to(section, {autoAlpha: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top bottom-=10',
                toggleActions: 'play none none reverse',
                // markers: true
            }
        });

        ScrollTrigger.create({
            trigger: section,
            id: index+1,
            start: 'top center',
            end: () => `+=${section.clientHeight + 30}`,
            toggleActions: 'play reverse none reverse',
            toggleClass: {targets: section, className: "init_animation"},
            // markers: true
        });
    });

        // Back to Top Js
        // $('#back_trigger').click(function(){
        //     $('html, body').animate({scrollTop : 0},2500);
        //     return false;
        // });


        // Back to Top Js
        $('#back_trigger').click(function(){
            $('html, body').animate({scrollTop : 0},1500);
            return false;
        });

        // Smooth scrolling when clicking an anchor link
        var $root = $('html, body');

        $('.main_menu li a[href^="#"]').click(function () {
            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 1500);

            return false;
        });

    
        // const slider = document.querySelector('.draggable');
        // let isDown = false;
        // let startX;
        // let scrollLeft;
        
        // slider.addEventListener('mousedown', (e) => {
        // isDown = true;
        // slider.classList.add('active');
        // startX = e.pageX - slider.offsetLeft;
        // scrollLeft = slider.scrollLeft;
        // });
        // slider.addEventListener('mouseleave', () => {
        // isDown = false;
        // slider.classList.remove('active');
        // });
        // slider.addEventListener('mouseup', () => {
        // isDown = false;
        // slider.classList.remove('active');
        // });
        // slider.addEventListener('mousemove', (e) => {
        // if(!isDown) return;
        // e.preventDefault();
        // const x = e.pageX - slider.offsetLeft;
        // const walk = (x - startX) * 1; //scroll-fast
        // slider.scrollLeft = scrollLeft - walk;
        // console.log(walk);
        // });


       
    
});



