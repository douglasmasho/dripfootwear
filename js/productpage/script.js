//reload once

// window.onload = function() {
//     if(!window.location.hash) {
//         window.location = window.location + '#loaded';
//         window.location.reload();
//     }
// }


//init
const ui = new UI;
const data = new Data;
if(localStorage.getItem("cart") === null){
  localStorage.setItem("cart", "[]");
}

//tabs
ui.tabInit()

//regex 

data.regEx();

//push stars onto cards
ui.pushStars2();

console.log(localStorage);

//generate product
ui.pushProduct(localStorage.getItem("logoSrc"), localStorage.getItem("shoeSrc"), localStorage.getItem("shoeBrand"), localStorage.getItem("shoeModel"), localStorage.getItem("shoePrice"), localStorage.getItem("color0"), localStorage.getItem("color1"), localStorage.getItem("color2"), localStorage.getItem("color3"));

ui.pushName(localStorage.getItem("shoeBrand"), localStorage.getItem("shoeModel"));

ui.pushStars(localStorage.getItem("shoeStarsNum"));

//animation
// ui.gsap();

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


//color change event
let buttons = document.querySelectorAll(".color-options");

buttons.forEach( e =>{
    e.addEventListener("click", (event)=>{
        let element = event.currentTarget;
        let color = element.style.backgroundColor;
        ui.changeColor(color);
    })
});

document.querySelector(".product--details--cta").addEventListener("click", ()=>{
    ui.getData();
})





































    //  const radios = document.querySelectorAll(".radio-btn");

    //  radios.forEach(el =>{
    //      if(el.checked){
    //          console.log(el.getAttribute("value"))
    //      }
    //  })