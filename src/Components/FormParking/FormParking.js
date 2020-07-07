import React, { useState } from 'react';
import './FormParking.css';

export default function FormParking(props) {
    // Breitengrad
    const latitude = props.coordinates.lat;
    // Längengrad
    const longitude = props.coordinates.lng;
    let parkingLocalStorage = localStorage.getItem('parking');    

    const [parkingName, setParkingName] = useState(null);
    const [parkingAddress, setParkingAddress] = useState(null);
    const [parkingOpen, setParkingOpen] = useState(null);
    const [parkingClose, setParkingClose] = useState(null);
    const [parkingDaysOpen, setParkingDaysOpen] = useState(null);
    const [parkingPrice, setParkingPrice] = useState(null);
    const [parkingSpace, setParkingSpace] = useState(null);
    const [parkingHandicapped, setParkingHandicapped] = useState(null);
    const [parkingType, setParkingType] = useState(null);
    const [parkingMax, setParkingMax] = useState(null);
    const [parkdecks, setParkdecks] = useState(null);
    const [isWatched, setIsWatched] = useState(null);

    function creteID() {
        let id = Math.floor(Math.random() * (1000000 - 1) + 1);
        return id;
    }

    function saveInLocalStorage(e) {
        //e.preventDefault();
        let parkingID = creteID();

        let feature = {
            type: "Feature",
            properties: {
                id: parkingID,
                name: parkingName,
                address: parkingAddress,
                open: parkingOpen,
                close: parkingClose,
                openDays: parkingDaysOpen,
                price: parkingPrice,
                parkingSpace: parkingSpace,
                Handicapped: parkingHandicapped,
                type: parkingType,
                heightMax: parkingMax,
                parkdecks: parkdecks,
                isWatched: isWatched
            },
            geometry: {
                type: "Point",
                coordinates: [
                    longitude,
                    latitude
                ]
            }
        }
        let features = { features: [feature] };

        if (parkingLocalStorage) {
            let featuresLS = JSON.parse(parkingLocalStorage).features;
            featuresLS.push(feature)
            features = { features: featuresLS };
            localStorage.setItem('parking', JSON.stringify(features));
        } else {
            localStorage.setItem('parking', JSON.stringify(features));
        }
    }

    return (
        <React.Fragment>
            <form>
                <label htmlFor="parkname">Name</label>
                <input type="text" id="parkname"
                    placeholder="Name"
                    onChange={(e) => { setParkingName(e.target.value) }}
                />

                <label htmlFor="parkadress">Adresse</label>
                <input type="text" id="parkadress" placeholder="Adresse"
                    onChange={(e) => { setParkingAddress(e.target.value) }}
                />

                <label htmlFor="parkopen">Geöffnet ab</label>
                <input type="time" id="parkopen" placeholder="Geöffnet ab"
                    onChange={(e) => { setParkingOpen(e.target.value) }}
                />

                <label htmlFor="parkclose">Geöffnet bis</label>
                <input type="time" id="parkclose" placeholder="Geöffnet bis"
                    onChange={(e) => { setParkingClose(e.target.value) }}
                />

                <label htmlFor="parkdays">Geöffnet am</label>
                <input type="text" id="parkdays" placeholder="Geöffnet am"
                    onChange={(e) => { setParkingDaysOpen(e.target.value) }}
                />

                <label htmlFor="parkprice">Preis</label>
                <input type="text" id="parkprice" placeholder="Preis"
                    onChange={(e) => { setParkingPrice(e.target.value) }}
                />

                <label htmlFor="parking">Parkplätze</label>
                <input type="text" id="parking" placeholder="Parkplätze"
                    onChange={(e) => { setParkingSpace(e.target.value) }}
                />

                <label htmlFor="parkhandicapped">Parkplätze für Behinderte</label>
                <input type="text" id="parkhandicapped" placeholder="Parkplätze für Behinderte"
                    onChange={(e) => { setParkingHandicapped(e.target.value) }}
                />

                <label htmlFor="parktype">Typ</label>
                <input type="text" id="parktype" placeholder="Typ"
                    onChange={(e) => { setParkingType(e.target.value) }}
                />

                <label htmlFor="parkmax">Maximale Höhe erlaubt</label>
                <input type="text" id="parkmax" placeholder="Maximale Höhe erlaubt"
                    onChange={(e) => { setParkingMax(e.target.value) }}
                />

                <label htmlFor="parkdeks">Parkdeks</label>
                <input type="text" id="parkdeks" placeholder="Parkdeks"
                    onChange={(e) => { setParkdecks(e.target.value) }}
                />

                <label htmlFor="parkwatched">Überwachung</label>
                <input className="checkbox-input" type="checkbox" id="parkwatched" placeholder="Überwachung"
                    onChange={(e) => { setIsWatched(e.target.value) }}
                />
                <button className="full-width" type='submit' id="saveparking" onClick={saveInLocalStorage}>
                    Hinzufügen
            </button>
            </form>
        </React.Fragment>
    )
}
