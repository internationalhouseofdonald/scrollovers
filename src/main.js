import './styles.css';
import './styles.scss';
import video from './components/development/bham.mp4';

$(document).ready(function() {
  $(document).on("scroll", function() {
    var pos_y = window.scrollY;
    console.log(pos_y);
    if (pos_y >= 1) {
      $('.r2').animate({
        opacity: 1,
        top: "0px"
      }, 1000, "easeInOutCubic");
    }
    if (pos_y >= 900) {
      $('.r3').animate({
        opacity: 1,
        top: "0px"
      }, 1000, "easeInOutCubic");
    }
  });
  $('.bkgd-video').src = video;
})

// use jQuery easing to animate scrollovers into place