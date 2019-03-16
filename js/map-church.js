(function($) {

'use strict';

    // CHECK WINDOW RESIZE
    var is_windowresize = false;
    $(window).resize(function(){
        is_windowresize = true;
    });

    //INITIALIZE MAP
    function initialize() {

        //DEFINE MAP OPTIONS
        //=======================================================================================
          var mapOptions = {
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: new google.maps.LatLng(52.478184, 20.556656),
            panControl: true,
              zoomControl: true,
              mapTypeControl: true,
              //scaleControl: false,
              streetViewControl: true,
              overviewMapControl: true,
            //rotateControl:true,
            scrollwheel: false,

          };

        //CREATE NEW MAP
        //=======================================================================================
          var map = new google.maps.Map(document.getElementById('map-canvas-church'), mapOptions);

        //ADD NEW MARKER WITH LABEL
        //=======================================================================================
        var marker1 = new MarkerWithLabel({
               position: new google.maps.LatLng(52.478184, 20.556656),
               draggable: false,
               raiseOnDrag: false,
               map: map,
         });

        //INFO WINDOWS 1
        //=======================================================================================
        var contentString1 = ''+
        '<div class="info-window-wrapper">'+
            '<h6>Kościele</h6>'+
            '<div class="info-window-desc">Kroczewo 12<br />09-142<br />Polska</div>' +
            '<div class="info-window-link"><a href="https://goo.gl/maps/LhsiEJMPJtT2" target="_blank" class="grey-link with-underline">Zobacz w Mapach Google</a></div>'+
          '</div>';

        var marker1_infowindow = new google.maps.InfoWindow({
              content: contentString1,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,-10)
          });

        //OPEN INFO WINDOWS ON LOAD
          marker1_infowindow.open(map, marker1);

        //ON MARKER CLICK EVENTS
        google.maps.event.addListener(marker1, 'click', function() {
            marker1_infowindow.open(map,marker1);
          });


        //ON BOUND EVENTS AND WINDOW RESIZE
        //=======================================================================================
        google.maps.event.addListener(map, 'bounds_changed', function() {
            if (is_windowresize) {
                //map.setCenter(marker.getPosition());
                window.setTimeout(function() {
                      map.panTo(marker1.getPosition());
                }, 500);
            }
            is_windowresize=false;
        });
    }

    // LOAD GMAP
    google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);
