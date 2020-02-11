$(document).ready(function () {
    LeftPanelCreation();
    createProfileCompletionSection();

    newsFeedsCreation();
    recommendedProjectPanelCreation();
    whoToFollowListPanelCreation();
    recommendedOrganisationListPanelCreation();
});

// creating left panel dynamically with dashboard data
function LeftPanelCreation() {
    createLeftPanelTopBanner();
    createLeftPanelUserDetails();
    createLeftPanelTabs();
}

// left panel user details creation
function createLeftPanelUserDetails() {
    let leftPanel = document.getElementById("template-left-panel-user-details");
    let leftPanelHtml = leftPanel.innerHTML;
    let leftPanelFinalHtml = "";

    leftPanelFinalHtml += leftPanelHtml.replace(/{{name}}/g, dashBoardData.name)
        .replace(/{{mailId}}/g, dashBoardData.mailId)
        .replace(/{{followersCount}}/g, dashBoardData.followersCount)
        .replace(/{{followingCount}}/g, dashBoardData.followingCount)
        .replace(/{{userIntroDetails}}/g, userDetails.userIntroDetails)
        .replace(/{{birthDay}}/g, userDetails.birthDay)
        .replace(/{{location}}/g, userDetails.location);

    document.getElementById("left-panel-user-details").innerHTML = leftPanelFinalHtml;
}

// left panel tabs creation
function createLeftPanelTabs() {
    if (document.getElementById("template-left-panel-tab-details")) {
        let leftpanelTab = document.getElementById("template-left-panel-tab-details");
        let leftPanelTabHtml = leftpanelTab.innerHTML;
        let leftPanelTabFinalHtml = "";
        dashBoardData.leftPanelTabs.forEach((tab, index) => {
            leftPanelTabFinalHtml += leftPanelTabHtml.replace(/{{iconUrl}}/g, tab.iconUrl)
                .replace(/{{tabName}}/g, tab.name);
        });

        document.getElementById("left-panel-tabs").innerHTML = leftPanelTabFinalHtml;
    }
}

// left panel top banner creation
function createLeftPanelTopBanner() {
    let leftPanelTopBanner = document.getElementById("template-left-panel-top-banner");
    let leftPanelTopBannerHtml = leftPanelTopBanner.innerHTML;
    let leftPanelTopBannerFinalHtml = "";

    leftPanelTopBannerFinalHtml += leftPanelTopBannerHtml.replace(/{{coverPhotoUrl}}/g, dashBoardData.coverPhotoUrl)
        .replace(/{{profilePhotoUrl}}/g, dashBoardData.profilePhotoUrl);

    if (document.getElementById("left-panel-top-banner")) {
        document.getElementById("left-panel-top-banner").innerHTML = leftPanelTopBannerFinalHtml;
    }
}

// profile completion section creation
function createProfileCompletionSection() {
    let profileCompletionsection = document.getElementById("template-profile-comleption-section");
    let profileCompletionsectionHtml = profileCompletionsection.innerHTML;
    let profileCompletionsectionFinalHtml = "";

    profileCompletionsectionFinalHtml += profileCompletionsectionHtml.replace(/{{name}}/g, dashBoardData.name)
        .replace(/{{profileCompletionPercentage}}/g, dashBoardData.profileCompletionPercentage);

    document.getElementById("profile-completion-section").innerHTML = profileCompletionsectionFinalHtml;
}

// user posts/ news feed creation section
function newsFeedsCreation() {
    let newsFeed = document.getElementById("template-news-feed");
    let newsFeedFinalHtml = "";

    dashBoardData.newsFeedData.forEach((newsFeedSingleUnit, index) => {
        let newsFeedCardHtml = newsFeed.innerHTML;
        let newsFeedCardFinalHtml = "";
        let isTargetAmountDisplay = newsFeedSingleUnit.targetAmount !== '' ? 'block' : 'none';
        let isRaisedAmountDisplay = newsFeedSingleUnit.raisedAmount !== '' ? 'block' : 'none';
        let showContibutors = newsFeedSingleUnit.contributorsCount !== '' ? 'block' : 'none';
        let showPercentage = newsFeedSingleUnit.completionPercentage !== '' ? 'block' : 'none';
        let isLikeByMe = newsFeedSingleUnit.isLikedByMe === 'true' ? 'contents' : 'none';
        newsFeedCardFinalHtml += newsFeedCardHtml.replace(/{{name}}/g, newsFeedSingleUnit.name)
            .replace(/{{userImage}}/g, newsFeedSingleUnit.userImage)
            .replace(/{{email}}/g, newsFeedSingleUnit.email)
            .replace(/{{postedTimeDuration}}/g, newsFeedSingleUnit.postedTimeDuration)
            .replace(/{{imageUrl}}/g, newsFeedSingleUnit.imageUrl)
            .replace(/{{descriptionHeading}}/g, newsFeedSingleUnit.descriptionHeading)
            .replace(/{{descripionContent}}/g, newsFeedSingleUnit.descriptionContent)
            .replace(/{{targetAmount}}/g, newsFeedSingleUnit.targetAmount)
            .replace(/{{isTargetAmountDisplay}}/g, isTargetAmountDisplay)
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

// right panel recommended project section creation
function recommendedProjectPanelCreation() {
    let recommendedProjectPanel = document.getElementById("template-recommended-project");
    let recommendedProjectPanelHtml = recommendedProjectPanel.innerHTML;
    let recommendedProjectPanelFinalHtml = "";
    dashBoardData.recommendedProject.forEach((recommendedProject, index) => {
        recommendedProjectPanelFinalHtml += recommendedProjectPanelHtml.replace(/{{imageUrl}}/g, recommendedProject.imageUrl)
            .replace(/{{projectName}}/g, recommendedProject.projectName)
            .replace(/{{projectContent}}/g, recommendedProject.projectContent)
            .replace(/{{targetAmount}}/g, recommendedProject.targetAmount)
            .replace(/{{raisedAmount}}/g, recommendedProject.raisedAmount)
            .replace(/{{completionPercentage}}/g, recommendedProject.completionPercentage);
    });

    document.getElementById("recommended-project-panel").innerHTML = recommendedProjectPanelFinalHtml;
}

// right panel who to follow list creation
function whoToFollowListPanelCreation() {
    let whoToFollowListPanel = document.getElementById("template-who-to-follow-list-panel");
    let whoToFollowListPanelHtml = whoToFollowListPanel.innerHTML;
    let whoToFollowListPanelFinalHtml = "";
    dashBoardData.whoToFollowList.forEach((followerSuggestion, index) => {
        whoToFollowListPanelFinalHtml += whoToFollowListPanelHtml.replace(/{{mutualFollwerName}}/g, followerSuggestion.mutualFollwerName)
            .replace(/{{mutualFollowersCount}}/g, followerSuggestion.mutualFollowersCount)
            .replace(/{{name}}/g, followerSuggestion.name)
            .replace(/{{email}}/g, followerSuggestion.email)
            .replace(/{{followersCount}}/g, followerSuggestion.followersCount)
            .replace(/{{imageUrl}}/g, followerSuggestion.imageUrl);
    });

    document.getElementById("who-to-follow-list-panel").innerHTML = whoToFollowListPanelFinalHtml;
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
