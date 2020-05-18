import React, { useContext } from 'react';
import { store } from '../store.js';

export default function Test() {
  const globalState = useContext(store);
  console.log(globalState.state.loggedIn); // this will return { color: red }
  const { dispatch } = globalState;
  

  if (globalState.state.loggedIn == false) {
    dispatch({ type: 'authenticated' })
  }

    // Change global state of loggeIn to true

  return (
      <h1> test </h1>
  )

};

