import {cartCount} from "../nav.js";


export class cartUI{
    constructor(){
        this.id = 1;
        this.cart = document.querySelector(".cart");
        this.popupArr = document.querySelectorAll(".cartItem--avColors");
    }

    printCart(){
        let cart = JSON.parse(localStorage.getItem("cart"));

        console.log(cart);

        let html = "";

        cart.forEach( (item, index)=>{
            let logoSrc = `img/${item.brand.toLowerCase()}logo.svg`;
            let li = `
            <li class="cartli center-hrz center-hrz--col" data-cartId="${index}">
            <div class="cartItem row">
                <div class="cartItem--pic row-7--child">
                    <div class="color-div" id="colordiv${index}" style="z-index: 4000"></div>
                    <img class="cartItem--pic--shoe" src=${item.src} alt="shoe">
                    <img class="cartItem--pic--logo"  src=${logoSrc} alt="">
                </div>

                <div class="row-7--child center-vert"> 
                    <p class="blue-text cartItem--name">${item.brand}<br>${item.model}</p>
                </div>
 
                <div class="row-7--child center-vert z4000 center-hrz--col" style="width: 10%">
                    <div class="cartItem--color" style="background-color: ${item.color};" id="${index}">
                        &nbsp;
                    </div>
                    <p class="normal-text">Change color<p>
                    <div class="cartItem--avColors z5000" id="popup${index}">
                        <div class="cartItem--avColors--color" style="background-color: ${item.avColors[0]}">&nbsp;</div>
                        <div class="cartItem--avColors--color" style="background-color: ${item.avColors[1]}">&nbsp;</div>
                        <div class="cartItem--avColors--color" style="background-color: ${item.avColors[2]}">&nbsp;</div>
                        <div class="cartItem--avColors--color" style="background-color: ${item.avColors[3]}">&nbsp;</div>
                    </div>
                </div>
                
                <div class="otherDiv center-vert z3500" style="position: relative;">
                    <div class="center-hrz">
                        <p class="cartItem--text">Size:</p>
                        <input type="number" placeholder="5" class="input-number input-size" min="6" max="9" value="${item.size}">
                    </div>
                </div>

                <div class="otherDiv  center-vert  z4000">
                    <div class="center-hrz">
                        <p class="cartItem--text">Qty:</p>
                        <input type="number" placeholder="1" class="input-number input-qty" min="1" max="50" value="${item.qty}">
                    </div>
                </div>

                <div class="otherDiv  center-vert  z4000">
                    <p class="cartItem--price">US$${parseInt(item.price.slice(3,9)) * item.qty}</p>
                </div>
                <div class="center-vert  z4000">
                <p class="ppu">ppu:${item.price}</p>
                </div>

                <div class=" center-vert  z4000">
                    <span class="lnr lnr-trash cartItem--delete"></span>
                </div>
            </div>
          </li>
            `
            html += li;  
        });
        this.cart.innerHTML = html;
    }

    activatePopup(id, element){
        let popup = document.getElementById(`popup${id}`);
        popup.classList.add("active");
        let colors = popup.children;

        for(let i = 0; i < 4; i++){
            colors[i].addEventListener("click", event=>{
                let color = event.currentTarget.style.backgroundColor;
                element.style.backgroundColor = color;
                this.closePopup(id);

                this.changeColor(id, color)
            })
        }
    }

    closePopup(id){
        let popup = document.getElementById(`popup${id}`);
        popup.classList.remove("active");
    }

    changeColor(id, color){
        let colorDiv = document.querySelector(`#colordiv${id}`);
        colorDiv.style.boxShadow = `0 0 0 3000px ${color}`;
    }

    shoeColor(){
        document.querySelectorAll(".cartItem--color").forEach(color=>{
            let bgColor = color.style.backgroundColor;
            // console.log(color)
            let id = color.id;
            this.changeColor(id, bgColor)
         })
    }
    removeItem(id){
       let li = document.querySelector(`[data-cartID='${id}']`);
       li.parentElement.removeChild(li);
    }

