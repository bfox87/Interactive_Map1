// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


// Adding a layer group for each year. No crashes in 1963.

let sixtyTwo = new L.LayerGroup();
let sixtyFour = new L.LayerGroup();
let sixtyFive = new L.LayerGroup();
let sixtySix = new L.LayerGroup();
let sixtySeven = new L.LayerGroup();
let sixtyEight = new L.layerGroup();
let sixtyNine = new L.layerGroup();
let seventy = new L.layerGroup();
let seventyOne = new L.layerGroup();
let seventyTwo = new L.layerGroup();
let seventyThree = new L.layerGroup();

// 2. Adding overlays.
let overlays = {
  "1962": sixtyTwo,
  "1964": sixtyFour,
  "1965": sixtyFive,
  "1966": sixtySix,
  "1967": sixtySeven,
  "1968": sixtyEight,
  "1969": sixtyNine,
  "1970": seventy,
  "1971": seventyOne,
  "1972": seventyTwo,
  "1973": seventyThree
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [15.35, 105.083],
	zoom: 6.25,
	layers: [light]
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Light": light,
  "Dark": dark
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the location GeoJSON data.
d3.json("Visualizations/Data/map.geojson").then(function(data) {

  // Left this in because wasn't working when deleted but commented out parts not needed for markers, just circleMarkers
  // We passed the magnitude of the earthquake into two separate functions
  // to calculate the color and radius (I was to delete the radius one).
  function styleInfo(feature) {
    return {
      //opacity: 1,
      //fillOpacity: 1,
      //fillColor: getColor(feature.properties.Pilot_Status),
      //color: "#000000",
      //radius: getRadius(feature.properties.Pilot),
      //stroke: true,
      //weight: 0.5
    };
  }

  // Creating custom icons for the markers (would all be the default blue, large size without this).
  var kiaMarker = new L.Icon({
	iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
	iconSize: [10, 15]
  }); 
 
  var surviveMarker = new L.Icon({
	iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
	iconSize: [10, 15]
  });
 
 
 // Creating a GeoJSON layer with the retrieved data for 1962.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1962") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1962") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(sixtyTwo);
 // Add 1962 crash layer to our map.
 sixtyTwo.addTo(map);


// Creating a GeoJSON layer with the retrieved data for 1964.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1964") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1964") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(sixtyFour);
 // Add 1964 crash layer to our map.
 sixtyFour.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1965.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1965") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1965") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(sixtyFive);
 // Add 1965 crash layer to our map.
 sixtyFive.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1966.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1966") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1966") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(sixtySix);
 // Add 1966 crash layer to our map.
 sixtySix.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1967.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1967") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1967") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(sixtySeven);
 // Add 1967 crash layer to our map.
 sixtySeven.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1968.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1968") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1968") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(sixtyEight);
 // Add 1968 crash layer to our map.
 sixtyEight.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1969.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1969") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1969") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(sixtyNine);
 // Add 1969 crash layer to our map.
 sixtyNine.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1970.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1970") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1970") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(seventy);
 // Add 1970 crash layer to our map.
 seventy.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1971.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1971") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1971") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(seventyOne);
 // Add 1971 crash layer to our map.
 seventyOne.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1972.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1972") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1972") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(seventyTwo);
 // Add 1972 crash layer to our map.
 seventyTwo.addTo(map);


 // Creating a GeoJSON layer with the retrieved data for 1973.
 L.geoJson(data, {
  // We turn each feature into a Marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(data);
    if (feature.properties.Pilot_Status == "KIA" && feature.properties.Crash_Date.slice(0,4) == "1973") {
      return L.marker(latlng, {icon: kiaMarker});
    } else if (feature.properties.Pilot_Status != "KIA" && feature.properties.Crash_Date.slice(0,4) == "1973") {
        return L.marker(latlng, {icon: surviveMarker});
    } else {
        return false;
    }
  },
  // A popup for each marker to display info about the crash.
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Crash Date: " + feature.properties.Crash_Date + "<br>Pilot Status: " + feature.properties.Pilot_Status + "<br>Pilot: " + feature.properties.Pilot + "<br>Cause: " + feature.properties.Defense_Category + "<br>Plane: " + feature.properties.Summarized_Name + "<br>" + feature.properties.Image_Link);
  }
 }).addTo(seventyThree);
 // Add 1973 crash layer to our map.
 seventyThree.addTo(map);


  // Create a legend control object.
  let legend = L.control({
  position: "bottomright"
  })

  // Then add all the details for the legend
  legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");
    labels = [];

  div.innerHTML += '<b>Pilot Status</b><br>'

  const statuses = ["KIA", "Survived"];
  const colors = [
    "#FF0000",
    "#0000FF"
  ];

  // Generate a label with a colored square for each status.
  for (var i = 0; i < statuses.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " + (statuses[i] ? "" + statuses[i] + "<br>" : "+");
    }
    return div;
  };

  // Adding legend to the map.
  legend.addTo(map);
  
});