function formValidCheck(form, number) {}

function updateProfile() {
    closeModal("#syne-edit-profile");
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

    const newWork = document.createElement('div');
    newWork.className = 'experience-container justify-content-between d-flex w-100';
    const newWorkContent = `<div class="experience">
            <div class="experience-image">
                <img src="img/icon3.jpg" alt="">
            </div>
            <div class="experience-details d-flex flex-column">
                <div class="experience-post font-weight-bold font-size-16">
                ` + position + `
                </div>
                <div class="experience-place font-weight-bold font-size-14">
                ` + companyName + `
                </div>
                <div class="experience-duration font-size-12">
                ` + workStartDate + ' - ' + workEndDate + '. ' + workDuration + `
                </div>
                ` + workLocation + `
                </div>
            </div>
        </div>
        <div class="edit-experience-button modal-btn cursor-pointer"
            data-target="syne-add-work-experience">
            <img src="img/svgImages/edit-grey-small.svg" alt="">Edit
        </div>`;
    newWork.innerHTML = newWorkContent;
    document.getElementsByClassName('experience-list')[0].appendChild(newWork);

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

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

$(document).ready(function () {

    addSharedPost();
    createLeftPanel(4);
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

    $('#isCurrentlyWorking').change(function (e) {
        if (e.currentTarget.checked) {
            $('#work-to-present').addClass('d-block');
            $('#work-to-default').removeClass('d-block');
            $('#work-to-default').addClass('d-none');
        } else {
            $('#work-to-default').addClass('d-block');
            $('#work-to-present').removeClass('d-block');
            $('#work-to-present').addClass('d-none');
        }
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

function addSharedPost() {
    if (document.getElementById("news-feeds") && document.getElementById("template-shared-post")) {
        let newsFeed = document.getElementById("template-shared-post");
        let newsFeedFinalHtml = "";

        dashBoardData.sharedNewsFeedData.forEach((newsFeedSingleUnit, index) => {
            let newsFeedCardHtml = newsFeed.innerHTML;
            let newsFeedCardFinalHtml = "";
            let isSharedPostTargetAmountDisplay = newsFeedSingleUnit.sharedPostTargetAmount !== '' ? 'block' : 'none';
            let isSharedPostprogressBarVisible = newsFeedSingleUnit.sharedPostTargetAmount !== '' ? 'block' : 'none';
            let isSharedPostRaisedAmountDisplay = newsFeedSingleUnit.sharedPostRaisedAmount !== '' ? 'block' : 'none';
            let showSharedPostContributors = newsFeedSingleUnit.sharedPostContributorsCount !== '' ? 'block' : 'none';
            let showSharedPostPercentage = newsFeedSingleUnit.sharedPostCompletionPercentage !== '' ? 'block' : 'none';
            let isLikeByMe = newsFeedSingleUnit.isLikedByMe === 'true' ? 'contents' : 'none';
            let progessBarWidth = 80;
            newsFeedCardFinalHtml += newsFeedCardHtml.replace(/{{name}}/g, newsFeedSingleUnit.name)
                .replace(/{{sharedPostName}}/g, newsFeedSingleUnit.sharedPostName)
                .replace(/{{dataID}}/g, newsFeedSingleUnit.id)
                .replace(/{{userImage}}/g, newsFeedSingleUnit.userImage)
                .replace(/{{email}}/g, newsFeedSingleUnit.email)
                .replace(/{{postedTimeDuration}}/g, newsFeedSingleUnit.postedTimeDuration)
                .replace(/{{sharedPostUserImage}}/g, newsFeedSingleUnit.sharedPostUserImage)
                .replace(/{{sharedPostEmail}}/g, newsFeedSingleUnit.sharedPostEmail)
                .replace(/{{sharedPostPostedTimeDuration}}/g, newsFeedSingleUnit.sharedPostPostedTimeDuration)
                .replace(/{{sharedPostImageUrl}}/g, newsFeedSingleUnit.sharedPostImageUrl)
                .replace(/{{sharedPostDescriptionHeading}}/g, newsFeedSingleUnit.sharedPostDescriptionHeading)
                .replace(/{{sharedPostDescripionContent}}/g, newsFeedSingleUnit.sharedPostDescripionContent)
                .replace(/{{sharedPostTargetAmount}}/g, newsFeedSingleUnit.sharedPostTargetAmount)
                .replace(/{{sharedPostIsTargetAmountDisplay}}/g, isSharedPostTargetAmountDisplay)
                .replace(/{{sharedPostIsprogressBarVisible}}/g, isSharedPostprogressBarVisible)
                .replace(/{{sharedPostProgessBarWidth}}/g, progessBarWidth)
                .replace(/{{sharedPostRaisedAmount}}/g, newsFeedSingleUnit.sharedPostRaisedAmount)
                .replace(/{{sharedPostIsRaisedAmountDisplay}}/g, isSharedPostRaisedAmountDisplay)
                .replace(/{{sharedPostContributorsCount}}/g, newsFeedSingleUnit.sharedPostContributorsCount)
                .replace(/{{sharedPostShowContributors}}/g, showSharedPostContributors)
                .replace(/{{sharedPostCompletionPercentage}}/g, newsFeedSingleUnit.sharedPostCompletionPercentage)
                .replace(/{{sharedPostShowPercentage}}/g, showSharedPostPercentage)
                .replace(/{{isLikeByMe}}/g, isLikeByMe)
                .replace(/{{likeCount}}/g, newsFeedSingleUnit.likedCount)
                .replace(/{{shareCount}}/g, newsFeedSingleUnit.shareCount)
                .replace(/{{postId}}/g, newsFeedSingleUnit.id)
                .replace(/{{commentCount}}/g, newsFeedSingleUnit.commentCount);

            newsFeedFinalHtml += newsFeedCardFinalHtml;
        });

        document.getElementById("news-feeds").innerHTML += newsFeedFinalHtml;
        document.getElementById("news-feeds").innerHTML
    }
}