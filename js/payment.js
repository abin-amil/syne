$(document).ready(function () {
    selectedWalletId = "";
    selectedNetBankingId = "";
    $("#walletSession1").click(function (e) {
        RemoveHighlightingClass("#walletSession1");
        RemoveHighlightingClass("#walletSession2");

        RemoveHighlightingClass("#netbankingSession1");
        RemoveHighlightingClass("#netbankingSession2");

        HighlightSelectedDiv(selectedWalletId);
    });
    $("#walletSession2").click(function (e) {
        RemoveHighlightingClass("#walletSession1");
        RemoveHighlightingClass("#walletSession2");

        RemoveHighlightingClass("#netbankingSession1");
        RemoveHighlightingClass("#netbankingSession2");

        HighlightSelectedDiv(selectedWalletId);
    });
    $("#wallet1").click(function (e) {
        selectedWalletId = "#wallet1";
        EnableProceedToBtn('wallet');
    });
    $("#wallet2").click(function (e) {
        selectedWalletId = "#wallet2";
        EnableProceedToBtn('wallet');
    });
    $("#wallet3").click(function (e) {
        selectedWalletId = "#wallet3";
        EnableProceedToBtn('wallet');
    });
    $("#wallet4").click(function (e) {
        selectedWalletId = "#wallet4";
        EnableProceedToBtn('wallet');
    });
    $("#wallet5").click(function (e) {
        selectedWalletId = "#wallet5";
        EnableProceedToBtn('wallet');
    });
    $("#wallet6").click(function (e) {
        selectedWalletId = "#wallet6";
        EnableProceedToBtn('wallet');
    });
    $("#netbankingSession1").click(function (e) {
        RemoveHighlightingClass("#netbankingSession1");
        RemoveHighlightingClass("#netbankingSession2");

        RemoveHighlightingClass("#walletSession1");
        RemoveHighlightingClass("#walletSession2");

        HighlightSelectedDiv(selectedNetBankingId);
    });
    $("#netbankingSession2").click(function (e) {
        RemoveHighlightingClass("#netbankingSession1");
        RemoveHighlightingClass("#netbankingSession2");

        RemoveHighlightingClass("#walletSession1");
        RemoveHighlightingClass("#walletSession2");

        HighlightSelectedDiv(selectedNetBankingId);
    });
    $("#netbankingSbi").click(function (e) {
        selectedNetBankingId = "#netbankingSbi"
        EnableProceedToBtn('netbanking');
    });
    $("#netbankingIcici").click(function (e) {
        selectedNetBankingId = "#netbankingIcici"
        EnableProceedToBtn('netbanking');
    });
    $("#netbankingHdfc").click(function (e) {
        selectedNetBankingId = "#netbankingHdfc"
        EnableProceedToBtn('netbanking');
    });
    $("#netbankingKotak").click(function (e) {
        selectedNetBankingId = "#netbankingKotak"
        EnableProceedToBtn('netbanking');
    });
    $("#netbankingAxis").click(function (e) {
        selectedNetBankingId = "#netbankingAxis"
        EnableProceedToBtn('netbanking');
    });
    $("#netbankingCanara").click(function (e) {
        selectedNetBankingId = "#netbankingCanara"
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

function RemoveHighlightingClass(nodes) {
    $(nodes).find('*').removeClass("wallet-selected");
}

function HighlightSelectedDiv(id) {
    $(id)[0].classList.add('wallet-selected');
}

function collapseExapandedArea(id) {
    const paymentMethodIds = ['globalwallet', 'creditcard', 'netbanking', 'upipayment'];
    let selectedPayemntMethod = id;
    let otherPaymentMethods = paymentMethodIds.filter(x => { return x != selectedPayemntMethod });
    for (let i = 0; i < otherPaymentMethods.length; i++) {
        $('#' + otherPaymentMethods[i])[0].classList.remove('show');
    }
}

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