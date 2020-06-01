
class UI{
    constructor(){
        this.animatedElements1 = document.querySelectorAll(".animate1");
        this.animatedElements2 = document.querySelectorAll(".animate2");
        this.navBg = document.querySelector(".nav");
        this.navBackDrop = document.querySelectorAll(".nav--backdrop");
        this.shoes ={
            j9:  document.querySelectorAll(".shoe-j9"),
            dc: document.querySelectorAll(".shoe-dc")
        }
        this.starsParent = document.querySelectorAll(".stars");
     
    }

    logThis(){
        console.log(this)
    }

    seeElements(){
        console.log(this.animatedElements1, this.animatedElements2)
    }

    trigger(){

        this.animatedElements1.forEach(function(element){
            element.style.animation = "popup 1s ease-in";
            document.querySelector("#slideblock2").style.backgroundColor = "#3354FB";
         })
    }

    trigger2(){
        this.animatedElements2.forEach(function(element){
           element.style.animation = "slideleft 1s ease-in-out";
        })
    }


    startTimer(){
        window.setTimeout(()=>{
            this.animatedElements1.forEach(function(element){
                element.style.animation = "none";
            })
        }, 1000);
    }

    startTimer2(){
        window.setTimeout(()=>{
            this.animatedElements2.forEach(function(element){
                element.style.animation = "none";
            })
        }, 1000);
    }

    navOpen(){
        console.log(this);
       this.navBg.style.animation = "comein 0.5s forwards"; 
    }

    navClose(){
        this.navBg.style.animation = "goaway 0.5s forwards";
    }

    changeNavBg(str){
        this.navBackDrop.forEach(element =>{
            if(element.id !== str){
                element.style.animation = "fadeout 0.8s forwards";
            }else if (element.id === str){
                element.style.animation = "fadein 0.8s forwards";
            }
        })
    }

    // colorChange(str, btnID){
    //     console.log(str, btnID)
    //     this.shoes[str].forEach(curr =>{
    //         if(curr.id.slice(8,9) === btnID.slice(3,4)){
    //             curr.style.animation = "fadein 0.3s forwards";
    //         }else if(curr.id.slice(8,9) !== btnID.slice(3,4)){
    //             curr.style.animation = "fadeout 0.3s forwards";
    //         }
    //     })
    //     // console.log(this.shoes[str])
    // }
    colorChange(color){
        let colorDivArr = document.querySelectorAll(".color-div");
        colorDivArr.forEach(e =>{
            e.style.boxShadow = `0 0 0 900rem ${color}` 
        });
    }
    colorReset(){
        let colorDivArr = document.querySelectorAll(".color-div");
        colorDivArr.forEach(e =>{
            e.style.boxShadow = "none"
        })   
    }

    getChildren(parent){
        return parent.children;
    }

    pushStars(){
      this.starsParent.forEach(e=>{
          let children =  e.children;
          let starsNum = children[1].textContent.slice(0,1);

          let starsDiv = children[0];
          
          for(let i = 0; i < starsNum; i++){
              starsDiv.insertAdjacentHTML("beforeend", `<i class="fas fa-star stars--icon"></i>`)
          }

          for(let i = 0; i < (5 - starsNum); i++){
            starsDiv.insertAdjacentHTML("beforeend", `<i class="far fa-star stars--icon"></i>`)
          }
      })
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
            projectPreview.style.background = `url(./img/${imgSrc}.jpg)`;
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
