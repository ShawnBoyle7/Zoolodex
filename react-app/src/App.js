import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Animals from './components/Animals';
import { authenticate } from './store/session';
import { getAnimals } from './store/animals';
import { getUsers } from './store/users';
import { getAnimalTags } from './store/animal_tags';
import { getRegions } from './store/regions';
import { getComments } from './store/comments';
import { getSuggestions } from './store/suggestions';
import { getSightings } from './store/sightings';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  // What is all this? Any time one of these dispatches is called it will listen to that and run them?
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAnimals());
      await dispatch(getUsers());
      await dispatch(getAnimalTags());
      await dispatch(getRegions());
      await dispatch(getComments());
      await dispatch(getSuggestions());
      await dispatch(getSightings());
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
        <Route path="/" exact={true}>
          <h1>My Home Page</h1>
        </Route>
        <Route path="/animals">
          <Animals/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
