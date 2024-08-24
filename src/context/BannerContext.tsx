import { createContext, ReactNode, useContext, useState } from "react";

interface BannerProtocol {
  isBannerOpened: boolean;
  setIsBannerOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
const BannerContext = createContext<undefined | BannerProtocol>(undefined);

function BannerProvider({ children }: { children: ReactNode }) {
  const [isBannerOpened, setIsBannerOpened] = useState(false);
  return (
    <BannerContext.Provider value={{ isBannerOpened, setIsBannerOpened }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBannerContext() {
  const context = useContext(BannerContext);

  if (context === undefined)
    throw new Error("Context was used outside of a provider");
  return context;
}

export default BannerProvider;
