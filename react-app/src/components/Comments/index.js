import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditCommentFormModal from "../EditCommentFormModal";
import DeleteCommentModal from "../DeleteCommentModal";
import './Comments.css'

const Comments = ({ animalId }) => {

    const comments = Object.values(useSelector(state => state.comments)).filter(comment => comment.animalId === +animalId).reverse()
    const users = useSelector(state => state.users)
    const userId = useSelector(state => state.session?.user?.id)
    

    const [commentIdEdit, setCommentIdEdit] = useState("")
    const [commentIdDelete, setCommentIdDelete] = useState("")
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const renderEditModal = (e) => {
        setCommentIdEdit(e.target.id)
        setShowEditModal(true)
    }

    const renderDeleteModal = (e) => {
        setCommentIdDelete(e.target.id)
        setShowDeleteModal(true)
    }

    return(
        <>
            <div className="all-comments">
                {comments.map(comment =>
                    <div className="comment-div" key={comment?.id}>
                        <img className="comment-image" src={users[comment.userId].imgUrl} alt={`${users[comment.userId].imgUrl}'s profile`}/>
                        <div className="comment-text-div">
                            <p className="comment-username">{users[comment.userId].username}</p>
                            <p className="comment-content">{comment.content}</p>
                        </div>

                        {comment.userId === userId && 
                            <div className="comment-auth-buttons-div">
                                <button className="comment-edit-button" onClick={renderEditModal} id={comment.id}>Edit</button>
                                <button className="comment-delete-button" onClick={renderDeleteModal} id={comment.id}>Delete</button>
                            </div>
                        }
                    </div>
                )}
            </div>

            <EditCommentFormModal commentId={commentIdEdit} setShowModal={setShowEditModal} showModal={showEditModal}/>
            <DeleteCommentModal commentId={commentIdDelete} setShowModal={setShowDeleteModal} showModal={showDeleteModal}/>
        </>
    )
};

export default Comments;