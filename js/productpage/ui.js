    class UI{
        constructor(){
            this.id = 1;
            this.tabs = document.querySelectorAll("[data-tab-target]");
            this.tabContents = document.querySelectorAll("[data-tab-content]");
            this.descriptionName = document.querySelector(".tab-description--name");
            this.starsNumber = document.querySelector(".tab-reviews--number");
            this.starsDiv = document.querySelector(".tab-reviews--stars");
            this.starsParent = document.querySelectorAll(".stars");
        }

        startTimer(){
            window.setTimeout(()=>{
                this.tabContents.forEach(function(element){
                    element.style.animation = "none";
                })
            }, 700);
        }
    
        tabInit(){
            this.tabs.forEach(tab => {
                tab.addEventListener("click", ()=>{
                    const target = document.querySelector(tab.dataset.tabTarget);
                    this.tabContents.forEach(tabContent =>{
                        tabContent.classList.remove("active");
                        tabContent.style.animation = "fadeout 0.7s forwards"
                    })
                    target.classList.add("active");
                    target.style.animation ="fadein 0.7s forwards"

                    this.tabs.forEach(tab =>{
                        tab.classList.remove("active");
                    })

                    tab.classList.add("active");
                    this.startTimer();
                })
            });
        }

        pushProduct(logoSrc, shoeSrc, shoeBrand, shoeModel, shoePrice, color0, color1, color2, color3){
            document.getElementById("productDiv").innerHTML = `        
         <div class="product u-margin-top">
            <div class="product--details">
                <h3 class="product--details--brand">${shoeBrand}</h3>
                <h4 class="product--details--model">${shoeModel}</h4>
                <div class="product--details--price u-margin-top u-margin-bottom"> 
                    ${shoePrice}
                </div>
 
                 <div class="product--details--sizes u-margin-top">
                        <p class="white-text product--details--text">select size</p>
                    <div class="product--details--sizes--options" >
                        <input type="radio" name="size" id="size-5" class="size-options radio-btn" value="5">
                        <label for="size-5" class="radio-label">5</label>
 
                        <input type="radio" name="size" id="size-6" class="sizeOptions radio-btn" value="6">
                        <label for="size-6" class="radio-label">6</label>
 
                        <input type="radio" name="size" id="size-7" class="sizeOptions radio-btn" value="7">
                        <label for="size-7" class="radio-label">7</label>
 
                        <input type="radio" name="size" id="size-8" class="sizeOptions radio-btn" value="8">
                        <label for="size-8" class="radio-label">8</label>
 
                        <input type="radio" name="size" id="size-9" class="sizeOptions radio-btn" value="9">
                        <label for="size-9" class="radio-label">9</label>   
                    </div>
                </div>
 
                 <div class="product--details--colors u-margin-top u-margin-bottom">
                   <p class="white-text product--details--text">select color</p>
                      <div class="product--details--colors--options" >
                          <input type="radio" name="color" id="color-1" class="color-options radio-btn" value="1">
                          <label for="color-1" class="radio-label" style="background-color: ${color0}">1</label>
              
                          <input type="radio" name="color" id="color-2" class="sizeOptions radio-btn" value="2">
                          <label for="color-2" class="radio-label" style="background-color: ${color1};">2</label>
              
                          <input type="radio" name="color" id="color-3" class="sizeOptions radio-btn" value="3">
                          <label for="color-3" class="radio-label" style="background-color: ${color2};">3</label>
              
                          <input type="radio" name="color" id="color-4" class="sizeOptions radio-btn" value="4">
                          <label for="color-4" class="radio-label" style="background-color: ${color3};">4</label> 
                      </div>
               </div>
 
               <div class="product--details--quantity">
                 <p class="white-text product--details--text">Quantity:</p>
                 <div class="center-vert u-margin-left-big">
                   <input type="number" class="product--details--quantity--input" placeholder="qty" min="1" max="100" name="quantity">
                 </div>
               </div>
 
               <a href="#" style="text-decoration: none;">            
                   <div class="product--details--cta u-margin-top">
                       <p class="white-text product--details--cta--text">Add to cart</p>
                       <img src="img/shopping-cart.svg" alt="cart-icon" class="product--details--cta--icon">
                   </div>
                 </a>
            </div>
 
            <div class="product--pic">
              <img class="product--pic--1" src="${logoSrc}" alt="logo">
              <img class="product--pic--2" src="${shoeSrc}" alt="shoe">
            </div>
          </div>
 `
        }

        pushName(shoeBrand, shoeModel,){
            this.descriptionName.textContent = `${shoeBrand} ${shoeModel}`
        }
        pushStars(starsNumber){
            this.starsNumber.textContent = `${starsNumber}`;

            for(let i = 0; i < starsNumber; i++){
                this.starsDiv.insertAdjacentHTML("beforeend", `<i class="fas fa-star stars--icon"></i>`);
            }

            for(let i = 0; i < (5 - starsNumber); i++){
                this.starsDiv.insertAdjacentHTML("beforeend", `<i class="far fa-star stars--icon"></i>`)
            }
        }

        getChildren(parent){
            return parent.children;
        }

        pushStars2(){
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

          gsap(){
            let tl = gsap.timeline({defaults: {duration: 1.5}});
    
            tl.from(".product", {y: 100, ease: "expo.out", opacity: 0})
    
        }


    }
    
    
    
    








































    //  const radios = document.querySelectorAll(".radio-btn");

    //  radios.forEach(el =>{
    //      if(el.checked){
    //          console.log(el.getAttribute("value"))
    //      }
    //  })