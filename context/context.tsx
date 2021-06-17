import { useState, createContext } from "react";
import { ContextType } from "./contextType";

export const Context = createContext<ContextType | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        isLoggedInContext: {
          isLoggedIn,
          setIsLoggedIn,
        },
        isDarkModeContext: {
          isDarkMode,
          setIsDarkMode,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
