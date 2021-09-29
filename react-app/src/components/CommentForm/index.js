import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newComment } from "../../store/comments";

const CommentForm = ({ animal, sighting }) => {
    const dispatch = useDispatch();
    
    const userId = useSelector(state => state.session?.user?.id);

    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Sighting placeholder
        const data = await dispatch(newComment(content, userId, animal?.id, sighting?.id ))
        
        if (data) {
            setErrors(data)
        }
        setContent("")
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

            <div className="comment-input-div">
                <textarea
                    className="comment-textarea"
                    name="content"
                    placeholder="Leave a comment"
                    onChange={updateContent}
                    value={content}/>
            </div>

            <div className="comment-submit-div">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default CommentForm;