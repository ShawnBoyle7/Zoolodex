import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ( {setShowModal} ) => {
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSignUp = async (e) => {
    e.preventDefault();
      const data = await dispatch(signUp(email, username, firstName, lastName, password, repeatPassword));
      if (data) {
        setErrors(data)
      } else {
          setShowModal(false)
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

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="signup-form" onSubmit={onSignUp}>
      <h2>Sign Up</h2>
      <div className="form-errors-div">
        {errors.map((error, idx) => (
            <div className="form-error" key={idx}>
              {error}
            </div>))}
      </div>

      <div>
        <input
          type='text'
          name='email'
          placeholder="Email"
          onChange={updateEmail}
          value={email}
          required={true}
        ></input>
      </div>

      <div>
        <input
          type='text'
          name='username'
          placeholder="Username"
          onChange={updateUsername}
          value={username}
          required={true}
        ></input>
      </div>

      <div>
        <input
          type='text'
          name='firstName'
          placeholder="First Name"
          onChange={updateFirstName}
          value={firstName}
          required={true}
        ></input>
      </div>

      <div>
        <input
          type='text'
          name='lastName'
          placeholder="Last Name"
          onChange={updateLastName}
          value={lastName}
          required={true}
        ></input>
      </div>

      <div>
        <input
          type='password'
          name='password'
          placeholder="Password"
          onChange={updatePassword}
          value={password}
          required={true}
          autoComplete="on"
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
          autoComplete="on"
        ></input>
      </div>
      <div className="form-buttons-div">
        <button type='submit'>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
