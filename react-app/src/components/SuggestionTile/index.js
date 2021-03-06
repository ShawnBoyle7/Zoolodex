import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditSuggestionFormModal from "../EditSuggestionFormModal";
import DeleteSuggestionModal from "../DeleteSuggestionModal";
import { Link } from "react-router-dom"
import './SuggestionTile.css'

const SuggestionTile = ({ suggestion, flipped }) => {

    // State variable to store the ID of the suggestion being clicked in by the edit button
    const [suggestionIdEdit, setSuggestionIdEdit] = useState("")
    // State variable to conditionally render the edit modal
    const [showEditModal, setShowEditModal] = useState(false);
    // State variable to store the ID of the suggestion being clicked in by the delete button
    const [suggestionIdDelete, setSuggestionIdDelete] = useState("")
    // State variable to conditionally render the delete modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
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

    return (
        <div className={`${flipped ? "suggestion-tile-flipped" : "suggestion-tile"}`}>
            <div className="suggestion-tile-image-div">
                <img className="gallery-image" src={suggestion.imgUrl} alt="suggestion"/>
            </div>

            <div className="suggestion-tile-body">
                <div className="suggestion-tile-title">
                    {/* If the suggester isn't you, then show their name. If it's you, show "You" suggested X. */}
                    {suggestion?.userId !== sessionUser?.id ?
                    <>
                        <h2 className="suggestion-title">
                            <Link to={`/users/${suggestion.userId}`}>
                                {users[suggestion.userId].username}
                            </Link> Suggested the {suggestion.title}
                        </h2>
                    </>   
                    :
                    <>
                    <h2 className="suggestion-title">
                        You Suggested the {suggestion.title}
                    </h2>
                    </>
                    }
                </div>

                <div className="suggestion-tile-description">
                    <p>{suggestion.description}</p>
                </div>

                {sessionUser?.id === suggestion?.userId &&
                    <div className="suggestion-auth-buttons-div">
                        {/* We put the suggestion ID on the button to get the value into a state variable on click, and render the edit form modal */}
                        <button onClick={renderEditModal} id={suggestion.id}>Edit</button>
                        {/* We put the suggestion ID on the button to get the value into a state variable on click, and render the delete confirmation modal */}
                        <button onClick={renderDeleteModal} id={suggestion.id}>Delete</button>
                    </div>
                }
                {/* Once showModal is set to true from the edit button, this modal will render which will pop out a form rather than rendering a new page */}
                <EditSuggestionFormModal suggestionId={suggestionIdEdit} showModal={showEditModal} setShowModal={setShowEditModal}/>
                {/* Once showModal is set to true from the delete button, this modal will render which gives a confirmation button for the delete*/}
                <DeleteSuggestionModal suggestionId={suggestionIdDelete} showModal={showDeleteModal} setShowModal={setShowDeleteModal}/>
            </div>
        </div>
    )
}

export default SuggestionTile