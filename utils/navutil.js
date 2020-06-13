export default class Nav{
    constructor(){
        this.navBg = document.querySelector(".nav");
    }

    navOpen(){
       this.navBg.style.animation = "comein 0.5s forwards"; 
    }

    navClose(){
        this.navBg.style.animation = "goaway 0.5s forwards";
    }

    gsapItems(str){
        if(str === "mouseover"){
            let tl = gsap.timeline({defaults: {duration: 0.7}});
            tl.to(".project-preview", {width: "600px", x:-100,ease: "Circ.easeInOut"});
        }
        else if(str === "mouseout"){
            let tl = gsap.timeline({defaults: {duration: 0.7}});
            tl.to(".project-preview", {width: "0px", x:100,ease: "Circ.easeInOut"});
        }
    }

    gsapSpan(str, span){
        let projectPreview = document.querySelector(".project-preview");
        let abstract = document.querySelector(".abstract");
        if(str === "mouseover"){
            let imgSrc = span.dataset.text;
            projectPreview.style.background = `url(/img/${imgSrc}.jpg)`;
            projectPreview.style.backgroundSize = "cover";
            projectPreview.style.overflow = "visible";
            abstract.textContent = imgSrc;
            abstract.style.backgroundPosition = "100%"
            console.log( span.dataset.text)
        }
        else if(str === "mouseout"){

            projectPreview.style.overflow = "hidden";
            abstract.style.backgroundPosition = "unset"
        }
    }
}