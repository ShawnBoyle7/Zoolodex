import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteUserModal from "../DeleteUserModal";
import EditUserForm from "../EditUserForm";

function EditUserFormModal() {

    const [showModal, setShowModal] = useState(false)

    return (
    <>
        <button onClick={() => setShowModal(true)}>Edit Account Details</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditUserForm setShowModal={setShowModal}/>
            <DeleteUserModal/>
        </Modal>
        )}
    </>
    )
}

export default EditUserFormModal;