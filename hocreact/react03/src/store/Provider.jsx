/* eslint-disable react/prop-types */
import { reducer, initialState } from "./reducer";
import { createContext, useReducer } from "react";
export const AppContext = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
