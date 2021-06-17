export type ContextType = {
  isLoggedInContext: {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
  };
  isDarkModeContext: {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
  };
};
