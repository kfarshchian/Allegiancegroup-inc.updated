import React from 'react';
import './map.scss'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'


function Map() {
  

  return (
    <>
  <MapContainer center={[40.7608, -111.8910]} zoom={13} scrollWheelZoom={false}>
  <div className='info-map'>
      Allegiance Group, Inc
                <br />
                United States, Utah
                <br />
                Salt Lake City <br />
            </div>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[40.7608, -111.8910]}>
    </Marker>
  </MapContainer>

      
    </>
  );
}

export default Map;
