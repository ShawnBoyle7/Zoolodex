import React from "react";
import { Modal } from "../../context/Modal";
import EditSuggestionForm from "../EditSuggestionForm";

function EditSuggestionFormModal({ suggestionId, showModal, setShowModal }) {

    return (
    <>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditSuggestionForm setShowModal={setShowModal} suggestionId={suggestionId}/>
        </Modal>
        )}
    </>
    )
}

export default EditSuggestionFormModal;