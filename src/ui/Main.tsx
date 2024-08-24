import { ReactNode } from "react";
import Nav from "../ui/Nav";

interface backgroundTypes {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Main({ children }: backgroundTypes) {
  return (
    <div className="h-dvh grid grid-rows-[auto_1fr_auto] w-full dark:bg-black dark:bg-dot-white/[0.3] bg-black/[0.96] antialiased bg-grid-white/[0.02]  ">
      {/* Render the Nav conditionally */}
      <Nav />
      <main className="h-full  flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
