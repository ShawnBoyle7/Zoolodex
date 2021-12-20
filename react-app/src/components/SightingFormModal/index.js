import React from "react";
import { Modal } from "../../context/Modal";
import SightingForm from "../SightingForm";

const SightingFormModal = ({ showSightingFormModal, setShowSightingFormModal }) => {

    return (
        <>
            {showSightingFormModal && (
                <Modal onClose={() => setShowSightingFormModal(false)} className="sighting-form-modal">
                    <SightingForm showSightingFormModal={showSightingFormModal} setShowSightingFormModal={setShowSightingFormModal} />
                </Modal>
            )}
        </>
    )
}

export default SightingFormModal;