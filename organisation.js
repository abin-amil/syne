$(document).ready(function () {
    LeftPanelCreation();
    recommendedProjectPanelCreation();
    whoToFollowListPanelCreation();
    recommendedOrganisationListPanelCreation();
});

var projectDetails = {};
Dropzone.options.orgLogo = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB,
    addRemoveLinks: true,
    maxFiles: 1,
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    removedfile: function (file) {
        document.getElementById("projectIconDefault").classList.add('d-flex');
        var _ref;
        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    },
    init: function () {
        this.on("addedfile", function (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                // event.target.result contains base64 encoded image
                projectDetails.projectIcon = event.target.result;
                document.getElementById("projectIconDefault").classList.remove('d-flex');
                document.getElementById("projectIconDefault").style.display = "none";
                document.getElementsByClassName("dz-preview")[0].classList.add("top-padding")
            };
            reader.readAsDataURL(file);
        });

        this.on('error', function (file, errorMessage) {
            if (file.accepted) {
                var mypreview = document.getElementsByClassName('dz-error');
                mypreview = mypreview[mypreview.length - 1];
                mypreview.classList.toggle('dz-error');
                mypreview.classList.toggle('dz-success');
            }
        });
    }
};

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

    leftPanelFinalHtml += leftPanelHtml.replace(/{{name}}/g, organisationDashBoardData.name)
        .replace(/{{mailId}}/g, organisationDashBoardData.mailId)
        .replace(/{{followersCount}}/g, organisationDashBoardData.followersCount)
        .replace(/{{followingCount}}/g, organisationDashBoardData.followingCount)
        .replace(/{{introDetails}}/g, organisationDashBoardData.introDetails)
        .replace(/{{location}}/g, organisationDashBoardData.location);

    document.getElementById("left-panel-user-details").innerHTML = leftPanelFinalHtml;
}

// left panel tabs creation
function createLeftPanelTabs() {
    if (document.getElementById("template-left-panel-tab-details")) {
        let leftpanelTab = document.getElementById("template-left-panel-tab-details");
        let leftPanelTabHtml = leftpanelTab.innerHTML;
        let leftPanelTabFinalHtml = "";
        organisationDashBoardData.leftPanelTabs.forEach((tab, index) => {
            leftPanelTabFinalHtml += leftPanelTabHtml.replace(/{{iconUrl}}/g, tab.iconUrl)
                .replace(/{{tabName}}/g, tab.name)
                .replace(/{{path}}/g, tab.path);
        });

        document.getElementById("left-panel-tabs").innerHTML = leftPanelTabFinalHtml;
    }
}

// left panel top banner creation
function createLeftPanelTopBanner() {
    let leftPanelTopBanner = document.getElementById("template-left-panel-top-banner");
    let leftPanelTopBannerHtml = leftPanelTopBanner.innerHTML;
    let leftPanelTopBannerFinalHtml = "";

    leftPanelTopBannerFinalHtml += leftPanelTopBannerHtml.replace(/{{coverPhotoUrl}}/g, organisationDashBoardData.coverPhotoUrl)
        .replace(/{{profilePhotoUrl}}/g, organisationDashBoardData.profilePhotoUrl);

    if (document.getElementById("left-panel-top-banner")) {
        document.getElementById("left-panel-top-banner").innerHTML = leftPanelTopBannerFinalHtml;
    }
}

// right panel recommended project section creation
function recommendedProjectPanelCreation() {
    let recommendedProjectPanel = document.getElementById("template-recommended-project");
    let recommendedProjectPanelHtml = recommendedProjectPanel.innerHTML;
    let recommendedProjectPanelFinalHtml = "";
    organisationDashBoardData.recommendedProject.forEach((recommendedProject, index) => {
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

function createOrganisation() {
    document.getElementById('createOrgEmptyState').style.display = "none";
    document.getElementById('publishOrganisationPage').style.display = "block";
}

function publishOrganisation() {
    document.getElementById('publishOrganisationPage').style.display = "none";
    document.getElementById('OrgLandingPage').style.display = "block";
}