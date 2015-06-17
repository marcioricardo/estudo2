

/*function stopScroll() {
clearTimeout(scrolldelay);// para o rolar ao tirar o cursor do link
}*/

$(document).ready(function() {
	
	$("#sinc").click(function () {

				
		$('html, body').animate({
			scrollTop: $(".ancora2").offset(),top},2000);

	});

});
