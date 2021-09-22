import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route>

        </Route>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>  */}
        {/* <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
