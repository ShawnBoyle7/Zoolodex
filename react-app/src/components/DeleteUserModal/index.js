import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import { deleteUser } from "../../store/session";
import { useHistory } from "react-router-dom";

function DeleteUserModal() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const sessionUser = useSelector(state => state.session.user)

    const [showModal, setShowModal] = useState(false)

    const handleDelete = () => {
        dispatch(deleteUser(sessionUser.id))
        setShowModal(false)
        history.push('/')
    }

    return (
        <>
            <div className="delete-account-button-div">
                <button className="delete-account-button" onClick={() => setShowModal(true)}>Delete Account</button>
            </div>
            {showModal && (
                <Modal className="delete-modal" onClose={() => setShowModal(false)}>
                    { sessionUser.id !== 1 ?
                    <>
                        <h3>Confirm Your Deletion</h3>
                        <div className="delete-modal-buttons-div">
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </>
                    :
                    <p>Demo user cannot be deleted!</p>
                    }
                </Modal>
            )}
        </>
    )
}

export default DeleteUserModal
