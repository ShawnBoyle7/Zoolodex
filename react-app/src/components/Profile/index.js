import React from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";
import EditUserFormModal from "../EditUserFormModal";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { userId } = useParams();

    const sessionUser = useSelector(state => state.session?.user)
    const profileUser = Object.values(useSelector(state => state.users)).find(user => user.id === +userId)
    
    const suggestions = Object.values(useSelector(state => state.suggestions)).filter(suggestion => suggestion?.userId === profileUser?.id)
    
    return(
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

            <div className="profile-suggestions">
                <h1>Suggestions</h1>
                {suggestions?.map(suggestion => 
                    <div className="profile-suggestion" key={suggestion.id}>
                        <SuggestionTile suggestion={suggestion}/>
                    </div>
                )}
            </div>

        </>
    )
};

export default Profile