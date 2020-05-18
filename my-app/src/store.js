// Used to maintain global state for login info
import React, {createContext, useReducer} from 'react';

const initialState = {"loggedIn": false};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'logged in':
        return { "loggedIn": true } 
      case 'logged out':
        return { "loggedIn": false } 
    
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }