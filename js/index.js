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
       document.querySelector("#slideblock2").style.backgroundColor = "#3354FB";
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



//NAVIGATION STYLING
var navbg = document.querySelector(".nav");

//nav--comein and goaway

document.querySelector(".nav--icon").addEventListener("click", comein);


function comein(){
    navbg.style.animation = "comein 0.5s forwards"; 
}

document.querySelector(".nav--back").addEventListener("click", go);

function go(){
    navbg.style.animation = "goaway 0.5s forwards"; 
}


//backgroundchange

function changemen(){
 document.querySelector("#men").style.animation = "fadein 0.8s forwards";
 document.querySelector("#women").style.animation = "fadeout 0.8s forwards";
 document.querySelector("#girls").style.animation = "fadeout 0.8s forwards";
 document.querySelector("#boys").style.animation = "fadeout 0.8s forwards";
 document.querySelector("#brands").style.animation = "fadeout 0.8s forwards";

}

function changewomen(){
    document.querySelector("#women").style.animation = "fadein 0.8s forwards";
    document.querySelector("#men").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#girls").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#boys").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#brands").style.animation = "fadeout 0.8s forwards";
}

function changegirls(){
    document.querySelector("#girls").style.animation = "fadein 0.8s forwards";
    document.querySelector("#women").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#men").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#boys").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#brands").style.animation = "fadeout 0.8s forwards";
}

function changeboys(){
    document.querySelector("#boys").style.animation = "fadein 0.8s forwards";
    document.querySelector("#girls").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#women").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#men").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#brands").style.animation = "fadeout 0.8s forwards";
}


function changebrands(){
    document.querySelector("#brands").style.animation = "fadein 0.8s forwards";
    document.querySelector("#boys").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#girls").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#women").style.animation = "fadeout 0.8s forwards";
    document.querySelector("#men").style.animation = "fadeout 0.8s forwards";
}

//airjordan9 color change
document.querySelector("#j9-block").addEventListener("click", function(event){
    var button;
    button = event.target;
    document.querySelectorAll(".shoej9").forEach(function(curr){
        if(curr.id.slice(7,8) === button.id.slice(3,4)){
            curr.style.animation = "fadein 0.3s forwards";
        }else if(curr.id.slice(7,8) !== button.id.slice(3,4)){
            curr.style.animation = "fadeout 0.3s forwards";
        }

        document.querySelector("#slideblock2").style.backgroundColor = button.classList[1].slice(3, 10);
        
    })
})

//dc color change
document.querySelector("#dc-block").addEventListener("click", function(event){
    var button;
    button = event.target;
    document.querySelectorAll(".shoe-dc").forEach(function(curr){
        if(curr.id.slice(7,8) === button.id.slice(3,4)){
            curr.style.animation = "fadein 0.3s forwards";
        }else if(curr.id.slice(7,8) !== button.id.slice(3,4)){
            curr.style.animation = "fadeout 0.3s forwards";
        }
    })
})


