//set initial values
var term;
var apr;
var amount;
var mPmt;


window.onload = function()
{
  document.getElementById("apr").focus();
  document.getElementById("calculate").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues()
{
    apr = document.getElementById("apr").value;
    term = document.getElementById("term").value;
    amount = document.getElementById("amount").value;
    apr /= 1200;
    term *= 12;
    
    mPmt = calculatePayment();
    document.getElementById("payment").value = "$" + mPmt.toFixed(2);
};

function calculatePayment()
{
	var payment = amount*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
	return payment;
}


function validateForm() {
    var error = 0;
    var a = document.forms["mortgage_calc"]["apr"].value;
    document.getElementById('apr_error').innerHTML = '';
    if (a == null || a == "") {
        error++;
        document.getElementById('apr_error').innerHTML = 'This field is empty';
    }

    var b = document.forms["mortgage_calc"]["APR"].value;
    document.getElementById('term_error').innerHTML = '';
    if (b == null || b == "") {
        error++;
        document.getElementById('term_error').innerHTML = 'This field is empty';
    }

    var c = document.forms["mortgage_calc"]["amount"].value;
    document.getElementById('amount_error').innerHTML = '';
    if (c == null || c == "") {
        error++;
        document.getElementById('amount_error').innerHTML = 'This field is empty';
    }

    if(error>0) {
        return false;
    }
    return true;
}

function checkApr(inputtxt);
{
    var decimal = /^[+]?[0-9]+\.[0-9]+$/;
    if (inputtxt.value.match(decimal)) {
        alert('Correct, try another...')
    }
    else {
        alert('Wrong...!')
        return false;
    }
}