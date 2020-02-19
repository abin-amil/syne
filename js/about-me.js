$(document).ready(function () {
    setTab(2);
});

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

function updateAboutMe() {
    closeModal("#syne-edit-about-me");
}

function addWorkExperience() {
    const companyName = $('#companyName').val();
    const position = $('#position').val();
    const workLocation = $('#workLocation').val();
    const isCurrentlyWorking = $('#isCurrentlyWorking').val();
    const workStartDate = $('#workStartDate').val();
    let workEndDate = $('#workEndDate').val();
    const workAccess = $('#workAccess').val();
    let workDuration = null;
    const startDate = new Date(workStartDate);
    let endDate;
    if (isCurrentlyWorking) {
        workEndDate = 'Present';
        endDate = new Date();
    } else {
        endDate = new Date(workEndDate);
    }

    workDuration = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

    let workExperience = document.getElementById("template-work-experience");
    let workExperienceHtml = workExperience.innerHTML.replace(/{{work}}/g, position)
        .replace(/{{company}}/g, companyName)
        .replace(/{{duration}}/g, workStartDate + ' - ' + workEndDate + '. ' + workDuration)
        .replace(/{{location}}/g, workLocation);

    document.getElementsByClassName('experience-list')[0].innerHTML = document.getElementsByClassName('experience-list')[0].innerHTML + workExperienceHtml;

    $('#companyName').val('');
    $('#position').val('');
    $('#workLocation').val('');
    $('#isCurrentlyWorking').prop("checked", true)
    $('#workStartDate').val('');
    $('#workEndDate').val('');
    $('#workAccess').val('public');
    closeModal("#syne-add-work-experience");
}

function addSchoolCollege() {
    closeModal("#syne-add-school-college");
}