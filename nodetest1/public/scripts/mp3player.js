// only one player can play at the same time

$("#music-list").on("click", ".mp3player audio", function(){
    var _this = $(this);
    $("audio").each(function(i,el){
        if(!$(el).is(_this)){
            $(el).get(0).pause();
        }
    });
});

// user can click row to play the music

$("#music-list").on("click", ".musicName", function(){
    var player = $(this).next("audio");
    if(player.get(0).paused){
        // stop other players
        $("audio").each(function(i,el){
            if(!$(el).is(player)){
                $(el).get(0).pause();
            }
        });
        player.get(0).play();
    }else{
        player.get(0).pause();
    }
});