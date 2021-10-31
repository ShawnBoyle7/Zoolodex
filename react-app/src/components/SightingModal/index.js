import React from "react";
import { Modal } from "../../context/Modal";
import Sighting from "../Sighting";

const SightingModal = ({ showSightingModal, setShowSightingModal }) => {

    return (
        <>
            {showSightingModal && (
                <Modal onClose={() => setShowSightingModal(false)} className="signup-modal">
                    <Sighting showSightingModal={showSightingModal} setShowSightingModal={setShowSightingModal}/>
                </Modal>
            )}
        </>
    )
}

export default SightingModal;