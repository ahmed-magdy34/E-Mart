import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("theme context was used outside the scope");
  return context;
}
export { ThemeProvider, useTheme };
