let ui = new UI;

ui.printCart();

let colors = document.querySelectorAll(".cartItem--color");

colors.forEach(color=>{
    color.addEventListener("click", event=>{
       let id = event.currentTarget.id;
        let element = event.currentTarget
        ui.activatePopup(id, element);
    })
})

ui.shoeColor();

//delete button

let deleteBtns = document.querySelectorAll(".cartItem--delete");


deleteBtns.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        console.log(index);
        //delete from ui
        ui.removeItem(index);
        //reload
        window.location.reload();
        ///delete from localStorage
        //get and parse cart
        let cartArr = JSON.parse(localStorage.getItem("cart"));
        //remove item from array
        cartArr.splice(index,1);
        //put array back in local storage
        let cartStr = JSON.stringify(cartArr);
        localStorage.setItem("cart", cartStr);
        console.log(localStorage);  

    })

})

ui.gsap();


//update the cart

//when you change the color

let colorOptions = document.querySelectorAll(".cartItem--avColors--color");

colorOptions.forEach(option=>{
    option.addEventListener("click", event=>{
        let id = event.currentTarget.parentElement.id.slice(5,6);
        let color = event.currentTarget.style.backgroundColor;
         //get and parse cart
        let cartArr = JSON.parse(localStorage.getItem("cart"));
        //get the corresponding cartItem
        let cartItem = cartArr[id];
        cartItem.color = color;
        console.log(cartItem);
        //replace the one that was there
        cartArr.splice(id, 1, cartItem);
        console.log(cartArr);
        //put it back to local storage
        let cartStr = JSON.stringify(cartArr);
        localStorage.setItem("cart", cartStr);
        console.log(localStorage);  
    })
})

//when you change the size

let sizeInput = document.querySelectorAll(".input-size");

sizeInput.forEach((inp, index)=>{
    inp.addEventListener("change", event=>{
        let size = event.currentTarget.value;
        //get and parse cart
        let cartArr = JSON.parse(localStorage.getItem("cart"));
        //get the corresponding cartItem
        let cartItem = cartArr[index];
        cartItem.size = size;
        console.log(cartItem);
        cartArr.splice(index, 1, cartItem);
        //put array back in local storage
         let cartStr = JSON.stringify(cartArr);
        localStorage.setItem("cart", cartStr);
        console.log(localStorage)

    })
})

//when you change the quantity
let qtyInput = document.querySelectorAll(".input-qty");

qtyInput.forEach((inp, index)=>{
    inp.addEventListener("change", event=>{
        let qty = event.currentTarget.value;
        //display total price
        ui.changeQuantity(qty, index);
        //get and parse cart
        let cartArr = JSON.parse(localStorage.getItem("cart"));
        //get the corresponding cartItem
        let cartItem = cartArr[index];
        cartItem.qty = qty;
        cartArr.splice(index, 1, cartItem);
        //put array back into localStorage
        let cartStr = JSON.stringify(cartArr);
        localStorage.setItem("cart", cartStr);
        console.log(localStorage);

        //run the totalize function
        ui.totalize();

    })
})

//run the totalize function
ui.totalize();