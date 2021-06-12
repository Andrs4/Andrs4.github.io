
function phoneValidation() {
    var phone = document.getElementById("phone").value;
    let check_phone = /^\d{3}-\d{3}-\d{4}$/
    if(phone.match(check_phone)){
        document.getElementById("phone_error").style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementById("phone_error").style.visibility = "visible"
        document.getElementById("phone").focus();
        return false;
    }
}

function creditCardValidation() {
    var creditCard = document.getElementById("card").value;
    let check_card = /^\d{4} \d{4} \d{4} \d{4}$/;
    if(creditCard.match(check_card)){
        document.getElementById("card_error").style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementById("card_error").style.visibility = "visible";
        document.getElementById("card").focus();
        return false;
    }
}

function expirationDateValidation(){
    var exp_date = document.getElementById("exp_date").value;
    let check_date = /^((0[1-9])|(1[0-2]))\/2[0]2[0-9]$/;
    if(check_date.test(exp_date)){
        document.getElementById("exp_error").style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementById("exp_error").style.visibility = "visible";
        document.getElementById("exp_date").focus();
        return false
    }
}
//clears all warning messages
function clearingErr() {
    document.getElementById("phone_error").style.visibility = "hidden";
    document.getElementById("card_error").style.visibility = "hidden";
    document.getElementById("exp_error").style.visibility = "hidden";
    document.getElementById("first_name").focus();
}

function validateForm() {
    personalInfo();
    items();
}
function personalInfo(){
    //personal variables inputs from the DOM
    var first_name = document.getElementById("first_name");
    var last_name = document.getElementById("last_name");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    //span tags to set a warning message
    var firstNameError = document.getElementById("fName_error");
    var lastNameError = document.getElementById("lastName_error");
    var addresError = document.getElementById("address_error");
    var phoneError = document.getElementById("phone_error")
    if(errorVal(first_name, firstNameError)){
        if(errorVal(last_name, lastNameError)){
            if(errorVal(address, addresError)){
                if(errorVal(phone, phoneError)){
                    return true;
                }
                else {
                    return true
                }
            }
            else{
                return true
            }
        }
        else{
            return true
        }
    }
    else {
        return true
    }
}
// the function takes two parametters 1.and input value, 2.a tag id where to set output as the error message
function errorVal(inputtxt, outputTag){
    var err_message = "This field is empty"
    outputTag.innerHTML = err_message;
    if(inputtxt.value == null || inputtxt.value == ""){
        outputTag.style.visibility = "visible";
        inputtxt.focus();
    }
    else {
        outputTag.style.visibility = "hidden";
        return true
    }
}
// calculates the inputs for all items set
function calculation(){
    //item variable inputs from the DOM
    var firstItem = document.getElementById("item_0").value;
    var secondItem = document.getElementById("item_1").value;
    var thirdItem = document.getElementById("item_2").value;
    var forthItem = document.getElementById("item_3").value;
    var totalOfInputs = document.getElementById("total_inputs");
    var total_value = Number(firstItem) + Number(secondItem) + Number(thirdItem) + Number(forthItem);
    totalOfInputs.innerHTML = total_value;
}
//checks for items validation to have at least 1 item to purchase
function items() {
    var firstItem = document.getElementById("item_0").value;
    var secondItem = document.getElementById("item_1").value;
    var thirdItem = document.getElementById("item_2").value;
    var forthItem = document.getElementById("item_3").value;

    if((firstItem == null || firstItem == "") && (secondItem == null || secondItem =="")
    && (thirdItem == null || thirdItem == "") && (forthItem == null || forthItem == "")){
        inputsError = document.getElementById("inputs_error");
        inputsError.innerHTML = "You don't have any item to buy";
        inputsError.style.visibility = "visible";
        firstItem.focus();
    }
    else {
        inputsError.style.visibility = "hidden";
    }
}

