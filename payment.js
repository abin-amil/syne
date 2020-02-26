function proceedToPayButtonClick() {
    document.getElementById('logegedInUserPaymentPage1').style.display = "none";
    document.getElementById('logegedInUserPaymentPage2').style.display = "block";
}

function proceedToPaymentGateway(){
    document.getElementById('logegedInUserPaymentPage1').style.display = "none";
    document.getElementById('logegedInUserPaymentPage2').style.display = "none";
    document.getElementById('paymentSucessfullPage').style.display = "block";
}