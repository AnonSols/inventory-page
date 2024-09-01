import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import ModalForm from "./Form";

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
  const { isOpenName, close } = useModalContext();

  if (isOpenName !== windowsName) return;

  return createPortal(
    <>
      //overlay, modal
      <section className="z-[1000] fixed inset-0 w-full  h-full backdrop-blur-lg  transition-all duration-300 ">
        <ModalForm>
          <button onClick={() => close()}>
            <HiX />
          </button>
          <div>{children}</div>
        </ModalForm>
      </section>
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
