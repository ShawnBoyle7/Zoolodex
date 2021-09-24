import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSuggestion } from "../../store/suggestions";

const EditSuggestionForm = ({ suggestionId, setShowModal }) => {
    const dispatch = useDispatch();

    const suggestion = useSelector(state => state.suggestions[suggestionId])

    const [type, setType] = useState(suggestion?.type) 
    const [title, setTitle] = useState(suggestion?.title)
    const [description, setDescription] = useState(suggestion?.description)
    const [imgFile, setImgFile] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(newSuggestion(type, title, description, imgFile, suggestionId))
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
        <form onSubmit={onSubmit} className="suggestion-form">
            <h2>Suggestion Form</h2>
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
                        value="animal"
                        onChange={updateType}
                        checked={type === "animal"}
                        required={true}/>
                    Animal
                </label>
            </div>

            <div className="form-radio">
                <label>
                    <input 
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
                <input
                    type="text"
                    name="description"
                    onChange={updateDescription}
                    value={description}
                    placeholder="Tell us more"
                    required={true}/>
            </div>

            <div className="form-img-upload">
                <label>Show us!</label>
                <input
                    type="file"
                    name="imgFile"
                    onChange={updateImgFile}
                    required={false}/>
            </div>
            <div>
                <button type="submit">Submit</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
        </form>
    )
};

export default EditSuggestionForm;