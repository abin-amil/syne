$(document).ready(function () {
    createLeftPanel(2);
    createProfileCompletionSection();
    newsFeedsCreation();
    recommendedOrganisationListPanelCreation();
    adjustStyle();

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
});




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

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

$("#write-post .modalclose").click(function (e) {
    closeModal("#write-post");
    e.preventDefault();
});

postPhotos = [];
Dropzone.options.postMorePhotos = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB,
    addRemoveLinks: true,
    removedfile: function (file) {
        if (postPhotos.length == 1) {
            document.getElementById("postPhotoDefault1").classList.add('d-flex');
        }
        // remove the file from the projectMorePhotos details.
        postPhotos = postPhotos.filter(x => { return x.name !== file.name });
        var _ref;
        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    },
    init: function () {
        this.on("addedfile", function (file) {
            postPhotos[postPhotos.length] = {
                name: file.name,
                data: ""
            };
            var reader = new FileReader();
            reader.onload = function (event) {
                // event.target.result contains base64 encoded image
                postPhotos[postPhotos.length - 1].data = event.target.result;
                document.getElementById("postPhotoDefault1").classList.remove('d-flex');
                document.getElementById("postPhotoDefault1").style.display = "none";
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