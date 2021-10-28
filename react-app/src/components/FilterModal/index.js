import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Filter from "../Filter";

function FilterModal({ showFilterModal, setShowFilterModal }) {
    return (
    <>
        {showFilterModal && (
        <Modal onClose={() => setShowFilterModal(false)}>
            <Filter setShowFilterModal={setShowFilterModal}/>
        </Modal>
        )}
    </>
    )
}

export default FilterModal;