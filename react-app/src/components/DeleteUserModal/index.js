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
            <button className="delete-modal" onClick={() => setShowModal(true)}>Delete Account</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    { sessionUser.id !== 1 ?
                    <>
                        <p>Are you sure?</p>
                        <div>
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
