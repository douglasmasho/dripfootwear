//init 
const ui = new UI;
const data = new Data;


function glideTransition(){
    ui.trigger();
    ui.trigger2();
    ui.startTimer();
    ui.startTimer2();
    ui.colorReset();
}


new Glide('.glide',{
    type: 'carousel',
    startAt: 0,
    perView: 1,
    hoverpause: true,
    animationTimingFunc: "ease-out"
}).mount();

new Glide('.glide2',{
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3000,
    hoverpause: true,
    animationTimingFunc: "ease-out",
    breakpoints: {
      900:{
      perView: 2,
      },
      600: {
      perView: 1,
      }
    }
}).mount();    




//push stars onto cards
ui.pushStars();

//trigger animations
//on arrow click
const arrows = document.querySelectorAll(".glide__arrow");

arrows.forEach(element =>{
    element.addEventListener("click", function(){
        glideTransition()
    })
})

//on dot click
const dots = document.querySelectorAll(".glide__bullet");
dots.forEach(element =>{
    element.addEventListener("click", function(){
        glideTransition()
    })
})

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
