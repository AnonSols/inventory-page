import React, { ReactNode } from "react";

function ModalForm({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}) {
  return (
    <form className="modal" onSubmit={(e) => onSubmit && onSubmit(e)}>
      {children}
    </form>
  );
}

export default ModalForm;
