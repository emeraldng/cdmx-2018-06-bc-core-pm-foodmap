        // /* Google Map inside of tab */
        // function initTabMap() {
        //     // Google Map Options
        //     var mapOptions1 = {
        //       // How zoomed in you want the map to start at (always required)
        //       zoom: 10,
  
        //       // The latitude and longitude to center the map (always required)
        //       center: new google.maps.LatLng(41.82399, -71.41283), // Providence, RI
  
        //       // Map Styling
        //       styles: [{
        //         "featureType": "administrative.country",
        //         "elementType": "geometry",
        //         "stylers": [{
        //           "visibility": "simplified"
        //         }, {
        //           "hue": "#ff0000"
        //         }]
        //       }]
        //     };
  
        //     // Get the HTML DOM element that will contain your map
        //     //  div id="map_2"
        //     var mapElement1 = document.getElementById('map_1');
  
        //     // Create the Google Map using our element and options defined above
        //     var map1 = new google.maps.Map(mapElement1, mapOptions1); /* Tab Map */
  
        //     /* Providence Marker */
        //     var marker1 = new google.maps.Marker({
        //       position: new google.maps.LatLng(41.82399, -71.41283),
        //       map: map1,
        //       title: 'Somewhere around here!'
        //     });
  
        //   }
  
        //   /* Google Map outside of tabs */
        //   function init() {
        //     // Google Map Options
        //     var mapOptions = {
        //       // How zoomed in you want the map to start at (always required)
        //       zoom: 10,
  
        //       // The latitude and longitude to center the map (always required)
        //       center: new google.maps.LatLng(41.82399, -71.41283), // New York
  
        //       // How you would like to style the map.
        //       // This is where you would paste any style found on Snazzy Maps.
        //       styles: [{
        //         "featureType": "administrative.country",
        //         "elementType": "geometry",
        //         "stylers": [{
        //           "visibility": "simplified"
        //         }, {
        //           "hue": "#ff0000"
        //         }]
        //       }]
        //     };
  
        //     // Get the HTML DOM element that will contain your map
        //     // div id="map" 
        //     var mapElement2 = document.getElementById('map_2');
  
        //     // Create the Google Map using our element and options defined above
        //     var map = new google.maps.Map(mapElement2, mapOptions);
  
        //     /* Providence Marker */
        //     var marker1 = new google.maps.Marker({
        //       position: new google.maps.LatLng(41.82399, -71.41283),
        //       map: map,
        //       title: 'Somewhere around here!'
        //     });
  
        //   }
  
        //   function waitForMap() {
        //     setTimeout(function() {
        //       if ($('#google-map-tab').is(':visible')) {
        //         initTabMap();
        //       } else {
        //         waitForMap();
        //       }
        //     }, 100);
        //   }
  
        //   waitForMap(); // Intialize google map inside tab
  
        //   // When the window has finished loading create our google map below
        //   google.maps.event.addDomListener(window, 'load', init);
        //   //google.maps.event.addDomListener(window, 'load', initTabMap);