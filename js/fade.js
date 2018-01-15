function fadeIn(){

    $(".fadable").fadeIn(500);

}

$(document).ready(function(){
	$("a").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$(".fadable").fadeOut(250);
		setTimeout(function() {window.location = href}, 300);
	});
	
});