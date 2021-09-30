import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment } from "../../store/comments";

const EditCommentForm = ({ commentId, setShowModal }) => {
    const dispatch = useDispatch();

    const comment = useSelector(state => state.comments[commentId])

    const [content, setContent] = useState(comment?.content);
    const [errors, setErrors] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()
        // Sighting placeholder
        const data = await dispatch(editComment(content, commentId))
        
        if (data) {
            setErrors(data)
        }
        setContent("")
        setShowModal(false)
    };

    const updateContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <form className="edit-comment-form" onSubmit={handleSubmit}>
            <div className="form-errors-div">
                {errors?.map((error, idx) => 
                    <div className="form-error" key={idx}>
                        {error}
                    </div>)}
            </div>

            <div className="edit-comment-div">
                <textarea
                    name="content"
                    placeholder="Write your comment here"
                    onChange={updateContent}
                    value={content}/>
            </div>

            <div className="form-buttons-div">
                <button type="submit">Edit</button>
                <button onClick={() => setShowModal(false)} type="button">Cancel</button>
            </div>
        </form>
    );
};

export default EditCommentForm;