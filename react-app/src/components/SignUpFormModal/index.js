import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "../Authentication/SignUpForm";

const SignUpFormModal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
    <>
        <button onClick={() => setShowModal(true)}>Sign Up</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)} className="signup-modal">
                <SignUpForm setShowModal={setShowModal}/>
            </Modal>
        )}
        </>
    )
}

export default SignUpFormModal;