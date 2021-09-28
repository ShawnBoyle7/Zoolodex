import React, { useState } from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";
import EditUserFormModal from "../EditUserFormModal";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Profile = () => {
    const { userId } = useParams();

    const sessionUser = useSelector(state => state.session?.user);
    
    // Finds the user of the profile from useParams for rendering their data
    const profileUser = Object.values(useSelector(state => state.users)).find(user => user.id === +userId);

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

    // Prevents non-existent profiles from rendering
    const users = useSelector(state => state.users);
    const userExists = users[+userId] !== undefined;

    return(
        <>
            <div className="background-image"><img src="https://i.imgur.com/EgUQclC.jpg"/></div>
            <div className="page-content">
                {userExists ?
                <>
                    <div className="profile-username">
                        <h2>{profileUser?.username}</h2>
                    </div>

                    {profileUser?.id === sessionUser?.id && 
                        <div className="edit-user">
                            <EditUserFormModal/>
                        </div>
                    }
                    
                    <div className="profile-image">
                        <img src={profileUser?.imgUrl} alt="profile"/>
                    </div>

                    <button onClick={animalClick}>Animal Suggestions</button>
                    <button onClick={regionClick}>Region Suggestions</button>
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
                </>
                : 
                <PageNotFound/>}
            </div>
        </>
    )
};

export default Profile