function showLeftpanel(){
    if(document.getElementById("left-tab").style.display==""){
        document.getElementById("left-tab").className="col-11 px-0 left-tab";
        document.getElementById("left-tab").style.display="block";
        document.getElementById("left-tab").style.zIndex="10";
        document.getElementById("left-tab").style.height="100%";
    }
    else{
        document.getElementById("left-tab").style.display="";
        document.getElementById("main-div").style.display="block";
    }
    
}

function hidemenu(){
    document.getElementById("left-tab").style.display="";
}

$(window).bind("resize", function () {
    console.log($(this).width())
    if ($(this).width() > 800) {
        $('#left-tab').removeClass('col-11 px-0 left-tab').addClass('col-3 px-0 left-tab')
    } 
    else{
        $('#left-tab').removeClass('col-3 px-0 left-tab').addClass('col-11 px-0 left-tab')
    }
}).trigger('resize');


$(document).ready(function(){
    $(".container").click(function(){
        $('#left-tab').css("display", "");
    });
});





