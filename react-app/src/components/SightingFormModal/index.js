import React from "react";
import { Modal } from "../../context/Modal";
import SightingForm from "../SightingForm";

const SightingFormModal = ({ map, setMapCenter, showSightingFormModal, setShowSightingFormModal }) => {

    return (
        <>
            {showSightingFormModal && (
                <Modal onClose={() => setShowSightingFormModal(false)} className="sighting-form-modal">
                    <SightingForm map={map} setMapCenter={setMapCenter} showSightingFormModal={showSightingFormModal} setShowSightingFormModal={setShowSightingFormModal} />
                </Modal>
            )}
        </>
    )
}

export default SightingFormModal;