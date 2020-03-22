$(document).ready(function () {
    setTab(1);    
});

$("#syne-share-popup .modalclose").click(function (e) {
    closeModal("#syne-share-popup");
    e.preventDefault();
});

$("#syne-delete-popup .modalclose").click(function (e) {
    closeModal("#syne-delete-popup");
    e.preventDefault();
});

$("#syne-delete-popup .delete-popup-confirm-action").click(function (e) {
    closeModal("#syne-delete-popup");
    e.preventDefault();
});

$("#syne-delete-popup .delete-popup-decline-action").click(function (e) {
    closeModal("#syne-delete-popup");
    e.preventDefault();
});ss

$("#syne-share-popup-post").click(function (e) {
    closeModal("#syne-share-popup");
    e.preventDefault();
});

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

