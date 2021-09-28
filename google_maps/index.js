


let map;

function initMap() {

  var options = {
    center: { lat: 45.8320, lng: -97.2625 },
    zoom: 12,
    mapTypeId: 'hybrid'
  }

  map = new google.maps.Map(document.getElementById("map"),options)


  google.maps.event.addListener(map, "mouseover", (event) => {
  	addMarker
  })




    //Marker
/*
    const marker = new google.maps.Marker({
    position:{lat: 37.9922, lng: -1.1307},
    map:map,
    icon:"https://img.icons8.com/nolan/2x/marker.png"
    });

    //InfoWindow

    const detailWindow = new google.maps.InfoWindow({
        content: `<h2>Murcia City</h2>`
    });

    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
    })
    */

    //Add Markers to Array

    let MarkerArray = [ {
    	location:{lat: 45.8320, lng: -97.2625}, 
        content: `<h2>The Ranch</h2>`},

        {
        	location:{lat: 45.8045, lng: -97.2583},
        	content: '<h2>Rocky 40</h2>'}



    ]

    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);

    }

    // Add Marker

    function addMarker(property){

        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            //icon: property.imageIcon
            });

            // Check for custom Icon

            if(property.imageIcon){
                // set image icon
                marker.setIcon(property.imageIcon)
            }

            if(property.content){

            const detailWindow = new google.maps.InfoWindow({
            content: property.content
    });
    
    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);

    })
}

         



    }

    



}