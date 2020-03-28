$(document).ready(function () {
    setTab(6);
    createOrganisationList();
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

function publishOrganisation() {
    let orgRegFormValues = {};
    $.each($('#orgRegForm').serializeArray(), function (i, field) {
        orgRegFormValues[field.name] = field.value;
    });
    let newOrg = {
        organisationName: orgRegFormValues.orgName ? orgRegFormValues.orgName : 'Second Org Name',
        publishedDate: '24th Nov 2019',
        organisationLogo: 'img/logo-2.png',
        organisationUrl: orgRegFormValues.orgUrl ? orgRegFormValues.orgUrl : 'second-org-long-url'
    };
    organisationListData.push(newOrg);
    createOrganisationList();
    document.getElementById('OrgLandingPage').style.display = "block";
    closeModal("#create-oganisation-popup");
}

function createOrganisationList() {
    let organisationList = document.getElementById("template-organisation-list");
    let organisationListHtml = organisationList.innerHTML;
    let organisationListFinalHtml = "";
    organisationListData.forEach((organisation, index) => {
        organisationListFinalHtml += organisationListHtml.replace(/{{organisationName}}/g, organisation.organisationName)
            .replace(/{{publishedDate}}/g, organisation.publishedDate)
            .replace(/{{organisationLogo}}/g, organisation.organisationLogo)
            .replace(/{{organisationUrl}}/g, organisation.organisationUrl)
    });

    if (document.getElementById("organisation-list-panel")) {
        document.getElementById("organisation-list-panel").innerHTML = organisationListFinalHtml;
    }

}