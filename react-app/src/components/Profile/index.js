import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    
    const sessionUser = useSelector(state => state.session.user)
    const suggestions = Object.values(useSelector(state => state.suggestions)).filter(suggestion => suggestion.userId === sessionUser.id)
    
    return(
        <>
            <div className="profile-image">
                <img src={sessionUser.imgUrl} alt="profile"/>
            </div>

            <div className="profile-username">
                <h2>{sessionUser.username}</h2>
            </div>

            <div className="profile-suggestions">
                {suggestions.map(suggestion => 
                    <div className="profile-suggestion" key={suggestion.id}>
                        <h3>{suggestion.title}</h3>
                        <img src={suggestion.imgUrl} alt="suggestion"/>
                        <p>{suggestion.description}</p>
                    </div>
                )}
            </div>
        </>
    )
};

export default Profile