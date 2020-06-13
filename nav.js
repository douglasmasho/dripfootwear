import Nav from "./utils/navutil.js"
// class Nav{
//     constructor(){
//         this.navBg = document.querySelector(".nav");
//     }

//     navOpen(){
//        this.navBg.style.animation = "comein 0.5s forwards"; 
//     }

//     navClose(){
//         this.navBg.style.animation = "goaway 0.5s forwards";
//     }

//     gsapItems(str){
//         if(str === "mouseover"){
//             let tl = gsap.timeline({defaults: {duration: 0.7}});
//             tl.to(".project-preview", {width: "600px", x:-100,ease: "Circ.easeInOut"});
//         }
//         else if(str === "mouseout"){
//             let tl = gsap.timeline({defaults: {duration: 0.7}});
//             tl.to(".project-preview", {width: "0px", x:100,ease: "Circ.easeInOut"});
//         }
//     }

//     gsapSpan(str, span){
//         let projectPreview = document.querySelector(".project-preview");
//         let abstract = document.querySelector(".abstract");
//         if(str === "mouseover"){
//             let imgSrc = span.dataset.text;
//             projectPreview.style.background = `url(/img/${imgSrc}.jpg)`;
//             projectPreview.style.backgroundSize = "cover";
//             projectPreview.style.overflow = "visible";
//             abstract.textContent = imgSrc;
//             abstract.style.backgroundPosition = "100%"
//             console.log( span.dataset.text)
//         }
//         else if(str === "mouseout"){

//             projectPreview.style.overflow = "hidden";
//             abstract.style.backgroundPosition = "unset"
//         }
//     }
// }



//init 
let nav = new Nav;


//add event listeners
document.querySelector(".nav--icon").addEventListener("click", function(){
    nav.navOpen();
});
document.querySelector(".nav--back").addEventListener("click", function(){
    nav.navClose();
});

//backgroundchange
let navItems = document.querySelectorAll(".nav--item");
let navSpan = document.querySelectorAll(".link-span");

//event listeners
navItems.forEach(item=>{
    item.addEventListener("mouseover", event=>{
        nav.gsapItems(event.type);
    })

    item.addEventListener("mouseout", event=>{
        nav.gsapItems(event.type);
    })
})

navSpan.forEach(span=>{
    span.addEventListener("mouseover", event=>{
        nav.gsapSpan(event.type, span);
    })

    span.addEventListener("mouseout", event=>{
        nav.gsapSpan(event.type, span);
    })

})


export let cartCount = ()=>{
    let bubble = document.querySelector(".header--bubble");
    //find the number of items in the cart if the cart exists
    // get the cart array string
    //peform only if the cart exists within the LS
    if(localStorage.getItem("cart") !== null){
    let cart = JSON.parse(localStorage.getItem("cart"));
        //accumulate
        let acc = 0;
        cart.forEach(el=>{
         acc += parseInt(el.qty);
        });
        //print onto the cartbubble
        bubble.textContent = acc;
    }else{
        bubble.style.display = "none";
    }
}
cartCount();


function scrollanimation(element, classname){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $(element).addClass(classname);
        }
        else 
        {
            $(element).removeClass(classname);   
        }
    })
};

scrollanimation(".header", "black");