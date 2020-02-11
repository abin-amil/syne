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

function updateProfile() {
    let editProfileFormValues = {};
    $.each($('#editProfileForm').serializeArray(), function (i, field) {
        editProfileFormValues[field.name] = field.value;
    });
    // update leftpanel data models with new value
    userDetails.userIntroDetails = editProfileFormValues.userDetailInto !== "" ?
        editProfileFormValues.userDetailInto : userDetails.userIntroDetails;
    userDetails.birthDay = editProfileFormValues.dateOfBirth !== "" ?
        convertDateIntoDDMMMYYYY(editProfileFormValues.dateOfBirth) : userDetails.birthDay;
    userDetails.location = editProfileFormValues.location !== "" ?
        editProfileFormValues.location : userDetails.location;

    // update left panel with new values or create left panel with new values
    LeftPanelCreation();
    $("#syne-edit-profile").removeClass("open-pop");
    $("body").removeClass("modal-blur");
}



function convertDateIntoDDMMMYYYY(date) {
    let current_datetime = new Date(date)
    let formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear()
    return formatted_date;
}
