import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import { authenticate } from './store/session';
import { getAnimals } from './store/animals';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  // What is all this?
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAnimals());
      // What is this?
      setLoaded(true);
    })();
  }, [dispatch]);

  // What
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
