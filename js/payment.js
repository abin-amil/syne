var pageNum = 1;
function proceedToPayButtonClick() {
    document.getElementById('logegedInUserPaymentPage1').style.display = "none";
    document.getElementById('logegedInUserPaymentPage2').style.display = "block";
    pageNum = 2;
}

function proceedToPayButtonClick1()
{
    document.getElementById('paymentGuestUser').style.display = "none";
    document.getElementById('paymentGuestUserPaymentPage').style.display = "block";
    pageNum = 2;
}

function proceedToPayButton2()
{
    document.getElementById('paymentGuestUser').style.display = "none";
    // document.getElementById('guestUserPaymentPageLeftSide').style.display = "none";
    // document.getElementById('guestUserPaymentPageRightSide').style.display = "none";
    document.getElementById('paymentGuestUserPaymentPage').style.display = "none";



    document.getElementById('paymentSucessfullPage').style.display = "block";
    pageNum = 2;
}

function proceedToPaymentGateway() {
    document.getElementById('logegedInUserPaymentPage1').style.display = "none";
    document.getElementById('logegedInUserPaymentPage2').style.display = "none";
    document.getElementById('paymentSucessfullPage').style.display = "block";
    pageNum = 3;
}

function back() {
    switch (pageNum) {
        case 1:
            break;
        case 2:
            document.getElementById('logegedInUserPaymentPage2').style.display = "none";
            document.getElementById('logegedInUserPaymentPage1').style.display = "block";
            pageNum = 1;
            break;
        case 3:
            document.getElementById('logegedInUserPaymentPage1').style.display = "none";
            document.getElementById('paymentSucessfullPage').style.display = "none";
            document.getElementById('logegedInUserPaymentPage2').style.display = "block";
            pageNum = 2;
            break;
    }

}