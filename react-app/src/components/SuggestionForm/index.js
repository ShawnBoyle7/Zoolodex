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
        e.preventDefault()
        const data = await dispatch(newSuggestion(type, title, description, imgUrl, userId))
        if (data) {
            setErrors(data)
        }
    };

    const updateType = (e) => {
        setType(e.target.value)
    }

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} className="suggestion-form">
            <div className="form-errors">
                {errors.map((error, idx) => 
                <div className="form-error" key={idx}>
                    {error}
                </div>)}
            </div>
            {/* I want to add a required here later */}
            <div className="form-radio">
                <label>
                    <input 
                        type="radio"
                        // I forget what name is for, I think to connect the label/input?
                        name="type"
                        value="option1"
                        onChange={updateType}
                        checked={type === "option1"}/>
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
                        checked={type === "option2"}/>
                </label>
            </div>

            <div className="form-suggestion-title">
                <input 
                    type="text"
                    name="title"
                    onChange={updateTitle}
                    // I forgot how value is used here
                    value={title}
                    required={true}/>
            </div>

            <div className="form-suggestion-description">
                <input
                    type="text"
                    name="description"
                    onChange={updateDescription}
                    value={description}
                    required={true}/>
            </div>
        </form>
    )
};

export default SuggestionForm;