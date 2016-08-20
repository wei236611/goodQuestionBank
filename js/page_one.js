$(document).ready(function() {
	$('.icon-left').fadeIn(2000);
	$('.icon-person, .star, .bottom-line').fadeIn(4000);
	var index = 1;
	$('.icon-right').click(function() {
		if (index == 1) {
			$(".music_3").show();
			$('.icon-right img:nth-child(1)').removeClass('music_2_change');
			index = 0;
			document.getElementById("aud").pause();
		} else {
			$(".music_3").hide();
			$('.icon-right img:nth-child(1)').addClass('music_2_change');
			index = 1;
			document.getElementById("aud").play();
		}		
	});
});