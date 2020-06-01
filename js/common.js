$(document).ready(function () {
    // createHeader(true, true, true, true);
    createHeader(true, true, true, false, true, true);

    createFooter();
    let path = window.location.pathname;
    let page = path.split("/").pop();
    LeftPanelAndTopBannerCreation();
    if (page == 'template.html') {
        createLeftPanel();
    }
    recommendedProjectPanelCreation();
    whoToFollowListPanelCreation();
});

// need to rewrite this function for top banner creation only, after left panel changes are done.
function LeftPanelAndTopBannerCreation(type) {
    $("#includedLeftPanelContent").load('templates/leftPanel.html', function () {
        createTopBanner();
        // createLeftPanelTopBanner();
        // createLeftPanelUserDetails();
        // createLeftPanelTabs();
    });
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
        if (document.getElementById("left-panel-user-details")) {
            document.getElementById("left-panel-user-details").innerHTML = leftPanelFinalHtml;
        }
    }
}

// left panel top banner creation
function createLeftPanelTopBanner() {
    if (document.getElementById("template-left-panel-top-banner")) {
        let leftPanelTopBanner = document.getElementById("template-left-panel-top-banner");
        let leftPanelTopBannerHtml = leftPanelTopBanner.innerHTML;
        let leftPanelTopBannerFinalHtml = "";

        leftPanelTopBannerFinalHtml += leftPanelTopBannerHtml.replace(/{{coverPhotoUrl}}/g, dashBoardData.coverPhotoUrl);
        if (document.getElementById("left-panel-top-banner")) {
            document.getElementById("left-panel-top-banner").innerHTML = leftPanelTopBannerFinalHtml;
        }

    }
}

function createTopBanner() {
    if (document.getElementById("template-top-banner")) {
        let TopBanner = document.getElementById("template-top-banner");
        let TopBannerHtml = TopBanner.innerHTML;
        let TopBannerFinalHtml = "";

        TopBannerFinalHtml += TopBannerHtml.replace(/{{coverPhotoUrl}}/g, dashBoardData.coverPhotoUrl);
        if (document.getElementById("top-banner")) {
            document.getElementById("top-banner").innerHTML = TopBannerFinalHtml;
        }

    }
}

function createLeftPanelTabs() {
    if (document.getElementById("template-left-panel-tab-details")) {
        let leftpanelTab = document.getElementById("template-left-panel-tab-details");
        let leftPanelTabHtml = leftpanelTab.innerHTML;
        let leftPanelTabFinalHtml = "";
        let leftPanelTabsData;
        let path = window.location.pathname;
        let page = path.split("/").pop();
        switch (page) {
            case 'organisation-timeline.html':
            case 'about-organisation.html':
                leftPanelTabsData = organisationDashboadData.leftPanelTabs;
                break;
            case 'post-login.html':
                leftPanelTabsData = postLoginSpecificlLeftPanelTabs;
                break;
            default:
                leftPanelTabsData = dashBoardData.leftPanelTabs;
                break;
        }
        leftPanelTabsData.forEach((tab, index) => {
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
            if (document.getElementById("header")) {
                document.getElementById("header").innerHTML = headerFinalHtml;
            }
        }

        $("#login-link").click(function (e) {
            document.getElementById("login-link").style.display = "none";
            document.getElementById("user-link").style.display = "block";
        });
    });

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

function createFooter() {
    $("#footer").load("templates/footer.html");
}

function createLeftPanel(type) {
    let template;
    switch (type) {
        case 1:
            template = 'templates/leftPanelTypeOne.html';
            break;
        case 2:
            template = 'templates/leftPanelTypeTwo.html';
            break;
        case 3:
            template = 'templates/leftPanelTypeThree.html';
            break;
        case 4:
            template = 'templates/leftPanelTypeFour.html';
            break;
        case 5:
            template = 'templates/leftPanelTypeFive.html';
            break;
        case 6:
            template = 'templates/leftPanelTypeSix.html';
            break;
        default:
            template = 'templates/leftPanelTypeOne.html';
            break;
    }
    $("#left-panel").load(template, function () {
        let path = window.location.pathname;
        let page = path.split("/").pop();
        switch (page) {
            case 'timeline.html':
            case 'organisation-timeline.html':
                setTab(1);
                break;
            case 'about-me.html':
                setTab(2);
                break;
            case 'my-projects.html':
                setTab(3);
                break;
            case 'events.html':
                setTab(4);
                break;
            case 'stories.html':
                setTab(5);
                break;
            case 'organisation.html':
                setTab(6);
                break;
            case 'transactions.html':
                setTab(7);
                break;
            case 'settings-privacy.html':
                setTab(8);
                break;
            case 'savedpost.html':
                setTab(9);
                break;
            default:
                setTab(1);
                break;
        }

        $(".modal-btn").click(function (e) {
            var modl_id = $(this).attr('data-target');
            $("#" + modl_id).addClass("open-pop");
            $("body").addClass("modal-blur");
            e.preventDefault();
        });
    });
}

// write post popup functinalities
$("#postBtn").click(function (e) {
    let node = document.getElementById("news-feeds");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    dashBoardData.newsFeedData.unshift(dashBoardData.newsFeedData[1])
    newsFeedsCreation();
    closeModal("#write-post");
    e.preventDefault();
});
$("#write-post .modalclose").click(function (e) {
    $("#write-post").removeClass("open-pop");
    $("body").removeClass("modal-blur");
    e.preventDefault();
});

// common popups close functinalities 
$("#syne-followers .modalclose").click(function (e) {
    closeModal("#syne-followers");
    e.preventDefault();
});

$("#syne-edit-profile .modalclose").click(function (e) {
    closeModal("#syne-edit-profile");
    e.preventDefault();
});

function likeBtnClick(id) {
    let likeId = "#like" + id;
    if ($(likeId).hasClass("hrt-chck")) {
        $(likeId).removeClass("hrt-chck");
    } else {
        $(likeId).addClass("hrt-chck");
    }

}