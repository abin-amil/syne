$(document).ready(function () {
    setTab(2);
    addDefaultWorkExperience();
    addDefaultSchool();
    $(".modal-btn").click(function (e) {
        //$(this).next("div").addClass("open-pop");
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
        workEndDate = endDate;
    }

    workDuration = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

    let workExperience = document.getElementById("template-work-experience");
    let workExperienceHtml = workExperience.innerHTML.replace(/{{work}}/g, position)
        .replace(/{{company}}/g, companyName)
        .replace(/{{duration}}/g, workStartDate + ' - ' + workEndDate + '. ' + workDuration)
        .replace(/{{location}}/g, workLocation);

    document.getElementById('experience-list').innerHTML = document.getElementById('experience-list').innerHTML + workExperienceHtml;

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
    const institutionName = $('#institutionName').val();
    const course = $('#course').val();
    const fieldOfStudy = $('#fieldOfStudy').val();
    const instituteStartDate = $('#instituteStartDate').val();
    const instituteEndDate = $('#instituteEndDate').val();
    const access = $('#workAccess').val();

    let duration = null;
    const startDate = new Date(instituteStartDate);
    let endDate;
    if (isCurrentlyWorking) {
        workEndDate = 'Present';
        endDate = new Date();
    } else {
        endDate = new Date(instituteEndDate);
        workEndDate = endDate;
    }

    duration = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

    let education = document.getElementById("template-education");
    let educationHtml = education.innerHTML.replace(/{{school}}/g, institutionName)
        .replace(/{{duration}}/g, startDate + ' - ' + endDate + '. ' + duration);

    document.getElementById('education-list').innerHTML = document.getElementById('education-list').innerHTML + educationHtml;

    $('#institutionName').val('');
    $('#course').val('');
    $('#fieldOfStudy').val('');
    $('#instituteStartDate').val('');
    $('#instituteEndDate').val('');
    $('#access').val('public');

    closeModal("#syne-add-school-college");
}

function addDefaultWorkExperience() {
    let workExperience = document.getElementById("template-work-experience");
    let workExperienceHtml = workExperience.innerHTML.replace(/{{work}}/g, 'Senior Software Engineer')
        .replace(/{{company}}/g, 'Alphabet Inc.')
        .replace(/{{duration}}/g, 'May 2009 - Present. 11 Yrs 3 mos')
        .replace(/{{location}}/g, 'California, USA');

    document.getElementById('experience-list').innerHTML = document.getElementById('experience-list').innerHTML + workExperienceHtml;
}

function addDefaultSchool() {
    let education = document.getElementById("template-education");
    let educationHtml = education.innerHTML.replace(/{{school}}/g, 'Mar.Thoma Seminary High School')
        .replace(/{{duration}}/g, 'May 2009 - Present. 11 Yrs 3 mos')
        .replace(/{{location}}/g, 'Kottayam, USA');

    document.getElementById('education-list').innerHTML = document.getElementById('education-list').innerHTML + educationHtml;
}