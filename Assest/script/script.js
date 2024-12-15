$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web-Developer", "Blogger", "G-Designer", "FrontEndDeveloper"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["FrontEndDeveloper", "Web-Developer", "Blogger", "Graphic-Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


    // dark mode
    function myFunctionMoon() {
        document.getElementById("moonX").style.color = "black"; 
        document.getElementById("moon").style.color = "rgb(5, 250, 5)";
        document.getElementById("sun").style.color = "rgb(6, 6, 6)"; 
        document.querySelector(".home-content a").style.background = "black"; 
        document.querySelector(".typing").style.color = "grey";
        document.querySelector(".home").style.backgroundImage = "url(Assest/images/ChangeBanner.jpg)";
        document.getElementById("name-color").style.color = "chocolate"; 
        document.querySelector(".fa-sun").style.animation = "none"; 
        document.querySelector(".about").style.background = "rgb(56, 55, 55)"; 
        document.querySelector(".title").style.color = "white"; 
        document.getElementById("about-text").style.color = "white"; 
        document.getElementById("paragraph").style.color = "white"; 

        }
     // light mode   
    function myFunctionSun() {
        document.getElementById("moonX").style.color = "white";
        document.getElementById("sun").style.color = "rgb(5, 250, 5)";
        document.getElementById("moon").style.color = "rgb(6, 6, 6)"; 
        document.querySelector(".home-content a").style.background = "crimson"; 
        document.querySelector(".typing").style.color = "crimson";
        document.querySelector(".home").style.backgroundImage = "url(Assest/images/Banner-Profile.jpg)";
        document.getElementById("name-color").style.color = "white";
        document.querySelector(".fa-sun").style.animation = "spin 2s linear infinite "; 
        document.querySelector(".about").style.background = "#fff"; 
        document.querySelector(".title").style.color = "black"; 
        document.getElementById("about-text").style.color = "black"; 
        document.getElementById("paragraph").style.color = "black"; 
        }