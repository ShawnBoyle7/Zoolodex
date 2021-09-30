import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    // Clarify why we need an else if we should always have data?
    if (data) {
      setErrors(data);
    } else {
      setShowModal(false)
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // What is this for
  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <h2>Log In</h2>
      <div className="form-errors-div">
        {errors.map((error, idx) => (
            <div key={idx}>
              {error}
            </div>))}
      </div>

      <div>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>

      <div>
        <input
          name='password'
          type='password'
          autoComplete="on"
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className="form-buttons-div">
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
