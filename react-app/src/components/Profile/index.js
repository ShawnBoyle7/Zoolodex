import React, { useState } from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";
import EditUserFormModal from "../EditUserFormModal";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import './Profile.css'

const Profile = () => {
    const { userId } = useParams();

    const sessionUser = useSelector(state => state.session?.user);
    const profileUser = Object.values(useSelector(state => state.users)).find(user => user.id === +userId);
    const users = useSelector(state => state.users);
    const suggestions = Object.values(useSelector(state => state.suggestions)).filter(suggestion => suggestion?.userId === profileUser?.id);
    const animalSuggestions = suggestions.filter(suggestion => suggestion.type === "animal").reverse()
    const regionSuggestions = suggestions.filter(suggestion => suggestion.type === "region").reverse()

    const [showAnimals, setShowAnimals] = useState(true)
    const [showRegions, setShowRegions] = useState(false)

    const animalClick = () => {
        setShowAnimals(true)
        setShowRegions(false)
    };

    const regionClick = () => {
        setShowAnimals(false)
        setShowRegions(true)
    };

    const userExists = users[+userId] !== undefined;

    return(
        <>
            <div className="background-image"><img src="https://images.wallpaperscraft.com/image/single/lake_mountains_trees_129959_3840x2400.jpg"/></div>
            {/* <h3 className="future-feature">Recent Sighting Goes Here</h3> */}
                {userExists ?
                <div className="profile-page">
                    <div className="profile-tile">
                        <img src={profileUser?.imgUrl} alt="profile"/>
                        <h1>{profileUser?.username}</h1>
                        {profileUser?.id === sessionUser?.id &&
                            <div className="profile-edit-div">
                                <EditUserFormModal/>
                            </div>
                        }

                        <div className="profile-buttons-div">
                            <button className={`${showAnimals ? "selected" : ""}`} onClick={animalClick}>Animal Suggestions</button>
                            <button className={`${showRegions ? "selected" : ""}`} onClick={regionClick}>Region Suggestions</button>
                        </div>
                    </div>

                    <div className="profile-suggestions">
                        {showAnimals &&
                            animalSuggestions.map(suggestion =>
                                <div className="suggestion-div" key={suggestion?.id}>
                                    <SuggestionTile suggestion={suggestion}/>
                                </div>
                        )}

                        {showRegions &&
                            regionSuggestions.map(suggestion =>
                                <div className="suggestion-div" key={suggestion?.id}>
                                    <SuggestionTile suggestion={suggestion}/>
                                </div>
                        )}
                    </div>
                </div>
                : 
                <PageNotFound/>}
        </>
    )
};

export default Profile