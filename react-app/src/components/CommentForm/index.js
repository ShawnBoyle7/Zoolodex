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
            <div className="form-errors-div">
                {errors?.map((error, idx) => 
                    <div className="form-error" key={idx}>
                        {error}
                    </div>)}
            </div>

            <div className="comment-input-div">
                <textarea
                    name="content"
                    placeholder="Leave a comment (limit 1000)"
                    onChange={updateContent}
                    value={content}
                    maxLength={1000}
                    required
                    />
            </div>
                <button type="submit">Comment</button>
        </form>
    );
};

export default CommentForm;