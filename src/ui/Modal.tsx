import React, {
  cloneElement,
  createContext,
  FormEvent,
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
  btnState,
  onSubmit,
  reset,
}: ModalProtocol & {
  windowsName: string;
  btnState: boolean | undefined;
  onSubmit: () => void;
  reset: () => void;
}) {
  const { isOpenName, close } = useModalContext();

  if (isOpenName !== windowsName) return;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit();

    close();
  }

  function cancleBtn() {
    close();
    reset();
  }
  return createPortal(
    <>
      //overlay, modal
      <section className="z-[1000] fixed inset-0 w-full  h-full backdrop-blur-lg  transition-all duration-300 ">
        <ModalForm>
          <div className="flex w-full  justify-end mb-2">
            <button
              onClick={() => cancleBtn()}
              className="p-3 bg-slate-700/50 rounded-lg focus:ring focus:ring-green-700 outline-none transition-all duration-300 hover:bg-slate-800 hover:text-slate-200 shadow-lg"
            >
              <HiX />
            </button>
          </div>
          <div>
            {children}
            <div className=" flex justify-end">
              <button
                onClick={(e) => handleSubmit(e)}
                disabled={btnState && btnState}
                className="w-full bg-green-800 disabled:bg-green-800/80 shadow-lg p-3 text-lg rounded-lg outline-none focus:ring-2 focus:offset-2 flex items-center justify-center tracking-wide text-slate-200 mt-4 hover:bg-green-900 hover:shadow-xl md:w-[40%] md:self-end  disabled:cursor-not-allowed "
              >
                {" "}
                Request🎊!{" "}
              </button>
            </div>
          </div>
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
