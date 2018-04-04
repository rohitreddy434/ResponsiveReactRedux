import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
export default function configureStore(initialState){
    const store = createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
        );
  
  return store;
    // return createStore(
    //     rootReducer,
    //     initialState,
    //     applyMiddleware(thunk, reduxImmutableStateInvariant())
    // );
}