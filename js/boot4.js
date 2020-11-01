


$(document).ready(function (){ 
    $("body,html").niceScroll({
        cursorcolor: "red",
        cursorwidth: "7px",
        oneaxismousemode: "false",
        horizrailenabled: false ,
      
    });
   
    /* slideBar*/  
    var uph =  $('.up-header').innerHeight(),
        navh = $('.navbar').innerHeight(),
        wind = $(window).height();

    $('.slider,.carousel-item').height(wind - (uph + navh));


    /*--- centering title ---*/
    
    $('.carousel-inner h2').fitText(1.1);
    
/*---- centering carousel caption ----*//*respnsive heading ith fitText plugin */
    $('.testimonials .carousel-inner .carousel-item .carousel-caption ').css('top','25%')
   
                    /***********************/
/* using CountTo : statistics */
    $(window).scroll(function () {

        if ($(this).scrollTop() >= $('.statistcs').offset().top-400 ) {
            
            $('.number').countTo()
            console.log($(this).scrollTop());
            console.log($('.number').offset());
        }
    })
    
    
        /*Features work*/
    $(".featured-work ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
    var mixer = mixitup('.shuffle');
    var mixer = mixitup(shuffleEl);
    var mixer = mixitup(shuffleEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
    /***********/
    
 
 /*use nicescroll plugin*/ 
    
    
       
    

    
   
   
    


  


    


   









})
