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

    $("#workStatus").click(function () {
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