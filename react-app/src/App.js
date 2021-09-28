import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './store/session';
import { getAnimals } from './store/animals';
import { getUsers } from './store/users';
import { getAnimalTags } from './store/animal_tags';
import { getRegions } from './store/regions';
import { getComments } from './store/comments';
import { getSuggestions } from './store/suggestions';
import { getSightings } from './store/sightings';
import NavigationBar from './components/NavigationBar/index.';
import Animals from './components/Animals';
import Animal from './components/Animal';
import Regions from './components/Regions';
import Home from './components/Home';
import Suggestions from './components/Suggestions';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Region from './components/Region';
import "./index.css"

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory()
  
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
    history.listen(()=>{
      document.querySelector("html").scrollTop = 0
  })
  }, [dispatch]);

  // What
  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationBar sessionUser={sessionUser} authenticated={authenticated}/>
        <Switch>
                <Route exact path="/">
                  <Home authenticated={authenticated}/>
                </Route>

                <Route path="/users/:userId">
                  <Profile/>
                </Route>
                
                <Route exact path="/animals">
                  <Animals/>
                </Route>

                <Route path="/animals/:animalId">
                  <Animal/>
                </Route>

                <Route exact path="/regions">
                  <Regions/>
                </Route>

                <Route path="/regions/:regionId">
                  <Region/>
                </Route>

                <Route path="/suggestions">
                  <Suggestions/>
                </Route>

                <Route>
                  <PageNotFound/>
                </Route>
        </Switch>
    </>
  );
}

export default App;
