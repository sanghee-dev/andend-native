import { useContext } from "react";
import { Context } from "./context";
import { ContextType } from "./contextType";

export const UseIsLoggedIn = () => {
  const { isLoggedInContext } = useContext(Context) as ContextType;
  return isLoggedInContext;
};

export const UseIsDarkMode = () => {
  const { isDarkModeContext } = useContext(Context) as ContextType;
  return isDarkModeContext;
};
