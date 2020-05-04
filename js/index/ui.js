
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

    ColorChange(str, btnID){
        console.log(str, btnID)
        this.shoes[str].forEach(curr =>{
            if(curr.id.slice(8,9) === btnID.slice(3,4)){
                curr.style.animation = "fadein 0.3s forwards";
            }else if(curr.id.slice(8,9) !== btnID.slice(3,4)){
                curr.style.animation = "fadeout 0.3s forwards";
            }
        })
        // console.log(this.shoes[str])
    }

    getChildren(parent){
        return parent.children;
    }
}
