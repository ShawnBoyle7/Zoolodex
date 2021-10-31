import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SightingModal from "../SightingModal";
import './Region.css'

const Region = () => {
    const regions = Object.values(useSelector(state => state.regions))
    const { regionId } = useParams();
    const region = regions.find(region => region?.id === +regionId)

    const sightings = Object.values(useSelector(state => state.sightings))
    const markers = []
    sightings.forEach(sighting => {
        console.log(sighting)
        markers.push({lat: sighting.sightingLatitude, lng: sighting.sightingLongitude})
    });

    // const icon = <img src="https://i.imgur.com/N9XomcI.png"/>

    const [map, setMap] = useState(null)
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    })
    
    const containerStyle = {
        width: '1500px',
        height: '750px'
    };
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    // Sighting Modal Data
    
    const [showSightingModal, setShowSightingModal] = useState(false)

    return (
        <>
            <div className="background-image-div"><img src={region?.imgUrl} alt="background"/></div>
            <div className="region-page">
                <h1>{region?.name}</h1>
                    
                    <div className="map-container">
                        {showSightingModal && 
                            <SightingModal showSightingModal={showSightingModal} setShowSightingModal={setShowSightingModal}/>
                        }
                        {isLoaded && 
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                zoom={8}
                                center={{lat: region.regionLatitude, lng: region.regionLongitude}}
                                onUnmount={onUnmount}
                            >
                                {markers.map((marker, idx) => (
                                    <Marker
                                        key={idx} 
                                        onClick={() => setShowSightingModal(true)}
                                        position={{lat: +marker.lat, lng: +marker.lng}}
                                        title="Animal Sighting"
                                        // icon={icon}
                                    />
                                ))}
                            </GoogleMap>
                        }
                    </div>
            </div>
        </>
    )
}
export default Region