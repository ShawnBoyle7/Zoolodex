import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSuggestion } from "../../store/suggestions";

const SuggestionForm = () => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session.user.id)

    const [type, setType] = useState("") 
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = () => {
        dispatch(newSuggestion(type, title, description, imgUrl, userId))
    };

    return(
        <form onSubmit={handleSubmit} className="suggestion-form">
            <div className="form-errors">
                {errors.map((error, idx) => 
                <div className="form-error" key={idx}>
                    {error}
                </div>)}
            </div>
            
            <div className="form-select">

            </div>
        </form>
    )
};

export default SuggestionForm;