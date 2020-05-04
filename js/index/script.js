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

//////read card details
document.querySelectorAll(".card--cta").forEach(element =>{
    element.addEventListener("click", event=>{
        let parent = event.currentTarget.parentElement.parentElement.parentElement
        let children =  ui.getChildren(parent);
        console.log(parent);

        //get data and assign to variables
        let logoSrc = children.item(0).src;
        let shoeSrc = children.item(1).src;
        let shoeBrand = children.item(2).children.item(0).textContent;
        let shoeModel = children.item(2).children.item(1).textContent;
        let shoePrice = children.item(3).children.item(0).textContent;
        let shoeStars = children.item(4).children.item(1).textContent;
        let shoeStarsNum = shoeStars.slice(0,1);
        let colorsCollection = children.item(6).children;
        let colorsArr = [];
        for(let i = 0; i < colorsCollection.length; i++){
            colorsArr.push(colorsCollection.item(i).style.backgroundColor)
        }

        // console.log(colorsArr)

        localStorage.setItem("logoSrc", `${logoSrc}`);
        localStorage.setItem("shoeSrc", `${shoeSrc}`);
        localStorage.setItem("shoeBrand", `${shoeBrand}`);
        localStorage.setItem("shoeModel", `${shoeModel}`);
        localStorage.setItem("shoePrice", `${shoePrice}`);
        localStorage.setItem("shoeStarsNum", `${shoeStarsNum}`);
        localStorage.setItem("color0", `${colorsArr[0]}`);
        localStorage.setItem("color1", `${colorsArr[1]}`);
        localStorage.setItem("color2", `${colorsArr[2]}`);
        localStorage.setItem("color3", `${colorsArr[3]}`);
        localStorage.removeItem("colors")



        console.log(localStorage);

    })
})



//do regex
data.regEx();
