function showLeftpanel(){
    if(document.getElementById("left-panel").style.display==""){
        document.getElementById("left-panel").className="col-11 px-0 left-tab";
        document.getElementById("left-panel").style.display="block";
        document.getElementById("left-panel").style.zIndex="10";
        document.getElementById("left-panel").style.height="100%";
    }
    else{
        document.getElementById("left-panel").style.display="";
        document.getElementById("main-div").style.display="block";
    }
    
}

function hidemenu(){
    document.getElementById("left-panel").style.display="";
}

$(window).bind("resize", function () {
    console.log($(this).width())
    if ($(this).width() > 800) {
        $('#left-panel').removeClass('col-11 px-0 left-tab').addClass('col-3 px-0 left-tab')
    } 
    else{
        $('#left-panel').removeClass('col-3 px-0 left-tab').addClass('col-11 px-0 left-tab')
    }
}).trigger('resize');


$(document).ready(function(){
    $(".container").click(function(){
        $('#left-panel').css("display", "");
    });
});





