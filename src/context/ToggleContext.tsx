import { createContext, ReactNode, useContext, useState } from "react";

interface ToggleProtocol {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  ConfettiToggle: boolean;
  setConfettiToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToggleContext = createContext<undefined | ToggleProtocol>(undefined);

function ToggleProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ConfettiToggle, setConfettiToggle] = useState(false);
  return (
    <ToggleContext.Provider
      value={{ isDarkMode, setIsDarkMode, ConfettiToggle, setConfettiToggle }}
    >
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
