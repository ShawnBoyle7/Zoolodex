import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../Authentication/LoginForm";

function LoginFormModal() { 
    // State variable for conditional rendering of modal
    const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Button to render the modal which renders the login form. We will render this modal component as a button, which when clicked
          will show the rest of the modal conditionally rendering the login form */}
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} className="login-modal">
          {/* We pass the state variable to login form to set show modal to false after submission */}
          <LoginForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}

export default LoginFormModal;