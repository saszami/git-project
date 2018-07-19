
  $(document).ready(function(){
    /*Модальное окно с формой связи*/
    $('.popup-btn').on('click', function(event) {
      event.preventDefault();
      $('#popup-menu').fadeIn()
      });
    $('.popup-close').on('click', function(event) {
      event.preventDefault();
      $('#popup-menu').fadeOut()
    });
  });


// slider

    $(document).ready(function(){
      $('.feedback-slider').slick({
        dots: true,
        arrows: false
      });
    });

// popup

// google map

    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 29.629270, lng: -96.060123},
          zoom: 15,
          disableDefaultUI: true
        });
      };

