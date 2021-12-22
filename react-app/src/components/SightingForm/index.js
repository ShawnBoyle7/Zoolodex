import React, { useState } from "react"

const SightingForm = ({ setMapCenter }) => {

    const [position, setPosition] = useState(null)

    const userLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                })
                setMapCenter({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                })
            })
        } else {
            alert("Geolocation not supported in this browser!")
        }
    }

    return (
    <>
        <button className="get-location-button" onClick={userLocation}>My Location</button>
        <h1>Your Sighting</h1>
        <form>
            <input 
                value={position?.lat}
                onChange={(e) => setPosition(position ? position.lat : e.target.value)}
                placeholder="Latitude"
                required={true}
                />
            <input 
                value={position?.lng}
                    onChange={(e) => setPosition(position ? position.lng : e.target.value)}
                placeholder="Longitude"
                required={true}
            />
        </form>
    </>
)
}

export default SightingForm