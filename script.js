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
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
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
    $("#nameCheck").hide();
let nameError = true;
$("#name").keyup(function () {
    validateName();
});
function validateName() {
    let nameValue = $("#name").val();
    if (nameValue.length == "") {
        $("#nameCheck").show();
        $("#nameCheck").html("**Please fill the name");
        $("#name").css("border", "2px solid red"); 
        nameError = false;
        return false;
    } else {
        $("#nameCheck").hide();
        $("#name").css("border", "2px solid green"); 
        nameError = true;
    }
}

$("#surnameCheck").hide();
let surnameError = true;
$("#surname").keyup(function () {
    validateSurname();
});
function validateSurname() {
    let surnameValue = $("#surname").val();
    if (surnameValue.length == "") {
        $("#surnameCheck").show();
        $("#surnameCheck").html("**Please fill the surname");
        $("#surname").css("border", "2px solid red");
        surnameError = false;
        return false;
    } else {
        $("#surnameCheck").hide();
        $("#surname").css("border", "2px solid green");
        surnameError = true;
    }
}

$("#emailCheck").hide();
let emailError = true;
let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
$("#email").keyup(function () {
    validateEmail();
});
function validateEmail() {
    let emailValue = $("#email").val();
    if (emailValue.length == "") {
        $("#emailCheck").show();
        $("#emailCheck").html("**Please fill the email");
        $("#email").css("border", "2px solid red");
        emailError = false;
        return false;
    } else if (!regex.test(emailValue)) {
        $("#emailCheck").show();
        $("#emailCheck").html("**Invalid email format");
        $("#email").css("border", "2px solid red");
        emailError = false;
        return false;
    } else {
        $("#emailCheck").hide();
        $("#email").css("border", "2px solid green");
        emailError = true;
    }
}

$("#messageCheck").hide();
let messageError = true;
$("#message").keyup(function () {
    validateMessage();
});
function validateMessage() {
    let messageValue = $("#message").val();
    if (messageValue.length == "") {
        $("#messageCheck").show();
        $("#messageCheck").html("**Please fill the message");
        $("#message").css("border", "2px solid red");
        messageError = false;
        return false;
    } else {
        $("#messageCheck").hide();
        $("#message").css("border", "2px solid green");
        messageError = true;
    }
}

$("#submitbtn").click(function () {
    validateName();
    validateSurname();
    validateEmail();
    validateMessage();
    if (nameError == true && surnameError == true && emailError == true && messageError == true) {
        alert("Form submitted successfully");
        return true;
    } else {
        alert("Form not submitted");
        return false;
    }
});
});