$(document).ready(function () {
    createOrgLeftPanelTabs();
    setTab(2);
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

$("#edit-oganisation-popup .modalclose").click(function (e) {
    closeModal("#edit-oganisation-popup");
    e.preventDefault();
});

function publishOrganisation() {
    closeModal("#edit-oganisation-popup");
}