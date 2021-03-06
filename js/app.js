$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		//play hadouken sound
		playHadouken();
		//change to throwing image
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		//animate hadouken to the right
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});

function playHadouken() {
	$('#hadouken-sound') [0].volumne = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}