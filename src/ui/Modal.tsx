import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

type ModalContextType = {
  isOpenName: string;
  close: () => void;
  setisOpenName: React.Dispatch<React.SetStateAction<string>>;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProtocol {
  children: ReactNode;
}

function Modal({ children }: ModalProtocol) {
  const [isOpenName, setisOpenName] = useState("");

  const close = () => setisOpenName("");
  return (
    <ModalContext.Provider value={{ close, isOpenName, setisOpenName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  open: opensWindowName,
}: ModalProtocol & { open: string }) {
  const { setisOpenName: open } = useModalContext();

  return cloneElement(children as ReactElement, {
    onClick: () => open(opensWindowName),
  });
}

function Window({
  children,
  windowsName,
}: ModalProtocol & { windowsName: string }) {
  const { isOpenName } = useModalContext();

  if (isOpenName !== windowsName) return;

  return createPortal(
    <>
      //overlay, modal
      <div className="absolute inset-0 w-full min-h-screen background-blur-sm bg-gray-200">{children}</div>
    </>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export function useModalContext() {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error("Context was used outside of a provider");

  return context;
}

export default Modal;
