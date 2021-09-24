import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SuggestionForm from "../SuggestionForm";

const SuggestionFormModal = () => {
const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Suggest</button>
            {showModal && (
            <Modal onClose={() => setShowModal(false)} className="signup-modal">
                <SuggestionForm setShowModal={setShowModal}/>
            </Modal>
            )}
        </>
    )
}

export default SuggestionFormModal;