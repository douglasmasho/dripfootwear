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

//tabs
ui.tabInit()

//regex 

data.regEx();

console.log(localStorage);

//generate product
ui.pushProduct(localStorage.getItem("logoSrc"), localStorage.getItem("shoeSrc"), localStorage.getItem("shoeBrand"), localStorage.getItem("shoeModel"), localStorage.getItem("shoePrice"), localStorage.getItem("color0"), localStorage.getItem("color1"), localStorage.getItem("color2"), localStorage.getItem("color3"));

ui.pushName(localStorage.getItem("shoeBrand"), localStorage.getItem("shoeModel"));

ui.pushStars(localStorage.getItem("shoeStarsNum"))




































    //  const radios = document.querySelectorAll(".radio-btn");

    //  radios.forEach(el =>{
    //      if(el.checked){
    //          console.log(el.getAttribute("value"))
    //      }
    //  })