$(document).ready(function () {
    newsFeedsCreation();
});

function newsFeedsCreation() {
    if (document.getElementById("news-feeds")) {
        let newsFeed = document.getElementById("template-news-feed");
        let newsFeedFinalHtml = "";

        myProjectDasboardData.newsFeedData.forEach((newsFeedSingleUnit, index) => {
            let newsFeedCardHtml = newsFeed.innerHTML;
            let newsFeedCardFinalHtml = "";
            let isTargetAmountDisplay = newsFeedSingleUnit.targetAmount !== '' ? 'block' : 'none';
            let isprogressBarVisible = newsFeedSingleUnit.targetAmount !== '' ? 'block' : 'none';
            let isRaisedAmountDisplay = newsFeedSingleUnit.raisedAmount !== '' ? 'block' : 'none';
            let showContibutors = newsFeedSingleUnit.contributorsCount !== '' ? 'block' : 'none';
            let showPercentage = newsFeedSingleUnit.completionPercentage !== '' ? 'block' : 'none';
            let isLikeByMe = newsFeedSingleUnit.isLikedByMe === 'true' ? 'contents' : 'none';
            let progessBarWidth = 80;
            newsFeedCardFinalHtml += newsFeedCardHtml.replace(/{{name}}/g, newsFeedSingleUnit.name)
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
}