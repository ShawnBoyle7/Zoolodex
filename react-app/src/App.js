import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
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
        <Route path='/' exact={true}>
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
