$(document).ready(function() {

  var slider_index = 0;
  var img = $(".minimal-slider__box > img");
  var slider_container = $(".minimal-slider__container");
  var slider_count = $(".minimal-slider__box > img").length;

  slider_container.width(img.width());

  function minimalSlider(new_slider_index) {
    if (new_slider_index < 0 || new_slider_index > (slider_count - 1)) return;
    slider_index = new_slider_index;
    $(".minimal-slider__box").animate({
      "margin-left": (-100) * slider_index + "%"
    }, 500)
  }

  $(".minimal-slider__nav--prev").on("click", function() {
    minimalSlider(slider_index - 1);
  })

  $(".minimal-slider__nav--next").on("click", function() {
    minimalSlider(slider_index + 1);
  })

});