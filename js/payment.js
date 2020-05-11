$(document).ready(function () {
    $("#walletSession1").click(function (e) {
        EnableProceedToBtn('wallet');
    });
    $("#walletSession2").click(function (e) {
        EnableProceedToBtn('wallet');
    });
    $("#netbankingSession1").click(function (e) {
        EnableProceedToBtn('netbanking');
    });
    $("#netbankingSession2").click(function (e) {
        EnableProceedToBtn('netbanking');
    });
    $("#visaCardBtn").click(function (e) {
        EnableProceedToBtn('visacard');
    });
    $("#rupayCardBtn").click(function (e) {
        EnableProceedToBtn('rupaycard');
    });
    $('#UpiIdTextBox').on('input', function () {
        if ($('#UpiIdTextBox')[0].value != '') {
            EnableProceedToBtn('upi');
        }
    });
});

function EnableProceedToBtn(type) {
    switch (type) {
        case 'wallet':
            $('#poceedToBtnOfWallet')[0].classList.remove('w-btn');
            $('#poceedToBtnOfNetBanking')[0].classList.add('w-btn');
            $('#poceedToBtnOfUpi')[0].classList.add('w-btn');
            $('#rupayCardProceedBtn')[0].classList.add('w-btn');
            $('#visaCardProceedBtn')[0].classList.add('w-btn');
            $('#UpiIdTextBox')[0].value = '';
            break;
        case 'netbanking':
            $('#poceedToBtnOfNetBanking')[0].classList.remove('w-btn');
            $('#poceedToBtnOfWallet')[0].classList.add('w-btn');
            $('#poceedToBtnOfUpi')[0].classList.add('w-btn');
            $('#poceedToBtnOfWallet')[0].classList.add('w-btn');
            $('#visaCardProceedBtn')[0].classList.add('w-btn');
            $('#UpiIdTextBox')[0].value = '';
            break;

        case 'upi':
            $('#poceedToBtnOfNetBanking')[0].classList.add('w-btn');
            $('#poceedToBtnOfWallet')[0].classList.add('w-btn');
            $('#visaCardProceedBtn')[0].classList.add('w-btn');
            $('#rupayCardProceedBtn')[0].classList.add('w-btn');
            $('#poceedToBtnOfUpi')[0].classList.remove('w-btn');
            break;
        case 'visacard':
            $('#visaCardProceedBtn')[0].classList.remove('w-btn');
            $('#rupayCardProceedBtn')[0].classList.add('w-btn');
            $('#poceedToBtnOfNetBanking')[0].classList.add('w-btn');
            $('#poceedToBtnOfWallet')[0].classList.add('w-btn');
            $('#poceedToBtnOfUpi')[0].classList.add('w-btn');
            $('#UpiIdTextBox')[0].value = '';
            break;
        case 'rupaycard':
            $('#rupayCardProceedBtn')[0].classList.remove('w-btn');
            $('#visaCardProceedBtn')[0].classList.add('w-btn');
            $('#poceedToBtnOfNetBanking')[0].classList.add('w-btn');
            $('#poceedToBtnOfWallet')[0].classList.add('w-btn');
            $('#poceedToBtnOfUpi')[0].classList.add('w-btn');
            $('#UpiIdTextBox')[0].value = '';
            break;
    }

}

var pageNum = 1;

function proceedToPayButtonClick() {
    document.getElementById('logegedInUserPaymentPage1').style.display = "none";
    document.getElementById('logegedInUserPaymentPage2').style.display = "block";
    pageNum = 2;
}

function proceedToPayButtonClick1() {
    document.getElementById('paymentGuestUser').style.display = "none";
    document.getElementById('paymentGuestUserPaymentPage').style.display = "block";
    pageNum = 2;
}

function proceedToPayButton2() {
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