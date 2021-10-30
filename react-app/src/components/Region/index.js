import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './Region.css'

const Region = () => {
    const regions = Object.values(useSelector(state => state.regions))
    const { regionId } = useParams();
    const region = regions.find(region => region.id === +regionId)

    const [currentPosition, setCurrentPosition] = useState({lat:43.11016617798622,lng:-89.48826131670266})
    const [map, setMap] = useState(null)
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    })
    
    const containerStyle = {
        width: '800px',
        height: '800px'
    };
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <>
            <div className="background-image-div"><img src={region.imgUrl} alt="background"/></div>
            <div className="region-page">
                <h1>{region.name}</h1>
                    
                <div className="map_page__container">
                    <div style={{ height: '900px', width: '900px' }}>
                        {isLoaded && <GoogleMap
                        mapContainerStyle={containerStyle}
                        zoom={8}
                        center={currentPosition}
                        onUnmount={onUnmount}
                        >
                        </GoogleMap>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Region