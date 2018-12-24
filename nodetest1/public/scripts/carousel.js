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


// helper function
function centerImg(){

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

    // set main view
    setViewport();
}

// helper function
function setViewport(){
    var src = images[currCenter].attr("src");
    var image = $("#viewport img");
    image.fadeOut('fast', function () {
        image.attr('src', src);
        image.fadeIn('fast');
    });
}





