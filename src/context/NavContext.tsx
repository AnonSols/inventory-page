import { createContext, ReactNode, useContext, useState } from "react";

interface NavProtocol {
  isNavOpened: boolean;
  setisNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavContext = createContext<undefined | NavProtocol>(undefined);

function NavProvider({ children }: { children: ReactNode }) {
  const [isNavOpened, setisNavOpened] = useState(false);
  return (
    <NavContext.Provider value={{ isNavOpened, setisNavOpened }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);

  if (context === undefined)
    throw new Error("Context was used outside of a provider");
  return context;
}

export default NavProvider;
