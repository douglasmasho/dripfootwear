//init 

const ui = new UI;
const data = new Data;


//trigger animations
//on arrow click
const arrows = document.querySelectorAll(".glide__arrow");

arrows.forEach(element =>{
    element.addEventListener("click", function(){
        ui.trigger();
        ui.trigger2();
        ui.startTimer();
        ui.startTimer2();
    })
})

//on dot click
const dots = document.querySelectorAll(".glide__bullet");
dots.forEach(element =>{
    element.addEventListener("click", function(){
        ui.trigger();
        ui.trigger2();
        ui.startTimer();
        ui.startTimer2();  
    })
})

//navigation open and close
document.querySelector(".nav--icon").addEventListener("click", function(){
    ui.navOpen();
});
document.querySelector(".nav--back").addEventListener("click", function(){
    ui.navClose();
});

//backgroundchange
const links = document.querySelectorAll(".nav__link");

links.forEach( element => {
    element.addEventListener("mouseover", function(event){
        let ele = event.currentTarget;
        let idString = ele.id.slice(3, 11);
        ui.changeNavBg(idString);
    })
})


//airjordan9 color change
document.querySelector("#j9-block").addEventListener("click", event =>{
    let ButtonID = event.target.id;

    ui.ColorChange("j9", ButtonID);

    document.querySelector("#slideblock2").style.backgroundColor = event.target.classList[1].slice(3, 10); 
})

//dc color change
document.querySelector("#dc-block").addEventListener("click", event=>{
    let ButtonID = event.target.id;
    ui.ColorChange("dc", ButtonID);
})





//regex patterns///////////////////////////////////////////////////////////////////////
const patterns = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}
data.regEx();
