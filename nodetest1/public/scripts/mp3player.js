
// jquery audio event listener patching

jQuery.createEventCapturing = (function () {
    var special = jQuery.event.special;
    return function (names) {
        if (!document.addEventListener) {
            return;
        }
        if (typeof names == 'string') {
            names = [names];
        }
        jQuery.each(names, function (i, name) {
            var handler = function (e) {
                e = jQuery.event.fix(e);

                return jQuery.event.dispatch.call(this, e);
            };
            special[name] = special[name] || {};
            if (special[name].setup || special[name].teardown) {
                return;
            }
            jQuery.extend(special[name], {
                setup: function () {
                    this.addEventListener(name, handler, true);
                },
                teardown: function () {
                    this.removeEventListener(name, handler, true);
                }
            });
        });
    };
})();

jQuery.createEventCapturing(['play']);  


// only one player can play at the same time

$("#music-list").on("play", ".mp3player audio", function(){
    var _this = $(this);
    $("audio").each(function(i,el){
        if(!$(el).is(_this)){
            $(el).get(0).pause();
        }
    });
});

// user can click row to play the music

$("#music-list").on("click", ".mp3player", function(){
    var player = $(this).children("audio");
    if(player.get(0).paused){
        player.get(0).play();
    }else{
        player.get(0).pause();
    }
});