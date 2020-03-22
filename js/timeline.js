$(document).ready(function () {
    setTab(1);    
});

$("#syne-share-popup .modalclose").click(function (e) {
    closeModal("#syne-share-popup");
    e.preventDefault();
});

$("#syne-share-popup-post").click(function (e) {
    closeModal("#syne-share-popup");
    e.preventDefault();
});

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

