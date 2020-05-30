//init 

const ui = new UI;
const data = new Data;



//push stars onto cards
ui.pushStars();

//trigger animations
//on arrow click
const arrows = document.querySelectorAll(".glide__arrow");

arrows.forEach(element =>{
    element.addEventListener("click", function(){
        ui.trigger();
        ui.trigger2();
        ui.startTimer();
        ui.startTimer2();
        ui.colorReset();
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
        ui.colorReset();
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
let navItems = document.querySelectorAll(".nav--item");
let navSpan = document.querySelectorAll(".link-span");
let projectPreview = document.querySelector(".project-preview");
let abstract = document.querySelector(".abstract");

//event listeners
navItems.forEach(item=>{
    item.addEventListener("mouseover", event=>{
        let tl = gsap.timeline({defaults: {duration: 0.7}});
        tl.to(".project-preview", {width: "600px", x:-100,ease: "Circ.easeInOut"});
    })

    item.addEventListener("mouseout", event=>{
        let tl = gsap.timeline({defaults: {duration: 0.7}});
        tl.to(".project-preview", {width: "0px", x:100,ease: "Circ.easeInOut"});
    })
})

navSpan.forEach(span=>{
    span.addEventListener("mouseover", event=>{
        let imgSrc = span.dataset.text;
        projectPreview.style.background = `url(./img/${imgSrc}.jpg)`;
        projectPreview.style.backgroundSize = "cover";
        projectPreview.style.overflow = "visible";
        abstract.textContent = imgSrc;
        abstract.style.backgroundPosition = "100%"

    })

    span.addEventListener("mouseout", event=>{
        projectPreview.style.overflow = "hidden";
        abstract.style.backgroundPosition = "unset"
    })

})





// $(document).ready(function(){
//     TweenMax.set("project-preview", {width: 0});

//     var t1 = new TimeLineLite();

//     $(document).on("mouseover", "navigation-item", function(evt){
//         t1 = new TimeLineLite();
//         t1.to($(".project-preview"), 1, {
//             width: "600px",
//             ease: Expo.easeInOut
//         });
//     }).on("mouseout", ".navigation-item", function(evt){
//         t1 = new TimeLineLite();
//         t1.to($(".project-preview"), 0.5, {
//             width: 0,
//             ease: Expo.easeInOut
//         });
//     });
// });































// const links = document.querySelectorAll(".nav__link");

// links.forEach( element => {
//     element.addEventListener("mouseover", function(event){
//         let ele = event.currentTarget;
//         let idString = ele.id.slice(3, 11);
//         ui.changeNavBg(idString);
//     })
// })
































//colorchange function
let blocks = document.querySelectorAll(".pncbox--colorblock");

blocks.forEach(e=>{
    e.addEventListener("click", event =>{
        let block = event.target; 
        console.log(block);
        let color = block.style.backgroundColor;
        console.log(color);
    
        ui.colorChange(color);
    })
})






//dc color change
// document.querySelector("#dc-block").addEventListener("click", event=>{
//     let ButtonID = event.target.id;
//     ui.colorChange("dc", ButtonID);
// })




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
