$(document).ready(function () {
    setTab(2);

    $(".modal-btn").click(function (e) {
        var modl_id = $(this).attr('data-target');
        $("#" + modl_id).addClass("open-pop");
        $("body").addClass("modal-blur");
        e.preventDefault();
    });
});


function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}
function closeModals(id1,id2) {
    $(id1).removeClass("open-pop");
    $(id2).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

$("#edit-oganisation-popup .modalclose").click(function (e) {
    closeModal("#edit-oganisation-popup");
    e.preventDefault();
});

function publishOrganisation() {
    closeModal("#edit-oganisation-popup");
}