import React from "react";
import { Modal } from "../../context/Modal";
import EditCommentForm from "../EditCommentForm";

function EditCommentFormModal({ commentId, showModal, setShowModal }) {

    return (
    <>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditCommentForm setShowModal={setShowModal} commentId={commentId}/>
        </Modal>
        )}
    </>
    )
}

export default EditCommentFormModal;