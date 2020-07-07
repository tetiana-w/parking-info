import React from 'react';
import './Sidebar.css';
import {
    FaMapMarkedAlt, FaClock, FaVideo, FaVideoSlash,
    FaMoneyBillAlt, FaWheelchair, FaParking,
    FaWarehouse, FaArrowsAltV, FaBars
} from 'react-icons/fa';
import CloseSidebarBtn from '../CloseSidebarBtn/CloseSidebarBtn';

export default function Sidebar(props) {

    const properties = props.properties

    return (
        <div id="sidebar" className="sidenav">
            <CloseSidebarBtn />
            <h2>{properties.name}</h2>

            <div className="main-block">
                <div>
                    <FaMapMarkedAlt /> &nbsp;&nbsp;
                    {properties.address}
                </div>
                <div>
                    <FaClock /> &nbsp;&nbsp;
                    {properties.open} - {properties.close}&nbsp;&nbsp;
                    {properties.openDays}
                </div>
                <div>
                    <FaMoneyBillAlt />&nbsp;&nbsp; {properties.price} €
                </div>
            </div>
            <div className="grid-container">
                <div className="label-sidebar">Parkplätze</div>
                <div className="second-block">
                    <FaParking /> &nbsp;&nbsp;
                    {properties.parkingSpace}
                </div>
                <div className="label-sidebar">Parkplätze für Behinderte</div>
                <div className="second-block">
                    <FaWheelchair /> &nbsp;&nbsp;
                    {properties.Handicapped}
                </div>
                <div className="label-sidebar">Maximale Höhe erlaubt</div>
                <div className="second-block">
                    <FaArrowsAltV /> &nbsp;&nbsp;
                    {properties.heightMax} m
                </div>
                <div className="label-sidebar">Parkdeks</div>
                <div className="second-block">
                    <FaBars /> &nbsp;&nbsp;
                    {properties.parkdecks}
                </div>
                <div className="label-sidebar">Typ</div>
                <div className="second-block">
                    <FaWarehouse /> &nbsp;&nbsp;
                    {properties.type}
                </div>
                <div className="label-sidebar">Überwachung</div>
                <div className="second-block">
                    {properties.isWatched === 'on'
                        ? <span><FaVideo /><span> &nbsp;&nbsp;Bewacht</span></span>
                        : <span><FaVideoSlash /><span> &nbsp;&nbsp;Nicht Bewacht</span></span>
                    }
                </div>
            </div>
        </div>
    )
}
