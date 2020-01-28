var dashBoardData = {
    name: 'Vinith Gopal',
    mailId: '@vinithgopalofficial',
    profileCompletionPercentage: '80',
    followersCount: '498',
    followingCount: '8',
    coverPhotoUrl: 'img/beautiful-flower-picture-facebook-cover.jpg',
    profilePhotoUrl: 'img/user.png',
    leftPanelTabs: [
        { name: 'Project', iconUrl: 'img/project-grey-small.png' },
        { name: 'Events', iconUrl: 'img/events-grey-small.png' },
        { name: 'Stories', iconUrl: 'img/stories-grey-small.png' },
        { name: 'Organisations', iconUrl: 'img/org-grey-small.png' },
        { name: 'Transactions', iconUrl: 'img/transaction-grey-small.png' },
        { name: 'Settings & Privacy', iconUrl: 'img/settings-grey-small.png' }
    ],
    newsFeedData: [
        {
            name: 'Sanne Viscal',
            email: '@sanneviscal',
            postedTimeDuration: '1 week',
            imageUrl: 'img/flood-relief.jpg',
            descriptionHeading: 'Kerala Flood Relief 2019',
            descriptionContent: 'World Vision distributed food, clothing and hygiene and household items among families in Kerala whose homes have been damaged or destroyed.',
            targetAmount: '2,500,000',
            raisedAmount: '293,145',
            contributorsCount: '2.3K',
            completionPercentage: '42',
            isLikedByMe: 'true',
            likedCount: '657',
            shareCount: '1.5K',
            commentCount: '12',
            comments: []
        },
        {
            name: 'Honey Sara John',
            email: '@honeysarajohn',
            postedTimeDuration: '1 month',
            imageUrl: 'img/beautiful-flower-picture-facebook-cover.jpg',
            descriptionHeading: 'The state of ux in 2020',
            descriptionContent: 'A digital team goes and project become more complex, designers are being valued by collaboration and team enablement rather than only individual tasks.',
            targetAmount: '',
            raisedAmount: '',
            contributorsCount: '',
            completionPercentage: '',
            isLikedByMe: 'false',
            likedCount: '657',
            shareCount: '0',
            commentCount: '0',
            comments: []
        }
    ],
    recommendedProject: [
        {
            imageUrl: 'img/autumn-seasonal-sale-black.jpg',
            projectDuration: '3 months',
            projectName: 'Digital Democracy',
            projectContent: 'We aim to create digital democracy, where people and…',
            targetAmount: '2,500,000',
            raisedAmount: '293,145',
            completionPercentage: '42'
        },
        {
            imageUrl: 'img/beautiful-flower-picture-facebook-cover.jpg',
            projectDuration: '3 months',
            projectName: 'Digital Democracy',
            projectContent: 'We aim to create digital democracy, where people and…',
            targetAmount: '3,123,000',
            raisedAmount: '123,121',
            completionPercentage: '75'
        }
    ]
};

$(document).ready(function () {
    LeftPanelCreation();
    createProfileCompletionSection();

    newsFeedsCreation();
});

// creating left panel dynamically with dashboard data
function LeftPanelCreation() {
    createLeftPanelTopBanner();
    createLeftPanelUserDetails();
    createLeftPanelTabs();

    recommendedProjectPanelCreation();
}

// left panel user details creation
function createLeftPanelUserDetails() {
    let leftPanel = document.getElementById("template-left-panel-user-details");
    let leftPanelHtml = leftPanel.innerHTML;
    let leftPanelFinalHtml = "";

    leftPanelFinalHtml += leftPanelHtml.replace(/{{name}}/g, dashBoardData.name)
        .replace(/{{mailId}}/g, dashBoardData.mailId)
        .replace(/{{followersCount}}/g, dashBoardData.followersCount)
        .replace(/{{followingCount}}/g, dashBoardData.followingCount);

    document.getElementById("left-panel-user-details").innerHTML = leftPanelFinalHtml;
}

// left panel tabs creation
function createLeftPanelTabs() {
    let leftpanelTab = document.getElementById("template-left-panel-tab-details");
    let leftPanelTabHtml = leftpanelTab.innerHTML;
    let leftPanelTabFinalHtml = "";
    dashBoardData.leftPanelTabs.forEach((tab, index) => {
        leftPanelTabFinalHtml += leftPanelTabHtml.replace(/{{iconUrl}}/g, tab.iconUrl)
            .replace(/{{tabName}}/g, tab.name);
    });

    document.getElementById("left-panel-tabs").innerHTML = leftPanelTabFinalHtml;
}

// left panel top banner creation
function createLeftPanelTopBanner() {
    let leftPanelTopBanner = document.getElementById("template-left-panel-top-banner");
    let leftPanelTopBannerHtml = leftPanelTopBanner.innerHTML;
    let leftPanelTopBannerFinalHtml = "";

    leftPanelTopBannerFinalHtml += leftPanelTopBannerHtml.replace(/{{coverPhotoUrl}}/g, dashBoardData.coverPhotoUrl)
        .replace(/{{profilePhotoUrl}}/g, dashBoardData.profilePhotoUrl);

    document.getElementById("left-panel-top-banner").innerHTML = leftPanelTopBannerFinalHtml;
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

    // document.getElementById("recommended-project-panel").innerHTML = recommendedProjectPanelFinalHtml;
}


