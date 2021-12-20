import React from "react";
import { Modal } from "../../context/Modal";
import Sighting from "../Sighting";

const SightingModal = ({ sighting, showSightingModal, setShowSightingModal, showSightingImagesModal, setShowSightingImagesModal }) => {

    return (
        <>
            {showSightingModal && (
                <Modal onClose={() => setShowSightingModal(false)} className="sighting-modal">
                    <Sighting sighting={sighting} showSightingModal={showSightingModal} setShowSightingModal={setShowSightingModal} showSightingImagesModal={showSightingImagesModal} setShowSightingImagesModal={setShowSightingImagesModal}/>
                </Modal>
            )}
        </>
    )
}

export default SightingModal;