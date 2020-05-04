class Data{
    constructor(){
        this.patterns = {
            email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
            quantity: /^\d{1,3}$/
        }    
        this.inputs = document.querySelectorAll("input");
    }

    regTest(field, regex){
        if(regex.test(field.value)){
          field.classList.contains("valid") ? field: field.classList.add("valid");
          field.classList.contains("invalid") ? field.classList.remove("invalid") : field;
        }
        else{
            field.classList.contains("invalid") ? field : field.classList.add("invalid");
            field.classList.contains("valid") ? field.classList.remove("valid") : field;
        }
    }

    regEx(){
        this.inputs.forEach(input => {
            input.addEventListener("keyup", (event)=>{
                this.regTest(event.currentTarget, this.patterns[event.currentTarget.attributes.name.value])
            })
        })
    }
}