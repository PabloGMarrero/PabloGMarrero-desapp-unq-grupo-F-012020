import React, { useEffect, useRef, useState} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "80vw",
  height: "calc(60vh - 80px)",
  margin: "20px 0 0 0"
};

const MapboxGLMapStores = ({stores}) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [zoom] = useState(15)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXplY2FycmFzY29zYSIsImEiOiJja2FoNnFkZmYwZ3N5MnBvMXNtdGx6c3QyIn0.xR9FIATQVNcdykGIGpITsA';
    const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-58.258655, -34.721533],
        zoom: zoom
      });

    //marker.setLngLat([coord.lng, coord.lat]).addTo(map)
      
    stores.forEach( store =>{
        const marker = new mapboxgl.Marker()
        marker.setLngLat(
            [store.address.geographicZone.longitude, 
                store.address.geographicZone.latitude]
        ).addTo(map)

    })
      
    map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) {
      initializeMap({ setMap, mapContainer });
    }
  }, [map, zoom, stores]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMapStores;