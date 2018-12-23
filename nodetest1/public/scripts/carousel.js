// carousel-wrapper -> carousel-> div -> img

// keep track of which images are displayed :
var images = [];
var currCenter;

// init state of carousel
function initCarousel(){
    
    // add to array
    $("#carousel").find("img").each(function(idx, val){
        images.push($(this));
        $(this).addClass("hidden");
    });

    // init first 3 images and hide the rest
    currCenter = 0;
    centerImg(currCenter);

    // set viewport
    setViewport(currCenter);
}


// on click select image
$("#carousel-wrapper").on("click", "#carousel img", function(){
    // do nothing if already centered
    if( ! $(this).hasClass("center")){
        if($(this).hasClass("left")){
            // shift right
            currCenter--;
            centerImg(currCenter);
        }else{
            // shift left
            currCenter++;
            centerImg(currCenter);
        }
    }
});


// helper function
function centerImg(idx){
    $("#carousel").find("img").each(function(idx, val){
        $(this).addClass("hidden");
    });

    if(idx > 0){
        images[idx-1].removeClass().addClass("left");
    }

    images[idx].removeClass().addClass("center");
    setViewport(idx);

    if(idx < images.length-1){
        images[idx+1].removeClass().addClass("right");
    }
}

// helper function
function setViewport(idx){
    var src = images[idx].attr("src");
    $("#viewport img").attr("src", src);
}