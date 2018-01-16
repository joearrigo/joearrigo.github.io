function reSize(){
	var w = $(window).width();
		var h = $(window).height();
		
		if(w < h){
			$(".background").css("height", h);
			$(".background").css("width", h);
		}
		if(h < w){
			$(".background").css("height", w);
			$(".background").css("width", w);
		}
		if(h == w){
			$(".background").css("width", w);
			$(".background").css("height", h);
		}
}

$(document).ready(function(){
	reSize();
});

$(window).resize(function(){
	reSize();
});