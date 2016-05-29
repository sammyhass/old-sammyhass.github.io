function fullscreen(){
        $('£container-cont').css({
            width: $(window).width(),
            height: $(window).height()
        });
 }
  
 fullscreen();
 $(window).resize(function() {
       fullscreen();         
 });

var feed = new Instafeed({
	get: "user",
	sortBy: "most-liked",
	userId: "1075844635",
	accessToken: "1075844635.1677ed0.54456144df284b1aaa6d2d33f55e4ce4",
	after: function () {
		$("#instafeed a").attr("target", "_blank")
	}
});

feed.run();

$("#container-cont").fullpage();
