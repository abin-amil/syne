$(document).ready(function () {
    createHeader(true, true, true, true);
    LeftPanelCreation();
    recommendedProjectPanelCreation();
    whoToFollowListPanelCreation();
});

function LeftPanelCreation() {
    createLeftPanelTopBanner();
    createLeftPanelUserDetails();
    createLeftPanelTabs();
}

// left panel user details creation
function createLeftPanelUserDetails() {
    if (document.getElementById("template-left-panel-user-details")) {
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
}

// left panel top banner creation
function createLeftPanelTopBanner() {
    if (document.getElementById("template-left-panel-top-banner")) {
        let leftPanelTopBanner = document.getElementById("template-left-panel-top-banner");
        let leftPanelTopBannerHtml = leftPanelTopBanner.innerHTML;
        let leftPanelTopBannerFinalHtml = "";

        leftPanelTopBannerFinalHtml += leftPanelTopBannerHtml.replace(/{{coverPhotoUrl}}/g, dashBoardData.coverPhotoUrl)
            .replace(/{{profilePhotoUrl}}/g, dashBoardData.profilePhotoUrl);

        document.getElementById("left-panel-top-banner").innerHTML = leftPanelTopBannerFinalHtml;
    }
}

function createLeftPanelTabs() {
    if (document.getElementById("template-left-panel-tab-details")) {
        let leftpanelTab = document.getElementById("template-left-panel-tab-details");
        let leftPanelTabHtml = leftpanelTab.innerHTML;
        let leftPanelTabFinalHtml = "";
        dashBoardData.leftPanelTabs.forEach((tab, index) => {
            leftPanelTabFinalHtml += leftPanelTabHtml.replace(/{{iconUrl}}/g, tab.iconUrl)
                .replace(/{{tabName}}/g, tab.name)
                .replace(/{{path}}/g, tab.path)
                .replace(/{{id}}/g, tab.id);
        });

        if (document.getElementById("left-panel-tabs")) {
            document.getElementById("left-panel-tabs").innerHTML = leftPanelTabFinalHtml;
        }
    }
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

function setTab(tabId) {
    $('.menu-items a.active').toggleClass('active');
    const id = '#syne-tab' + tabId;
    $(id).addClass('active');
}


function addMilestone() {
    document.getElementById("new-milestone").style.display = "block";
}

function createHeader(isStartPojectBtnAvailable = false,
    isExplorePojectBtnAvailable = false,
    isSearchAreaAvailable = false,
    isLoginBtnAvailable = false,
    isMsgIconAvailable = false,
    isNotifyIconAvailable = false) {

    $("#includedHeaderContent").load("templates/header.html", function () {
        if (document.getElementById("template-header")) {
            let header = document.getElementById("template-header");
            let headerHtml = header.innerHTML;
            let headerFinalHtml = headerHtml;
            if (isStartPojectBtnAvailable) {
                headerFinalHtml = headerFinalHtml.replace(/{{startProjectBtn}}/g, "block")
            } else {
                headerFinalHtml = headerFinalHtml.replace(/{{startProjectBtn}}/g, "none")
            }

            if (isExplorePojectBtnAvailable) {
                headerFinalHtml = headerFinalHtml.replace(/{{exploreProjectBtn}}/g, "block")
            } else {
                headerFinalHtml = headerFinalHtml.replace(/{{exploreProjectBtn}}/g, "none")
            }

            if (isSearchAreaAvailable) {
                headerFinalHtml = headerFinalHtml.replace(/{{seachArea}}/g, "block")
            } else {
                headerFinalHtml = headerFinalHtml.replace(/{{seachArea}}/g, "none !important")
            }

            if (isMsgIconAvailable) {
                headerFinalHtml = headerFinalHtml.replace(/{{msgIcon}}/g, "block")
            } else {
                headerFinalHtml = headerFinalHtml.replace(/{{msgIcon}}/g, "none !important")
            }

            if (isNotifyIconAvailable) {
                headerFinalHtml = headerFinalHtml.replace(/{{notifyIcon}}/g, "block")
            } else {
                headerFinalHtml = headerFinalHtml.replace(/{{notifyIcon}}/g, "none !important")
            }

            if (isLoginBtnAvailable) {
                headerFinalHtml = headerFinalHtml.replace(/{{LoginBtn}}/g, "block")
                headerFinalHtml = headerFinalHtml.replace(/{{LoggedInUser}}/g, "none !important")
            } else {
                headerFinalHtml = headerFinalHtml.replace(/{{LoggedInUser}}/g, "block")
                headerFinalHtml = headerFinalHtml.replace(/{{LoginBtn}}/g, "none")
            }
            document.getElementById("header").innerHTML = headerFinalHtml;
        }

        $("#login-link").click(function (e) {
            document.getElementById("login-link").style.display = "none";
            document.getElementById("user-link").style.display = "block";
        });
    });

}