import { ReactNode } from "react";

function ModalForm({ children }: { children: ReactNode }) {
  return <form className="modal  ">{children}</form>;
}

export default ModalForm;
