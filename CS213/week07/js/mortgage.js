//set initial values
var term;
var apr;
var amount;
var mPmt;

window.onload = function() {

}

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
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

function calculatePayment() {
    var payment = amount*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
    return payment
}

function validateApr() {
    apr = document.getElementById("apr").value;

    var decimal = /^(25|(([0-9]|1[0-9]|[2[0-4])?(\.[0-9]+)?))$/ //^[+]?(([0-9]|1[0-9]|2[0-4])*\.[0-9]+|2[0-5])$/ //^{0, 9}|[0-9]\.[0-9]|1[1-9]|2[1-5]|1[1-9]\.[0-9]|2[1-4]\.[0-9]|2[1-5]$/;
    if (apr.match(decimal)) {
        return true;
    }
    else {
        document.getElementById("apr_error").innerHTML = "insert a value between 0 and 25.00";
        document.getElementById("apr_error").style = "color : red";
    }
}

function validateTerm() {
    term = document.getElementById("term").value;

    var years = /^40|[0-3][0-9]$/
    if (term.match(years)) {
        return true
    }
    else {
        document.getElementById("term_error").innerHTML = 'Insert a value between 0 and 40';
        document.getElementById("term_error").style = "color : red";
    }
}


function validateForm() {
    var error = 0;
    var a = document.getElementById("apr").value;
    document.getElementById('apr_error').innerHTML = '';
    if (a == null || a == "") {
        error++;
        document.getElementById('apr_error').innerHTML = 'This field is empty';
        document.getElementById("apr_error").style = "color : orange";
    }

    var b = document.getElementById("term").value;
    document.getElementById('term_error').innerHTML = '';
    if (b == null || b == "") {
        error++;
        document.getElementById('term_error').innerHTML = 'This field is empty';
        document.getElementById("term_error").style = "color : orange";
    }

    var c = document.getElementById("amount").value;
    document.getElementById('amount_error').innerHTML = '';
    if (c == null || c == "") {
        error++;
        document.getElementById('amount_error').innerHTML = 'This field is empty';
        document.getElementById("amount_error").style = "color : orange";
    }

    if(error>0) {
        return false;
    }
    return true;
}