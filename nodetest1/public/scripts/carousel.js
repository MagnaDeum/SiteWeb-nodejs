// carousel-wrapper -> carousel-> div -> img

// keep track of which images are displayed :
var images = [];
var currCenter;

// init state of carousel
function initCarousel(){
    
    currCenter = 0;

    // add to array
    $("#carousel").find("img").each(function(idx, val){
        images.push($(this));
        $(this).addClass("hidden");
    })
    .promise().then(centerImg);
}


// helper function
function centerImg(){
    // set main view
    setViewport();

    // reset state
    $("#carousel").find("img").each(function(idx, val){
        $(this).addClass("hidden");
    });

    translate = $(".img-container").width() * (currCenter-1);
    translate = translate * (-1);
    // shift containers
    $("#carousel").find(".img-container").each(function(idx, val){
        $(this).css("transform", "translate("+translate+"px,0)");
    });

    // set image sizes for left/center/rigth
    if(currCenter > 0){
        images[currCenter-1].removeClass().addClass("left");
    }

    images[currCenter].removeClass().addClass("center");

    if(currCenter < images.length-1){
        images[currCenter+1].removeClass().addClass("right");
    }
}

// helper function
function setViewport(){
    var src = images[currCenter].attr("src");
    var image = $("#viewport img");
    image.animate({opacity : 0}, 50, function(){
        image.attr('src', src);
    });
    image.animate({opacity : 1}, 600);
}


/************************EXECUTABLE JS***********************/

// on click select image
$("#carousel-wrapper").on("click", "#carousel img", function(){
    // do nothing if already centered
    if( ! $(this).hasClass("center")){
        if($(this).hasClass("left")){
            // shift right
            currCenter--;
            centerImg();
        }else{
            // shift left
            currCenter++;
            centerImg();
        }
    }
});

// same for left/right buttons
$("#carousel-wrapper").on("click", "#left-arrow", function(){
    // can't go further left
    if(currCenter > 0){
        currCenter--;
        centerImg();
    }
});
$("#carousel-wrapper").on("click", "#right-arrow", function(){
    // can't go further right
    if(currCenter < images.length-1){
        currCenter++;
        centerImg();
    }
});



// fullscreen viewport
$("#viewport").on("click", "img", function(){
    // do nothing if already centered
    console.log($(this))
    if( ! $(this).hasClass("fullscreen")){
        $(this).removeClass().addClass("fullscreen");
        $("#carousel-wrapper").addClass("fullscreen");
        $("#main-window").addClass("retract");
        $("#sidebar").css("display","none");
    }else{
        $(this).removeClass().addClass("selected");
        $("#carousel-wrapper").removeClass("fullscreen");
        $("#main-window").removeClass("retract");
        $("#sidebar").css("display","block");
    }
});



