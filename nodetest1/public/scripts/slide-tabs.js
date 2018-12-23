

// slide effect on menu tabs
$(".tab-name").on({
    mouseenter: function(){
        $(this).next(".slide-tab").stop().animate({
            opacity: "1",
            right: "0",
            },
            200,
            function(){}
        );
    },
    mouseleave: function(){
        $(this).next(".slide-tab").stop().animate({
            opacity: "0",
            right: "100%",
            },
            100,
            function(){}
        );
    }
});

// slide effect on drop down menu
$("#hobbies").on({
    mouseenter: function(){
        $("#hobbies").css("background", "none");
        $("#hobbies-menu").css("display", "block");
        $("#hobbies-menu").stop().animate({
            opacity: "1",
            marginLeft: "0",
            },
            400,
            function(){}
        );
    },
    mouseleave: function(){
        $("#hobbies-menu").stop().animate({
            opacity: "0",
            marginLeft: "-20%",
            },
            100,
            function(){ 
                $("#hobbies-menu").css("display", "none"); 
                $("#hobbies").css("background", "#644e5b"); // has to be the value of $background sass variable
            }
        );
    }
});

$("#hobbies").on({
    mouseover: function(){
        $("#hobbies .tab-name").first().next(".slide-tab").stop().css("opacity","1");
        $("#hobbies .tab-name").first().next(".slide-tab").stop().css("right","0");
    },
    mouseout: function(){
        $("#hobbies .tab-name").first().next(".slide-tab").stop().animate({
            opacity: "0",
            right: "100%",
            },
            100,
            function(){}
        );
    }
});

