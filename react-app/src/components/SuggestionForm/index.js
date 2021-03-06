import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSuggestion } from "../../store/suggestions";

const SuggestionForm = ({ setShowModal }) => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session.user.id)

    const [type, setType] = useState("") 
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imgFile, setImgFile] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(newSuggestion(type, title, description, imgFile, userId))
        if (data) {
            setErrors(data)
        // Why else here
        } else {
            setShowModal(false)
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

    const updateImgFile = (e) => {
        const file = e.target.files[0]
        setImgFile(file)
    }

    return(
        <form className="suggestion-form" onSubmit={onSubmit}>
            <h2>Suggestion Form</h2>
            <div className="form-errors">
                {errors.map((error, idx) => 
                    <div className="form-error" key={idx}>
                        {error}
                    </div>)}
            </div>

            <div className="form-radio">
                <label className="radio-label">
                    <input 
                        className="radio"
                        type="radio"
                        // I forget what name is for, I think to connect the label/input?
                        name="type"
                        value="animal"
                        onChange={updateType}
                        checked={type === "animal"}
                        required={true}/>
                    Animal
                </label>
            </div>

            <div className="form-radio">
                <label className="radio-label">
                    <input 
                        className="radio"
                        type="radio"
                        // I forget what name is for, I think to connect the label/input?
                        name="type"
                        value="region"
                        onChange={updateType}
                        checked={type === "region"}
                        required={true}/>
                    Region
                </label>
            </div>

            <div className="form-suggestion-title">
                <input 
                    type="text"
                    name="title"
                    onChange={updateTitle}
                    // I forgot how value is used here
                    value={title}
                    placeholder="Name"
                    required={true}/>
            </div>

            <div className="form-suggestion-description">
                <textarea
                    name="description"
                    onChange={updateDescription}
                    value={description}
                    placeholder="Description"
                    required={true}/>
            </div>

            <div className="form-image-upload">
                <input
                    type="file"
                    name="imgFile"
                    onChange={updateImgFile}
                    required={true}/>
            </div>

            <div className="form-buttons-div">
                <button type="submit">Submit</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
        </form>
    )
};

export default SuggestionForm;