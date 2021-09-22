import React, { useState } from "react";
import { Modal } from "../context/Modal";

const SignupFormModal = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} className="signup-modal">
          <SignupFormModal setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}

export default SignupFormModal;