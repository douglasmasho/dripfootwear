new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    dots: ".dots",
    draggable: true,
    arrows: {
        prev: "#slider-prev",
        next: "#slider-next"
    }
})

//popup trigger
var animatedElements1 = document.querySelectorAll(".animate1");

function trigger(){
    animatedElements1.forEach(function(element){
       element.style.animation = "popup 1s ease-in";
    })
}

function removeanim(){
    animatedElements1.forEach(function(element){
        element.style.animation = "none";
    })
}


function startTimer(){
    window.setTimeout(removeanim, 1000);
}

//slideleft trigger

var animatedElements2 = document.querySelectorAll(".animate2");

function trigger2(){
    animatedElements2.forEach(function(element){
       element.style.animation = "slideleft 1s ease-in-out";
    })
}

function removeanim2(){
    animatedElements2.forEach(function(element){
        element.style.animation = "none";
    })
}

function startTimer2(){
    window.setTimeout(removeanim2, 1000);
}

var dots = document.querySelectorAll(".glider-dot");

dots.forEach(function(element){
    element.addEventListener("click", function(){
        trigger(), startTimer(), trigger2(), startTimer2();
    })
})



function changedctowhite(){
    document.getElementById("shoe4").src = "img/dcwhite.png";

}

function changedctored(){
    document.getElementById("shoe4").src = "img/dcred.png";
}

function changedctoblack(){
    document.getElementById("shoe4").src = "img/dcblack.png";
}

function changedctocyan(){
    document.getElementById("shoe4").src = "img/dccyan.png";
}


