import React, { useState } from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";
import EditSuggestionFormModal from "../EditSuggestionFormModal";

const Suggestions = () => {
    const [suggestionIdEdit, setSuggestionIdEdit] = useState("")
    const [showEditModal, setShowEditModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user)

    const renderEditModal = (e) => {
        setSuggestionIdEdit(e.target.id)
        setShowEditModal(true)
    }

    const suggestions = Object.values(useSelector(state => state.suggestions)) 
    
    return(
        <>
            <div>
                {suggestions.map(suggestion =>
                    <div key={suggestion.id}>
                        <SuggestionTile suggestion={suggestion}/>
                            {sessionUser.id === suggestion.userId &&
                                <div>
                                    <button className="suggestion-edit-button" onClick={renderEditModal} id={suggestion.id}>Edit</button>
                                </div>
                            }
                            <EditSuggestionFormModal suggestionId={suggestionIdEdit} showModal={showEditModal} setShowModal={setShowEditModal}/>
                    </div>
                )}
            </div>

            
        </>
    )
};

export default Suggestions;