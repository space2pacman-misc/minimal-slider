$(document).ready(function() {
	var block = $(".minimal-slider__block");
	var box = $(".minimal-slider__box");
	var img = $(".minimal-slider__box img");
	var slide_count = box.children().length;
	var slide_width = 100.0 / slide_count;
	var slide_index = 0;
	
	block.width(img.width());
	
	$(".minimal-slider__nav--prev").on("click", function() {
		slide(slide_index - 1);
	});
	
	$(".minimal-slider__nav--next").on("click", function() {
		slide(slide_index + 1);
	});
	
	function slide(new_slide_index) {
		if(new_slide_index < 0 || new_slide_index >= slide_count) return;
		
		var margin_left = (new_slide_index * (-100)) + "%";
		
		box.animate({"margin-left": margin_left}, 400, function() {
			slide_index = new_slide_index;
		});
	}
});


