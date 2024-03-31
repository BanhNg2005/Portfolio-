$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    var typed = new Typed(".typing", {
        strings: ["Back-end web developer", "Full-stack developer", "Front-end web developer", "Junior Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Back-end web developer", "Full-stack developer", "Front-end web developer", "Junior Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.carousel').owlCarousel({
       margin: 20,
       items: 2,
       responsive: {
           0: {
               items: 1,
               center: true
           },
           600: {
               items: 2,
               center: false
           }
       }
    });
    $("#sendMessageButton").click(function(){
        alert("Thank you for sending the message");
      });
});