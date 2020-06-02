class UI{
    constructor(){
        this.starsParent = document.querySelectorAll(".stars");
    }

    pushStars2(){
        this.starsParent.forEach(e=>{
            let children =  e.children;
            let starsNum = children[1].textContent.slice(0,1);
            // console.log(starsNum);
  
            let starsDiv = children[0];
            
            for(let i = 0; i < starsNum; i++){
                starsDiv.insertAdjacentHTML("beforeend", `<i class="fas fa-star stars--icon"></i>`)
            }
  
            for(let i = 0; i < (5 - starsNum); i++){
              starsDiv.insertAdjacentHTML("beforeend", `<i class="far fa-star stars--icon"></i>`)
            }
        })
      }

      getChildren(parent){
        return parent.children;
    }
}

const ui = new UI;

ui.pushStars2();

//animation
function initCategory(){
        let spans = document.querySelectorAll(".categories--span");

        spans.forEach(span=>{
            console.log(span)
            span.style.backgroundPosition = "100%";
        })
        let tl = gsap.timeline({defaults: {duration: 1.5}});
        tl.staggerTo(".categories--span", 0.1, {top: "0%", opacity: 1}, 0.1)
}


//read card details
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
