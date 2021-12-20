import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, Data } from "@react-google-maps/api";
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
        markers.push({lat: sighting.sightingLatitude, lng: sighting.sightingLongitude, sighting })
    });

    const icon = "https://i.imgur.com/N9XomcI.png"
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    })
    
    const containerStyle = {
        width: '1500px',
        height: '775px'
    };

    const [map, setMap] = useState(null)
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    // Sighting Modal Data
    const [showSightingModal, setShowSightingModal] = useState(false)
    const [showSightingImagesModal, setShowSightingImagesModal] = useState(false)
    const [markerSightingId, setMarkerSightingId] = useState({})

    const renderSighting = (sightingId) => {
        setShowSightingModal(true)
        setMarkerSightingId(sightingId)
    }

    return (
        <>
            <div className="background-image-div"><img src={region?.croppedUrl} alt="background"/></div>
            <div className="region-page">
                <h1>Explore {region?.name}!</h1>

                {showSightingModal && 
                    <SightingModal sighting={markerSightingId} showSightingModal={showSightingModal} setShowSightingModal={setShowSightingModal} showSightingImagesModal={showSightingImagesModal} setShowSightingImagesModal={setShowSightingImagesModal}/>
                }
                    
                <div className="map-container">
                    {isLoaded && 
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            zoom={8}
                            center={{lat: region?.regionLatitude, lng: region?.regionLongitude}}
                            onUnmount={onUnmount}
                        >
                            {markers.map((marker, idx) => (
                                <>
                                    <Marker
                                        key={idx}
                                        className="test-class"
                                        id={"testId"}
                                        onClick={() => renderSighting(marker.sighting)}
                                        position={{lat: +marker?.lat, lng: +marker?.lng}}
                                        title="Animal Sighting"
                                        icon={icon}
                                        />
                                </>
                            ))}
                        </GoogleMap>
                    }
                </div>
            </div>
        </>
    )
}
export default Region