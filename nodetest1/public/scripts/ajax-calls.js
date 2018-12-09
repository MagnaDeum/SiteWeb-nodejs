// get the home page
$("#about").click(function(){
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