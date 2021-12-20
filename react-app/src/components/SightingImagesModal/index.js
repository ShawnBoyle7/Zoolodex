import React from "react";
import { Modal } from "../../context/Modal";
import SightingImages from "../SightingImages";

const SightingImagesModal = ({ sightingImages, showSightingImagesModal, setShowSightingImagesModal }) => {

    return (
        <>
            {showSightingImagesModal && (
                <Modal onClose={() => setShowSightingImagesModal(false)} className="sighting-images-modal">
                    <SightingImages sightingImages={sightingImages} showSightingImagesModal={showSightingImagesModal} setShowSightingImagesModal={setShowSightingImagesModal} />
                </Modal>
            )}
        </>
    )
}

export default SightingImagesModal;