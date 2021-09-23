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

    const updateType = (e) => {
        setType(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} className="suggestion-form">
            <div className="form-errors">
                {errors.map((error, idx) => 
                <div className="form-error" key={idx}>
                    {error}
                </div>)}
            </div>
            
            <div className="form-radio">
                <label>
                    <input 
                        type="radio"
                        // I forget what name is for, I think to connect the label/input?
                        name="type"
                        value="option1"
                        onChange={updateType}
                        checked={type === "option1"}
                    />
                </label>
            </div>

            <div className="form-radio">
                <label>
                    <input 
                        type="radio"
                        // I forget what name is for, I think to connect the label/input?
                        name="type"
                        value="option2"
                        onChange={updateType}
                        checked={type === "option2"}
                    />
                </label>
            </div>
        </form>
    )
};

export default SuggestionForm;