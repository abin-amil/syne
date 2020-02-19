$(document).ready(function () {
    createProfileCompletionSection();
    newsFeedsCreation();
    recommendedOrganisationListPanelCreation();
});


// profile completion section creation
function createProfileCompletionSection() {
    if (document.getElementById("profile-completion-section")) {
        let profileCompletionsection = document.getElementById("template-profile-comleption-section");
        let profileCompletionsectionHtml = profileCompletionsection.innerHTML;
        let profileCompletionsectionFinalHtml = "";

        profileCompletionsectionFinalHtml += profileCompletionsectionHtml.replace(/{{name}}/g, dashBoardData.name)
            .replace(/{{profileCompletionPercentage}}/g, dashBoardData.profileCompletionPercentage);

        document.getElementById("profile-completion-section").innerHTML = profileCompletionsectionFinalHtml;
    }
}

// user posts/ news feed creation section
function newsFeedsCreation() {
    if (document.getElementById("news-feeds")) {
        let newsFeed = document.getElementById("template-news-feed");
        let newsFeedFinalHtml = "";

        dashBoardData.newsFeedData.forEach((newsFeedSingleUnit, index) => {
            let newsFeedCardHtml = newsFeed.innerHTML;
            let newsFeedCardFinalHtml = "";
            let isTargetAmountDisplay = newsFeedSingleUnit.targetAmount !== '' ? 'block' : 'none';
            let isprogressBarVisible = newsFeedSingleUnit.targetAmount !== '' ? 'block' : 'none';
            let isRaisedAmountDisplay = newsFeedSingleUnit.raisedAmount !== '' ? 'block' : 'none';
            let showContibutors = newsFeedSingleUnit.contributorsCount !== '' ? 'block' : 'none';
            let showPercentage = newsFeedSingleUnit.completionPercentage !== '' ? 'block' : 'none';
            let isLikeByMe = newsFeedSingleUnit.isLikedByMe === 'true' ? 'contents' : 'none';
            let progessBarWidth = 80;
            newsFeedCardFinalHtml += newsFeedCardHtml.replace(/{{name}}/g, newsFeedSingleUnit.name)
                .replace(/{{userImage}}/g, newsFeedSingleUnit.userImage)
                .replace(/{{email}}/g, newsFeedSingleUnit.email)
                .replace(/{{postedTimeDuration}}/g, newsFeedSingleUnit.postedTimeDuration)
                .replace(/{{imageUrl}}/g, newsFeedSingleUnit.imageUrl)
                .replace(/{{descriptionHeading}}/g, newsFeedSingleUnit.descriptionHeading)
                .replace(/{{descripionContent}}/g, newsFeedSingleUnit.descriptionContent)
                .replace(/{{targetAmount}}/g, newsFeedSingleUnit.targetAmount)
                .replace(/{{isTargetAmountDisplay}}/g, isTargetAmountDisplay)
                .replace(/{{isprogressBarVisible}}/g, isprogressBarVisible)
                .replace(/{{progessBarWidth}}/g, progessBarWidth)
                .replace(/{{raisedAmount}}/g, newsFeedSingleUnit.raisedAmount)
                .replace(/{{isRaisedAmountDisplay}}/g, isRaisedAmountDisplay)
                .replace(/{{contibutorsCount}}/g, newsFeedSingleUnit.contributorsCount)
                .replace(/{{showContibutors}}/g, showContibutors)
                .replace(/{{completionPercentage}}/g, newsFeedSingleUnit.completionPercentage)
                .replace(/{{showPercentage}}/g, showPercentage)
                .replace(/{{isLikeByMe}}/g, isLikeByMe)
                .replace(/{{likeCount}}/g, newsFeedSingleUnit.likedCount)
                .replace(/{{shareCount}}/g, newsFeedSingleUnit.shareCount)
                .replace(/{{commentCount}}/g, newsFeedSingleUnit.commentCount);

            newsFeedFinalHtml += newsFeedCardFinalHtml;
        });

        document.getElementById("news-feeds").innerHTML = newsFeedFinalHtml;
    }
}


// right panel recommended organisation list creation
function recommendedOrganisationListPanelCreation() {
    let recommendedOrganisationListPanel = document.getElementById("template-who-to-follow-list-panel");
    let recommendedOrganisationListPanelHtml = recommendedOrganisationListPanel.innerHTML;
    let recommendedOrganisationListPanelFinalHtml = "";
    dashBoardData.recommendedOrganisations.forEach((recommendeOrganisation, index) => {
        recommendedOrganisationListPanelFinalHtml += recommendedOrganisationListPanelHtml.replace(/{{mutualFollwerName}}/g, recommendeOrganisation.mutualFollwerName)
            .replace(/{{mutualFollowersCount}}/g, recommendeOrganisation.mutualFollowersCount)
            .replace(/{{name}}/g, recommendeOrganisation.name)
            .replace(/{{email}}/g, recommendeOrganisation.email)
            .replace(/{{followersCount}}/g, recommendeOrganisation.followersCount)
            .replace(/{{imageUrl}}/g, recommendeOrganisation.imageUrl);
    });

    if (document.getElementById("recommended-organisation-panel")) {
        document.getElementById("recommended-organisation-panel").innerHTML = recommendedOrganisationListPanelFinalHtml;
    }
}

$("#cameraIcon").change(function () {
    getPostUplaodImage();
});

$("#attachementIcon").change(function () {
    getPostAttachment();
});

async function getPostUplaodImage() {
    const file = document.querySelector('#cameraIcon').files[0];
    var postImageContent = await toBase64(file);
    console.log(postImageContent);
}

async function getPostAttachment() {
    const file = document.querySelector('#attachementIcon').files[0];
    var postAttachmentContent = await toBase64(file);
    console.log(postAttachmentContent);
}

$(function () {
    if ($('textarea').emoji) {
        $('textarea').emoji({
            place: 'after',
            rowSize: 17
        });
    }
})


const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});