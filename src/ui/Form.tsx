import React,{ ReactNode } from "react";

function ModalForm({ children }: { children: ReactNode,  onSubmit?:(e:React.FormEvent)=>void}) {
  return <form className="modal" >{children}</form>;
}

export default ModalForm;
