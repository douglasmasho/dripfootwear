class UI{
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
                
                <div class="center-vert z3500" style="position: relative;">
                    <div class="center-hrz">
                        <p class="cartItem--text">Size:</p>
                        <input type="number" placeholder="5" class="input-number input-size" min="6" max="9" value="${item.size}">
                    </div>
                </div>

                <div class="center-vert  z4000">
                    <div class="center-hrz">
                        <p class="cartItem--text">Qty:</p>
                        <input type="number" placeholder="1" class="input-number input-qty" min="1" max="50" value="${item.qty}">
                    </div>
                </div>

                <div class="center-vert  z4000">
                    <p class="cartItem--price">US$${parseInt(item.price.slice(3,9)) * item.qty}</p>
                </div>
                <div class="center-vert  z4000">
                <p class="ppu">ppu:${item.price}</p>
                </div>

                <div class="center-vert  z4000">
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








// avColors: Array(4) [ "blue", "green", "red", … ]
// ​​
// brand: "Nike"
// ​​
// color: "blue"
// ​​
// model: "Airmax"
// ​​
// price: "US$150"
// ​​
// qty: "1"
// ​​
// size: "6"