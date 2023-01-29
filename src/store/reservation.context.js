import React, { createContext, useReducer } from "react";

const ReservationContext = createContext();

const initialState = {
  value: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, value: action.payload };
    case "remove":
      return { ...state, value: {} };
    default:
      return state;
  }
};

const ReservationContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ReservationContext.Provider value={{ state, dispatch }} {...props} />;
};

export { ReservationContext, ReservationContextProvider };
