$(document).ready(function () {
    createOrgLeftPanelTabs();
    setTab(2);

    $(".modal-btn").click(function (e) {
        var modl_id = $(this).attr('data-target');
        $("#" + modl_id).addClass("open-pop");
        $("body").addClass("modal-blur");
        e.preventDefault();
    });
});

function createOrgLeftPanelTabs() {
    if (document.getElementById("template-left-panel-tab-details")) {
        let leftpanelTab = document.getElementById("template-left-panel-tab-details");
        let leftPanelTabHtml = leftpanelTab.innerHTML;
        let leftPanelTabFinalHtml = "";
        organisationDashboadData.leftPanelTabs.forEach((tab, index) => {
            leftPanelTabFinalHtml += leftPanelTabHtml.replace(/{{iconUrl}}/g, tab.iconUrl)
                .replace(/{{tabName}}/g, tab.name)
                .replace(/{{path}}/g, tab.path)
                .replace(/{{id}}/g, tab.id);
        });
        document.getElementById("org-left-panel-tabs").innerHTML = leftPanelTabFinalHtml;
    }
}

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}
function closeModals(id1,id2) {
    $(id1).removeClass("open-pop");
    $(id2).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

$("#edit-oganisation-popup .modalclose").click(function (e) {
    closeModal("#edit-oganisation-popup");
    e.preventDefault();
});

function publishOrganisation() {
    closeModal("#edit-oganisation-popup");
}