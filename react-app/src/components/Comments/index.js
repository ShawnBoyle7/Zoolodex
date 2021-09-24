import React, { useState } from "react";
import { useSelector } from "react-redux";

const Comments = ({ animalId }) => {

    const comments = Object.values(useSelector(state => state.comments)).filter(comment => comment.animalId === animalId).reverse
    const users = useSelector(state => state.users)
    const userId = useSelector(state => state.session.user.id)

    const [commentIdEdit, setCommentIdEdit] = useState("")
    const [commentIdDelete, setCommentIdDelete] = useState("")
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const renderEditModal = (e) => {
        setCommentIdEdit(e.target.value)
        setShowEditModal(true)
    }

    const renderDeleteModal = (e) => {
        setCommentIdDelete(e.target.value)
        setShowDeleteModal(true)
    }

    return(
        <>
            <div className="all-comments">
                {comments.map(comment =>
                    <div classname="comment-div" key={comment?.id}>
                        <img className="comment-picture" src={users[comment.userId].imgUrl} alt={`${users[comment.userId].imgUrl}'s picture`}/>
                        <p className="comment-username">{users[comment.userId].username}</p>
                        <p className="comment-content">{comment.content}</p>

                        {comment.userId === userId && 
                            <div>
                                <button className="comment-edit-button" onClick={renderEditModal} id={comment.id}>Edit</button>
                                <button className="comment-delete-button" onClick={renderDeleteModal} id={comment.id}>Delete</button>
                            </div>
                        }
                    </div>
                )}
            </div>

            <EditCommentFormModal commentIdEdit={commentIdEdit} setShowEditModal={setShowEditModal} showEditModal={showEditModal}/>
            <DeleteCommentModal commentIdDelete={commentIdDelete} setShowEditModal={setShowDeleteModal} showDeleteModal={showDeleteModal}/>

            
        </>
    )
};

export default Comments;