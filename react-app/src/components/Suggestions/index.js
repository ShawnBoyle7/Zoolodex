import React, { useState } from "react";
import { useSelector } from "react-redux";
import SuggestionTile from "../SuggestionTile";
import EditSuggestionFormModal from "../EditSuggestionFormModal";
import DeleteSuggestionModal from "../DeleteSuggestionModal";

const Suggestions = () => {
    // State variable to store the ID of the suggestion being clicked in by the edit button
    const [suggestionIdEdit, setSuggestionIdEdit] = useState("")
    // State variable to conditionally render the edit modal
    const [showEditModal, setShowEditModal] = useState(false);
    // State variable to store the ID of the suggestion being clicked in by the delete button
    const [suggestionIdDelete, setSuggestionIdDelete] = useState("")
    // State variable to conditionally render the delete modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user)

    // Function to set our ID state variable to the suggestion ID that we store on the edit button
    const renderEditModal = (e) => {
        setSuggestionIdEdit(e.target.id)
        setShowEditModal(true)
    }

    // Function to set our ID state variable to the suggestion ID that we store on the delete button
    const renderDeleteModal = (e) => {
        setSuggestionIdDelete(e.target.id)
        setShowDeleteModal(true)
    }

    const suggestions = Object.values(useSelector(state => state.suggestions)) 
    
    return(
        <>
            <div className="all-suggestions">
                {suggestions.map(suggestion =>
                    <div key={suggestion?.id}>
                        <SuggestionTile suggestion={suggestion}/>
                    </div>
                )}
            </div>

            
        </>
    )
};

export default Suggestions;