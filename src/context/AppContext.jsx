import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <AppContext.Provider value={{ toggleView, setToggleView }}>
      {children}
    </AppContext.Provider>
  );
};
