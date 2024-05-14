import { createContext } from 'react';

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  );
};
