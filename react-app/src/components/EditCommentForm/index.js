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
    };

    const updateContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-errors">
                {errors?.map((error, idx) => 
                    <div className="form-error" key={idx}>
                        {error}
                    </div>)}
            </div>

            <div className="comment-content-input">
                <input 
                    type="text"
                    name="content"
                    placeholder="Write your comment here"
                    onChange={updateContent}
                    value={content}
                    required={true}/>
            </div>

            <div>
                <button onClick={() => setShowModal(false)} type="submit">Submit</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
        </form>
    );
};

export default EditCommentForm;