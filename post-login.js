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
    recommendedProject: [],
    newsFeedData: []
};

$(document).ready(function () {
    LeftPanelCreation();
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


