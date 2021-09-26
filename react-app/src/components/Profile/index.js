import React from "react";
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

    // Prevents non-existent profiles from rendering
    const users = useSelector(state => state.users);
    const userExists = users[+userId] !== undefined;

    return(
            userExists ?
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
            : 
            <PageNotFound/>
    )
};

export default Profile