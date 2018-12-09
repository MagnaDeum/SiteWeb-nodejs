// slide effect on menu tabs
$(".tab-name").on({
    mouseenter: function(){
        console.log("testtab")
        $(this).next(".slide-tab").animate({
            opacity: "1",
            right: "0",
            },
            250,
            function(){}
        );
    },
    mouseleave: function(){
        $(this).next(".slide-tab").animate({
            opacity: "0",
            right: "100%",
            },
            250,
            function(){}
        );
    }
});

// slide effect on drop down menu
$("#hobbies").on({
    mouseenter: function(){
        console.log("test")
        $("#hobbies").css("background", "none"); 
        $("#hobbies-menu").css("display", "block");
        $("#hobbies-menu").animate({
            opacity: "1",
            marginLeft: "0",
            },
            400,
            function(){}
        );
    },
    mouseleave: function(){
        $("#hobbies-menu").animate({
            opacity: "0",
            marginLeft: "-20%",
            },
            250,
            function(){ 
                $("#hobbies-menu").css("display", "none"); 
                $("#hobbies").css("background", "rgb(31, 72, 81)"); // has to be the value of $background sass variable
            }
        );
    }
});