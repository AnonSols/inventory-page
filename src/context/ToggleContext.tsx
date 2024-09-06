import { createContext, ReactNode, useContext, useState } from "react";

interface ToggleProtocol {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToggleContext = createContext<undefined | NavProtocol>(undefined);

function ToggleProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ToggleContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggleContext() {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("Context was used outside of a provider");
  return context;
}

export default ToggleProvider;
