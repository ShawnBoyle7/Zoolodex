import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './store/session';
import { getAnimals } from './store/animals';
import { getUsers } from './store/users';
import { getAnimalTags } from './store/animal_tags';
import { getRegions } from './store/regions';
import { getComments } from './store/comments';
import { getSuggestions } from './store/suggestions';
import { getSightings } from './store/sightings';
import NavBar from './components/NavBar';
import Animals from './components/Animals';
import Home from './components/Home';
import Splash from './components/Splash';
import Suggestions from './components/Suggestions';
import Profile from './components/Profile';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  
  const sessionUser = useSelector(state => state.session.user);
  const authenticated = sessionUser !== null;

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
        {authenticated && 
        <>
          <Route path="/" exact={true}>
            <Home/>
          </Route>

          <Route path="/profile">
            <Profile/>
          </Route>
        </>
        }
        {!authenticated && 
        <Route path="/" exact={true}>
          <Splash/>
        </Route>
        }
        
        <Route path="/animals">
          <Animals/>
        </Route>
        <Route path="/suggestions">
          <Suggestions/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
