import React, { useState } from "react"

const SightingForm = ({ setMapCenter }) => {

    const [position, setPosition] = useState(null)

    const userLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                setMapCenter(pos)
            })
        } else {
            alert("Geolocation not supported in this browser!")
        }
    }

    return (
    <>
        <button className="get-location-button" onClick={userLocation}>Get Current Location</button>
        <h1>Your Sighting</h1>
        <form>
            <input
                
            />
        </form>
    </>
)
}

export default SightingForm