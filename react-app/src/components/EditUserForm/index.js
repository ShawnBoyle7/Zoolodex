import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../store/session';

const EditUserForm = ( { setShowModal } ) => {
    const dispatch = useDispatch();
    
    const user = useSelector(state => state.session.user);

    const [email, setEmail] = useState(user?.email);
    const [username, setUsername] = useState(user?.username);
    const [firstName, setFirstName] = useState(user?.firstName)
    const [lastName, setLastName] = useState(user?.lastName)
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState('');
    const [imgFile, setImgFile] = useState("")
    const [errors, setErrors] = useState([]);

    const onEdit = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
        const data = await dispatch(editUser(email, username, firstName, lastName, password, imgFile, user?.id));
        if (data) {
            setErrors(data)
        } else {
            setShowModal(false)
            }
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    const updateImgFile = (e) => {
        const file = e.target.files[0]
        setImgFile(file)
    };

    return (
        <form className="edit-user-form" onSubmit={onEdit}>
        <div className="form-errors-div">
            {errors.map((error, idx) => (
                <div key={idx}>
                    {error}
                </div>
            ))}
        </div>

        <div>
            <input
            type='integer'
            name='userId'
            value={user?.id}
            hidden
            readOnly
            ></input>
        </div>

        <div>
            <input
            type='text'
            name='email'
            placeholder="Email"
            onChange={updateEmail}
            value={email}
            ></input>
        </div>

        <div>
            <input
            type='text'
            name='username'
            placeholder="Username"
            onChange={updateUsername}
            value={username}
            ></input>
        </div>

        <div>
            <input
            type='text'
            name='firstName'
            placeholder="First Name"
            onChange={updateFirstName}
            value={firstName}
            ></input>
        </div>

        <div>
            <input
            type='text'
            name='lastName'
            placeholder="Last Name"
            onChange={updateLastName}
            value={lastName}
            ></input>
        </div>

        <div>
            <input
            type='password'
            name='password'
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            ></input>
        </div>

        <div>
            <input
            type='password'
            name='repeatPassword'
            placeholder="Confirm Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            ></input>
        </div>

        <div>
            <input
                type="file"
                name="imgFile"
                onChange={updateImgFile}
                required={false}
            />
        </div>

        <div className="form-buttons-div">
            <button type='submit'>Edit</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
        </form>
    );
};

export default EditUserForm;
