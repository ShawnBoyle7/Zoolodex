import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from '../../context/Modal';
import { deleteSuggestion } from "../../store/suggestions";

function DeleteSuggestionModal({ suggestionId, setShowModal, showModal }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteSuggestion(suggestionId))
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal className="delete-modal" onClose={() => setShowModal(false)}>
                    <h3>Confirm Your Deletion</h3>
                    <div className="delete-modal-buttons-div">
                        {/* Confirm Delete button which dispatches the suggestion ID to our redux store */}
                        <button onClick={handleDelete}>Delete</button>
                        {/* Cancel by setting show modal to false */}
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default DeleteSuggestionModal
