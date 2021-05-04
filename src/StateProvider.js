import React, { createContext ,useContext, useReducer } from 'react';
//Prepares dataLayer like Redux
export const StateContext = createContext();

//creates state and wraps in our app like the redux store/provider to provide state from a global store
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);