    gsap(){
        let tl = gsap.timeline({defaults: {duration: 1.5}});
        tl.staggerFrom(".cartli", 0.5, {y: 300, opacity: 0}, 0.3)
    }

    changeQuantity(num,index){
        let ppus = document.querySelectorAll(".ppu");
        let ppu = ppus[index].textContent.slice(7,10);
        let prices = document.querySelectorAll(".cartItem--price");
        let price = prices[index];
        price.textContent = `US$${num * ppu}`;
    }

    totalize(){
        let prices = document.querySelectorAll(".cartItem--price");
        let subtotal = document.querySelector(".subTotalAmount");
        let accumulator = 0;
        let total = document.querySelector(".totalAmount");
        let totalsDiv = document.querySelector(".totalsDiv");
        let checkoutBtn = document.querySelector(".checkoutBtn");
        if(prices.length !== 0){
          prices.forEach(price=>{
          //add all the prices to find the subtotal
          accumulator += parseInt(price.textContent.slice(3,7));
          })
          //show the subtotal
          subtotal.textContent = `$${accumulator}`;
          //show the total
          total.textContent = `$${accumulator + 80}`;
          localStorage.setItem("orderTotal", `${accumulator + 80}`);
        }else{
            totalsDiv.style.display = "none";
            checkoutBtn.style.display = "none";
        }
    }
}


export class indexUI{
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

    // changeNavBg(str){
    //     this.navBackDrop.forEach(element =>{
    //         if(element.id !== str){
    //             element.style.animation = "fadeout 0.8s forwards";
    //         }else if (element.id === str){
    //             element.style.animation = "fadein 0.8s forwards";
    //         }
    //     })
    // }

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
    
}

