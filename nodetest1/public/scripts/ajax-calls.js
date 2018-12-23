// get the about page
$("#about-tab").click(function(){
    $.ajax({
        type: 'GET',
        url: "/about",
        success: function(data){
                    $('#main-window').html(data);
                    $('#main-window').css("opacity", "0");
                    $('#main-window').css("margin-top", "1%");
                    $('#main-window').animate({marginTop:"-=1%", opacity:"1"},400);
                    },
        dataType: 'html'
    });
});

// get the articles page
$("#articles-tab").click(function(){
    $.ajax({
        type: 'GET',
        url: "/articles",
        success: function(data){
                    $('#main-window').html(data);
                    $('#main-window').css("opacity", "0");
                    $('#main-window').css("margin-top", "1%");
                    $('#main-window').animate({marginTop:"-=1%", opacity:"1"},400);
                    },
        dataType: 'html'
    });
});

// get the music page
$("#music-tab").click(function(){
    $.ajax({
        type: 'GET',
        url: "/music",
        success: function(data){
                    $('#main-window').html(data);
                    $('#main-window').css("opacity", "0");
                    $('#main-window').css("margin-top", "1%");
                    $('#main-window').animate({marginTop:"-=1%", opacity:"1"},400);

                    // fill the music list
                    mp3Names = mp3Names.split(",");
                    for(i=0; i<mp3Names.length; i++){
                        $("#music-list").append(
                            $('<li>').append(
                                $('<div>').addClass("mp3player")
                                .append(
                                    $('<div>').addClass("musicName").append(
                                        mp3Names[i].split(".")[0]
                                    )
                                )
                                .append(
                                    $('<audio>').attr("controls", "controls").attr("preload", "none").append(
                                        $('<source>').attr("src","../resources/mp3/"+mp3Names[i]).attr("type", "audio/mp3")
                                    )
                                )
                            )
                        );
                    }
                    
                    // remove the variable holding the names from the html
                    $("#music-list script").remove();
                },
        dataType: 'html'
    });
});


// get the art page
$("#art-tab").click(function(){
    $.ajax({
        type: 'GET',
        url: "/art",
        success: function(data){
                    $('#main-window').html(data);
                    $('#main-window').css("opacity", "0");
                    $('#main-window').css("margin-top", "1%");
                    $('#main-window').animate({marginTop:"-=1%", opacity:"1"},400);
                    // fill the music list
                    jpgNames = jpgNames.split(",");
                    for(i=0; i<jpgNames.length; i++){
                        $("#carousel-data").append(
                            $('<li>').append(
                                $('<img>').attr("src","../resources/jpg/"+jpgNames[i])
                            )
                        );
                    }
                    
                    // remove the variable holding the names from the html
                    $(".carousel-wrapper script").remove();
                },
        dataType: 'html'
    });
});

