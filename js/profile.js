function formValidCheck(form, number) {}

function updateProfile() {
    closeModal("#syne-edit-profile");
}

function updateAboutMe() {
    closeModal("#syne-edit-about-me");
}

function addWorkExperience() {
    closeModal("#syne-add-work-experience");
}

function addSchoolCollege() {
    closeModal("#syne-add-school-college");
}

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

$(document).ready(function () {

    $(".modal-btn").click(function (e) {
        //$(this).next("div").addClass("open-pop");
        var modl_id = $(this).attr('data-target');
        $("#" + modl_id).addClass("open-pop");
        $("body").addClass("modal-blur");
        e.preventDefault();
    });

    $(".pop-modal").click(function (e) {
        if (e.target.className != 'pop-modal' && !$('.pop-modal').find(e.target).length) {
            closeModal(this);
        }
    });

    $("#syne-edit-profile .modalclose").click(function (e) {
        closeModal("#syne-edit-profile");
        e.preventDefault();
    });

    $("#syne-edit-about-me .modalclose").click(function (e) {
        closeModal("#syne-edit-about-me");
        e.preventDefault();
    });

    $("#syne-add-work-experience .modalclose").click(function (e) {
        closeModal("#syne-add-work-experience");
        e.preventDefault();
    });

    $("#syne-add-school-college .modalclose").click(function (e) {
        closeModal("#syne-add-school-college");
        e.preventDefault();
    });

    $("#workStatus").click(function (e) {
        closeModal("#work-to-default");
        e.preventDefault();
    });
});

const datePickerWidgets = [
    '#dateOfBirth',
    '#workStartDate',
    '#workEndDate',
    '#workEndDate2',
    '#instituteStartDate',
    '#instituteEndDate'
];

datePickerWidgets.forEach(x => $(x).datepicker({
    uiLibrary: 'bootstrap4'
}));


// add hyphen to project url when a space is given
function addHyphen(element) {
    let ele = document.getElementById(element.id);
    ele = ele.value.split('--').join('-'); // Remove dash (-) if mistakenly entered.
    let finalVal = ele.toLowerCase().replace(/ /g, '-');
    document.getElementById(element.id).value = finalVal;
}

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