import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from '../../context/Modal';
import { deleteComment } from "../../store/comments";

function DeleteCommentModal({ commentId, setShowModal, showModal }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteComment(commentId))
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal className="delete-modal" onClose={() => setShowModal(false)}>
                    <h3>Confirm Your Deletion</h3>
                    <div className="delete-modal-buttons-div">
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default DeleteCommentModal
