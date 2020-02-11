// Constants
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// DataModel
var dashBoardData = {
    name: 'Vinith Gopal',
    mailId: '@vinithgopalofficial',
    profileCompletionPercentage: '80',
    followersCount: '498',
    followingCount: '8',
    coverPhotoUrl: 'img/beautiful-flower-picture-facebook-cover.jpg',
    profilePhotoUrl: 'img/user.png',
    leftPanelTabs: [{
        name: 'Project',
        iconUrl: 'img/project-grey-small.png'
    },
    {
        name: 'Events',
        iconUrl: 'img/events-grey-small.png'
    },
    {
        name: 'Stories',
        iconUrl: 'img/stories-grey-small.png'
    },
    {
        name: 'Organisations',
        iconUrl: 'img/org-grey-small.png'
    },
    {
        name: 'Transactions',
        iconUrl: 'img/transaction-grey-small.png'
    },
    {
        name: 'Settings & Privacy',
        iconUrl: 'img/settings-grey-small.png'
    }
    ],
    newsFeedData: [{
        userImage: 'img/user.png',
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
        userImage: 'img/user.png',
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
    recommendedProject: [{
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
    ],
    whoToFollowList: [
        {
            name: 'Sanne Viscaal',
            email: '@sanneviscaal',
            imageUrl: 'img/user.png',
            followersCount: '13k',
            mutualFollwerName: 'Ginu George',
            mutualFollowersCount: '5'
        },
        {
            name: 'Iruka Akuchi',
            email: '@irukaakuchi',
            imageUrl: 'img/user.png',
            followersCount: '10k',
            mutualFollwerName: 'Ginu George',
            mutualFollowersCount: '7'
        }

    ],
    recommendedOrganisations: [
        {
            name: 'Votonomics Foundation',
            email: '@votonimics',
            imageUrl: 'img/user.png',
            followersCount: '13k',
            mutualFollwerName: 'Ginu George',
            mutualFollowersCount: '5'
        },
        {
            name: 'Syne Foundation',
            email: '@synefoundation',
            imageUrl: 'img/user.png',
            followersCount: '10k',
            mutualFollwerName: 'Ginu George',
            mutualFollowersCount: '7'
        }
    ]
};

var userDetails = {
    userIntroDetails: 'Add a short bio to tell people more about yourself',
    birthDay: '02 Feb 2012',
    location: 'kochi'
};

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
    // $('textarea').emoji();
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
