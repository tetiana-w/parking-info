import React from 'react';
import { Map, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import parkingData from "./data/parking.json";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';
import useModal from './useModal';
import Modal from './Components/Modal/Modal';

localStorage.setItem('parking', JSON.stringify(parkingData));

const parkingIcon = new Icon({
  iconUrl: "/icons/parking-80.png",
  iconSize: [30, 30]
});
let coordinates;
let parkingLocalStorage = JSON.parse(localStorage.getItem('parking')); 

function App() {
  const [activeParking, setActiveParking] = React.useState(null);
  const { isShowing, toggle } = useModal();   

  function showModal(elem) {
    coordinates = elem.latlng;    
    toggle();    
  }
  
  return (
    <React.Fragment>
      <Map center={[53.1324633, 8.2085014]}
        zoom={15}
        onDblClick={showModal}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors |
           <a href="https://icons8.com/icon/37zzZkcFZ1OC/parken">Parken icon by Icons8</a>'
        />
         {parkingData.features.map(parking => (
          <Marker
            key={parking.properties.id}
            position={[parking.geometry.coordinates[1], parking.geometry.coordinates[0]]}
            onClick={() => {
              setActiveParking(parking);
            }}
            icon={parkingIcon}
          />
        ))} 
        {parkingLocalStorage.features.map(parking => (          
          <Marker
            key={parking.properties.id}
            position={[parking.geometry.coordinates[1], parking.geometry.coordinates[0]]}
            onClick={() => {
              setActiveParking(parking);
            }}
            icon={parkingIcon}
          />
        ))} 

      </Map>
      {activeParking && (<Sidebar
        position={[
          activeParking.geometry.coordinates[1],
          activeParking.geometry.coordinates[0]
        ]}
        properties={activeParking.properties}
        onClose={() => {
          setActiveParking(null);
        }}
      />
      )}     
        <Modal
          isShowing={isShowing}
          hide={toggle} 
          coordinates={coordinates}                  
        />
      
    </React.Fragment>
  );
}

export default App;
