import Data from "../utils/data.js";

//init 
let data = new Data;

//print total
let orderTotal = document.querySelector(".orderTotal");
let amount = localStorage.getItem("orderTotal");

orderTotal.textContent = `Total: $${amount}`

//do regex
data.regEx();