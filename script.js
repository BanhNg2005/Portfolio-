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
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.navbar .menu li a').click(function () {
        if ($('.navbar .menu').hasClass("active")) 
        {
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("active");
        }
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
    $("#themeSwitchIcon").click(function(){
        if ($("body").attr("data-bs-theme") === "dark") {
            $("body").attr("data-bs-theme", "light");
            $(this).removeClass("fa-moon").addClass("fa-sun");
        } else {
            $("body").attr("data-bs-theme", "dark");
            $(this).removeClass("fa-sun").addClass("fa-moon"); 
        }
    });
    let nameError = false;
    let surnameError = false;
    let emailError = false;

    $("#name").on("blur", function() {
    let nameValue = $(this).val();
        if (nameValue === '') { 
            $(this).addClass("is-invalid");
            nameError = false;
        } else {
        $(this).removeClass("is-invalid");
        nameError = true;
        }
    });

    $("#surname").on("blur", function() {
    let surnameValue = $(this).val();
        if (surnameValue === '') { 
            $(this).addClass("is-invalid");
            surnameError = false;
        } else {
            $(this).removeClass("is-invalid");
            surnameError = true;
        }
    }); 

    $("#email").on("blur", function() {
        let emailValue = $(this).val();
        let emailRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (!emailRegex.test(emailValue)) { 
            $(this).addClass("is-invalid");
            emailError = false;
        } else {
            $(this).removeClass("is-invalid");
            emailError = true;
        }
    });

    let messageError = true;
    $("#message").on("blur", function() {
    let messageValue = $(this).val();
        if (messageValue.length < 10) { 
            $(this).addClass("is-invalid");
            messageError = false;
        } else {
            $(this).removeClass("is-invalid");
            messageError = true;
        }
    });

    $("#sendMessageButton").click(function() {
        if (nameError == true && surnameError == true && emailError == true && messageError == true) {
            alert("Form is submitted successfully!");
            return true;
        } else {
            alert("Please fill in the form correctly!");
            return false;
        }
    });
});