export class ppUI{
    constructor(){
        this.id = 1;
        this.tabs = document.querySelectorAll("[data-tab-target]");
        this.tabContents = document.querySelectorAll("[data-tab-content]");
        this.descriptionName = document.querySelector(".tab-description--name");
        this.starsNumber = document.querySelector(".tab-reviews--number");
        this.starsDiv = document.querySelector(".tab-reviews--stars");
        this.starsParent = document.querySelectorAll(".stars");
        //product details

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
     <div class="product u-margin-top-big">
        <div class="product--details">
            <h3 class="product--details--brand">${shoeBrand}</h3>
            <h4 class="product--details--model">${shoeModel}</h4>
            <div class="product--details--price u-margin-top u-margin-bottom">${shoePrice}</div>

             <div class="product--details--sizes u-margin-top">
                    <p class=" product--details--text" id="errorsize">select size</p>
                <div class="product--details--sizes--options" >
                    <input type="radio" name="size" id="size-5" class="sizeOptions radio-btn" value="5">
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
               <p class=" product--details--text" id="errorcolor">select color</p>
                  <div class="product--details--colors--options" >
                      <input type="radio" name="color" id="color-1" class="radio-btn colorOptions" value="${color0}">
                      <label for="color-1" class="color-options radio-label" style="background-color: ${color0}">1</label>
          
                      <input type="radio" name="color" id="color-2" class="radio-btn colorOptions" value="${color1}">
                      <label for="color-2" class="color-options radio-label" style="background-color: ${color1};">2</label>
          
                      <input type="radio" name="color" id="color-3" class="radio-btn colorOptions" value="${color2}">
                      <label for="color-3" class="color-options radio-label" style="background-color: ${color2};">3</label>
          
                      <input type="radio" name="color" id="color-4" class="radio-btn colorOptions" value="${color3}">
                      <label for="color-4" class="color-options radio-label" style="background-color: ${color3};">4</label> 
                  </div>
           </div>

           <div class="product--details--quantity">
             <p class=" product--details--text" id="errorquantity">Quantity:</p>
             <div class="center-vert u-margin-left-big">
               <input type="number" class="product--details--quantity--input" placeholder="qty" min="1" max="100" name="quantity">
             </div>
           </div>

           <a href="#" style="text-decoration: none;" data-modal-target="#modal">            
               <div class="product--details--cta u-margin-top">
                   <p class="white-text product--details--cta--text">Add to cart</p>
                   <img src="img/shopping-cart.svg" alt="cart-icon" class="product--details--cta--icon">
               </div>
             </a>
             <p class="error u-margin-top" style="display: none">P</p>
        </div>

        <div class="product--pic">
          <img class="product--pic--1" src="${logoSrc}" alt="logo">
          <img class="product--pic--2" src="${shoeSrc}" alt="shoe">
          <div class="color-div">&nbsp;</div>
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

    changeColor(color){
        let colorDiv = document.querySelector(".color-div");
        colorDiv.style.boxShadow = `0 0 0 3000px ${color}`;
        // console.log(colorDiv)
    }

    showError(str){
        // console.log("oopsies")
        let errormsg = document.querySelector(".error");
        errormsg.style.display = "block";
        errormsg.textContent = `please fill in the required fields`;
        let errorText = document.querySelector(`#error${str}`);
        errorText.style.color = "red";

        setTimeout(()=>{
            errormsg.style.display = "none",
            errorText.style.color = "#6B6B6B";
        }, 2000)
    }

    openModal(modal){
        if(modal === null) return;
        modal.classList.add("active");
        overlay.classList.add("active");
    }
    
    closeModal(modal){
        if(modal === null) return;
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }  


    showModal(){
        const openModalButton = document.querySelector("[data-modal-target]");
        const closeModalButton = document.querySelector("[data-close-button]");
        const overlay = document.getElementById("overlay");
        
        overlay.addEventListener("click", ()=>{
            const modal = document.querySelector(".modal.active");
            this.closeModal(modal);
        })
        
        openModalButton.addEventListener("click", ()=>{
            const modal = document.querySelector(openModalButton.dataset.modalTarget);
            this.openModal(modal);
        });
        
        closeModalButton.addEventListener("click", ()=>{
            const modal = closeModalButton.closest(".modal")
            this.closeModal(modal);
        });          
    }

    readRadioVal(arr){
        let value;
        arr.forEach(e=>{
            if(e.checked){
                value = e.value;
            }
        })
        return value;
    }

    getData(){
        let sizeBtns = document.querySelectorAll(".sizeOptions");
        let colorBtns = document.querySelectorAll(".colorOptions");
        let qty = document.querySelector(".product--details--quantity--input").value;
        let productBrand = document.querySelector(".product--details--brand").textContent;
        let productModel = document.querySelector(".product--details--model").textContent;
        let price = document.querySelector(".product--details--price").textContent;

        //check if a sizeBtn is checked
        {
            let arr = [];
            sizeBtns.forEach( e=>{
                arr.push(e.checked);
            });
            if(arr.includes(true) === false){
                this.showError("size")
                return;
            }
        }

        // check if a colorBtn is checked
        {
            let arr = [];
            colorBtns.forEach( e=>{
                arr.push(e.checked);
            });
            if(arr.includes(true) === false){
                this.showError("color")
                return;
            }
        }

    
        // check if the qty is filled
        if(qty === ""){
            this.showError("quantity");
            return;
        }

        // collect the data

        let cartItem = new Object();
        cartItem.brand = productBrand;
        cartItem.model = productModel;
        cartItem.price = price;
        cartItem.size =  this.readRadioVal(sizeBtns);
        cartItem.color = this.readRadioVal(colorBtns);
        cartItem.avColors = [localStorage.getItem("color0"), localStorage.getItem("color1"), localStorage.getItem("color2"), localStorage.getItem("color3")];
        cartItem.qty = qty;
        cartItem.src = localStorage.getItem("shoeSrc")
        //get the array from LS
        let cartArrStr = localStorage.getItem("cart");
        let cartArr = JSON.parse(cartArrStr);
        cartArr.push(cartItem);
        let lsCart = JSON.stringify(cartArr);
        console.log(cartArr)
        localStorage.setItem("cart",lsCart);
        this.showModal();
        cartCount();
    }
}


