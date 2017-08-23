import './styles.css';
import './styles.scss';

$(document).ready(function() {
  $(document).on("scroll", function() {
    var pos_y = window.scrollY;
    console.log(pos_y);
    if (pos_y >= 600) {
      $('.r2').animate({
        opacity: 1,
        top: "0px"
      }, 1000, "easeInOutCubic");
    }
    if (pos_y >= 1400) {
      $('.r3').animate({
        opacity: 1,
        top: "0px"
      }, 1000, "easeInOutCubic");
    }
  });
})

// use jQuery easing to animate scrollovers into place