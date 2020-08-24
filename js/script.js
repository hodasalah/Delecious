/*==========================================================================================================
		STICKY-NAVBAR
==========================================================================================================*/
// navbar fixed top 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar-main");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




$(document).ready(function(){
    'use strict';
    
/*-----------------------------------------------------------------------------------*/
/* 	TRIGGER CAMERA SLIDER
/*-----------------------------------------------------------------------------------*/
    $('#camera_wrap').camera({
        height:'650px', 
        loader: 'bar',
        loaderColor: '#e99d3f ',
        pauseOnClick: true,
        pagination: false 
    });
    /*---------------------------------------------------------------------------------*/
 /*       SPECIAL MENU CARDS & MENU DISCOUNT SLIDER & HEALTHY-DISHES SLIDER
----------------------------------------------------------------------------------*/
    $('.items,#menu-card-carousel').owlCarousel({
        merge: true,
        video: true,
        items: 1,
        smartSpeed: 1000,
        loop: true,
        autoplay: false,
        dots: true,
        autoplayTimeout: 2000,
        margin: 15,
        nav:false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.special-dishes').owlCarousel({
        loop:true,
        dots: true,
        nav:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            
            },
            480:{
                items:2,
                
            },
            600:{
                items:2,
            
            },
            1000:{
                items:4,
                
            }
        }
    });

/*-----------------------------------------------------------------------------------*/
/* 	NICESCROLL.JS
/*-----------------------------------------------------------------------------------*/
    $('body').niceScroll({
        cursorcolor:"#e99d3f",
        zindex: "10000",
        cursorborder: "none"
    }); 
    $(".menu-content").niceScroll()
    $(".menu-content").mouseover(function(){
        $(".menu-content").getNiceScroll().resize();
    });
/*-----------------------------------------------------------------------
    OPEN SEARCH FORM
----------------------------------------------------------------------------*/
    var $searchForm = $('.search-form');
    var $searchFormTrigger = $('.search-form-trigger');
    var $formOverlay = $('.search-form-overlay');
    $searchFormTrigger.on('click', function (event) {
        event.preventDefault();
        toggleSearch();
    });

    function toggleSearch(type) {
        if (type === "close") {
            //close serach 
            $searchForm.removeClass('is-visible');
            $searchFormTrigger.removeClass('search-is-visible');
        } else {
            //toggle search visibility
            $searchForm.toggleClass('is-visible');
            $searchFormTrigger.toggleClass('search-is-visible');
            if ($searchForm.hasClass('is-visible')) $searchForm.find('input[type="search"]').focus();
            $searchForm.hasClass('is-visible') ? $formOverlay.addClass('is-visible') : $formOverlay.removeClass('is-visible');
        }
    }



/*-----------------------------------------------------------------------------------*/
/*  LOADER
/*-----------------------------------------------------------------------------------*/
    $(window).load(function(){
        $("#loader h1").fadeOut(1000,function(){
            $(this).parent().fadeOut(1500,function(){
                $(this).remove();   
            });
        }) ;
    }); 
/*---------------------------------------------------------------------------------------------------------
    TRIGGER MIXITUP
---------------------------------------------------------------------------------------------------------*/
    var mixer = mixitup('#mix-wrapper', {
        selectors: {
            target: '.mix'
        },
        animation: {   
            duration: 500,
            nudge: true,
            reverseOut: false,
            effects: 'fade translateZ(-100px) rotateZ(-128deg)'

        }
    });



});

    
