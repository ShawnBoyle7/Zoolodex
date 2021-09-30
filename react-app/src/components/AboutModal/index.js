import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import About from "../About";

function AboutModal() {
    const [showModal, setShowModal] = useState(false)

    return (
    <>
        <button className="about-modal" onClick={() => setShowModal(true)}>About</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <About setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
    )
}

export default AboutModal;