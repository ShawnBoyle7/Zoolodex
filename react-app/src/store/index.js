import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import users from './users'
import animals from './animals'
import animal_tags from './animal_tags'
import regions from './regions'
import comments from './comments'
import suggestions from './suggestions'

const rootReducer = combineReducers({
  session,
  animals,
  users,
  animal_tags,
  regions,
  comments,
  suggestions
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
