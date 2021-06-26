//gets all values and calls a function to calculate payment
function getValues() {
    validateForm()
    apr = document.getElementById("apr").value;
    term = document.getElementById("term").value;
    amount = document.getElementById("amount").value;
    apr /= 1200;
    term *=12

    mPmt = calculatePayment();
    document.getElementById("payment").value = "$" + mPmt.toFixed(2);

}
//the function that calculates tha payment
function calculatePayment() {
    var payment = amount*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
    return payment
}
//checks for Apr values are correct
function validateApr(){
    var apr = document.getElementById("apr").value;
    if(apr > 0 && apr <=25){
        document.getElementById("apr_error").style.visibility = "hidden";
        return true
    }
    else {
        document.getElementById('apr_error').innerHTML = "insert a value between 0 and 25.00";
        document.getElementById("apr_error").style.visibility = "visible";
        document.getElementById("apr").focus();
        return false;
    }
}

//checks for Term values are correct
function validateTerm(){
    var term = document.getElementById("term").value;        
    if(term > 0 && term <=40) {
        document.getElementById("term_error").style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementById('term_error').innerHTML = "insert a value between 0 and 40";
        document.getElementById("term_error").style.visibility = "visible";
        document.getElementById("term").focus();
        return false;
    }
}

//checks for Amount values are correct
function validateAmount() {
    var amount = document.getElementById("amount").value;
    if(amount == null || amount == ""){
        document.getElementById('amount_error').innerHTML = 'This field is empty';
        document.getElementById("amount_error").style.visibility = "visible";
        document.getElementById("amount").focus();
        return false;
    }
    else {
        document.getElementById("amount_error").style.visibility = "hidden";
        return true;
    }
}

//this function checks for all imputs are correct to compute the calculation, and it calls the calculation function,
//it also checks for all the form is well done
function checkall(){
    if(validateApr() && validateTerm() && validateForm()) {
        getValues();
    }
}

//this validates all Form inputs are filled
function validateForm() {
    var error = 0;
    var a = document.getElementById("apr").value;
    document.getElementById('apr_error').innerHTML = '';
    if (a == null || a == "") {
        error++;
        document.getElementById('apr_error').innerHTML = 'This field is empty';
        document.getElementById("apr_error").style.visibility = "visible";
        document.getElementById("apr_error").focus();
    }
    
    var b = document.getElementById("term").value;
    document.getElementById('term_error').innerHTML = '';
    if (b == null || b == "") {
        error++;
        document.getElementById('term_error').innerHTML = 'This field is empty';
        document.getElementById("term_error").style.visibility = "visible";
    }
    
    var c = document.getElementById("amount").value;
    document.getElementById('amount_error').innerHTML = '';
    if (c == null || c == "") {
        error++;
        document.getElementById('amount_error').innerHTML = 'This field is empty';
        document.getElementById("amount_error").style.visibility = "visible";
    }

    if(error>0) {
        return false;
    }
    return true;
}

//this hides all error
function clearingErr(){
    document.getElementById("apr_error").style.visibility = "hidden";
    document.getElementById("term_error").style.visibility = "hidden";
    document.getElementById("amount_error").style.visibility = "hidden";   
}