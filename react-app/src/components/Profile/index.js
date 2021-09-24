import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser.suggestions)
    
    return(
        <>
            <div className="profile-image">
                <img src={sessionUser.img_url} alt="profile"/>
            </div>

            <div className="profile-username">
                <h2>{sessionUser.username}</h2>
            </div>
{/* 
            <div className="profile-suggestions">
                {sessionUser.suggestions.map(suggestion => {
                    <div className="profile-suggestion">
                        <h3>{suggestion.title}</h3>
                        <img src={suggestion.img_url}/>
                        <p>{suggestion.description}</p>
                    </div>
                })}
            </div> */}
        </>
    )
};

export default Profile