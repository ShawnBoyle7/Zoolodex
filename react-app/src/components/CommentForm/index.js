// Imports
// State variables
// handleSubmit
// Input fields
// Commenting on animal article vs sighting?

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newComment } from "../../store/comments";

// ID's as props?
const CommentForm = ({ animalId }) => {
    const dispatch = useDispatch();
    
    const userId = useSelector(state => state.session.user.id);

    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await dispatch(newComment(content, userId, animalId))
        
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
                    value={content}/>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default CommentForm;