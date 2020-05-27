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

let qtyInput = document.querySelectorAll(".input-qty");

qtyInput.forEach((inp, index)=>{
    inp.addEventListener("change", event=>{
        let qty = event.currentTarget.value;
        ui.changeQuantity(qty, index);

    })
})







