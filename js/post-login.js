$(document).ready(function () {
    createPostLoginSpecificLeftPanelTabs();
    createProfileCompletionSection();
    newsFeedsCreation();
    recommendedOrganisationListPanelCreation();
    adjustStyle();
});



function createPostLoginSpecificLeftPanelTabs() {
    if (document.getElementById("template-left-panel-tab-details-post-login-specific")) {
        let leftpanelTab = document.getElementById("template-left-panel-tab-details-post-login-specific");
        let leftPanelTabHtml = leftpanelTab.innerHTML;
        let leftPanelTabFinalHtml = "";
        postLoginSpecificlLeftPanelTabs.forEach((tab, index) => {
            leftPanelTabFinalHtml += leftPanelTabHtml.replace(/{{iconUrl}}/g, tab.iconUrl)
                .replace(/{{tabName}}/g, tab.name)
                .replace(/{{path}}/g, tab.path)
                .replace(/{{id}}/g, tab.id);

            if (tab.id == 6) {
                console.log('amil');
            }
        });

        if (document.getElementById("left-panel-tabs")) {
            document.getElementById("left-panel-tabs").innerHTML = leftPanelTabFinalHtml;
        }
    }
}

function adjustStyle() {
    document.getElementById("syne-tab6").classList.add('ml-1')
}
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
            let showContributors = newsFeedSingleUnit.contributorsCount !== '' ? 'block' : 'none';
            let showPercentage = newsFeedSingleUnit.completionPercentage !== '' ? 'block' : 'none';
            let isLikeByMe = newsFeedSingleUnit.isLikedByMe === 'true' ? 'contents' : 'none';
            let progessBarWidth = 80;
            newsFeedCardFinalHtml += newsFeedCardHtml.replace(/{{name}}/g, newsFeedSingleUnit.name)
                .replace(/{{dataID}}/g, newsFeedSingleUnit.id)
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
                .replace(/{{contributorsCount}}/g, newsFeedSingleUnit.contributorsCount)
                .replace(/{{showContributors}}/g, showContributors)
                .replace(/{{completionPercentage}}/g, newsFeedSingleUnit.completionPercentage)
                .replace(/{{showPercentage}}/g, showPercentage)
                .replace(/{{isLikeByMe}}/g, isLikeByMe)
                .replace(/{{likeCount}}/g, newsFeedSingleUnit.likedCount)
                .replace(/{{shareCount}}/g, newsFeedSingleUnit.shareCount)
                .replace(/{{commentCount}}/g, newsFeedSingleUnit.commentCount);

            newsFeedFinalHtml += newsFeedCardFinalHtml;
        });

        document.getElementById("news-feeds").innerHTML += newsFeedFinalHtml;
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

$("#login-link").click(function (e) {
    document.getElementById("login-link").style.display = "none";
    document.getElementById("user-link").style.display = "block";
});