function formValidCheck(form, number) {}

$(document).ready(function () {

    $(".modal-btn").click(function (e) {
        //$(this).next("div").addClass("open-pop");
        var modl_id = $(this).attr('data-target');
        $("#" + modl_id).addClass("open-pop");
        $("body").addClass("modal-blur");
        e.preventDefault();
    });

    $("#syne-edit-profile .modalclose").click(function (e) {
        $("#syne-edit-profile").removeClass("open-pop");
        $("body").removeClass("modal-blur");
        e.preventDefault();
    });

    $(".pop-modal").click(function (e) {
        if (e.target.className != 'pop-modal' && !$('.pop-modal').find(e.target).length) {
            $(this).removeClass("open-pop");
            $("body").removeClass("modal-blur");
        }
    });
});

$('#dateOfBirth').datepicker({
    uiLibrary: 'bootstrap4'
});
