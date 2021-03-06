import React, { useState } from "react"

const SightingForm = ({ setMapCenter }) => {

    const [position, setPosition] = useState(null)
    const [description, setDescription] = useState(null)

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
                onChange={() => setPosition(position?.lat)}
                placeholder="Latitude"
                required={true}
                disabled={true}
                />
            <input 
                value={position?.lng}
                onChange={() => setPosition(position?.lng)}
                placeholder="Longitude"
                required={true}
                disabled={true}
            />
            <input
                value={description}
                onChange={(e) => setDescription(e?.target.value)}
                placeholder="Description"
                required={true}
                maxLength={1000}
                />
        </form>
    </>
)
}

export default SightingForm