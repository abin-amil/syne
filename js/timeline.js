$(document).ready(function () {
    setTab(1);
    $(".user-comment-item-div").mouseleave(function () {
        $(this).children()[0].children[1].children[1].style["display"] = "none";
    });

    $(".comment-actions a").click(function () {
        $(this).siblings()[0].style["display"] = "";
    });

    $(".edit-comment-btn").click(function () {
        const elmts = $(this).parent().parent().siblings()[0].children;
        $(elmts[1]).toggleClass('d-none').toggleClass('d-inline');
        $(elmts[2]).toggleClass('d-none').toggleClass('d-flex');
        elmts[2].children[0].value = elmts[1].innerHTML ? elmts[1].innerHTML.trim() : "";
    });

    $("button.save-edit-comment").click(function () {
        const elmts = $(this).parent().parent().children();
        $(elmts[1]).toggleClass('d-none').toggleClass('d-inline');
        $(elmts[2]).toggleClass('d-none').toggleClass('d-flex');
        elmts[1].innerHTML = elmts[2].children[0].value ? elmts[2].children[0].value.trim() : "";
    });

    createHeader(true, true, true, false, true, true);
});

$("#syne-delete-popup .modalclose").click(function (e) {
    closeModal("#syne-delete-popup");
    e.preventDefault();
});

$("#syne-delete-popup .delete-popup-confirm-action").click(function (e) {
    closeModal("#syne-delete-popup");
    e.preventDefault();
});

$("#syne-delete-popup .delete-popup-decline-action").click(function (e) {
    closeModal("#syne-delete-popup");
    e.preventDefault();
});

function closeModal(id) {
    $(id).removeClass("open-pop");
    $("body").removeClass("modal-blur");
}

function sharePopupContentSetting(dataId) {
    if (document.getElementById("syne-share-popup")) {
        let sharePopupTemplateContent = document.getElementById("template-share-popup");
        let sharePopupTemplateContentHtml = sharePopupTemplateContent.innerHTML;
        let sharePopupTemplateContentFinalHtml = "";

        let data = dashBoardData.newsFeedData.filter(x => {
            return x.id == dataId
        });

        sharePopupTemplateContentFinalHtml += sharePopupTemplateContentHtml.replace(/{{name}}/g, data[0].name)
            .replace(/{{email}}/g, data[0].email)
            .replace(/{{postedTimeDuration}}/g, data[0].postedTimeDuration)
            .replace(/{{imageUrl}}/g, data[0].imageUrl)
            .replace(/{{descriptionHeading}}/g, data[0].descriptionHeading)
            .replace(/{{descriptionContent}}/g, data[0].descriptionContent)

        document.getElementById("syne-share-popup").innerHTML = sharePopupTemplateContentFinalHtml;
    }
}