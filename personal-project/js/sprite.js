$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(parseInt(key.which,10)) {
			// W
			case 87:
				$('.mario').animate({top: "-=30px"}, 1);
				break;
			// S
			case 83:
				$('.mario').animate({top: "+=30px"}, 1);
				break;
			// A
			case 65:
				$('.mario').animate({left: "-=30px"}, 1);
				break;
			// D
			case 68:
				$('.mario').animate({left: "+=30px"}, 1);
				break;
			//spacebar
			case 32:
				$('.mario').animate({top: "-=70px"}, "fast");
				$('.mario').animate({top: "+=70px"}, "fast");
				break;
			}
	});
});