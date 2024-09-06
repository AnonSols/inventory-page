import { ReactNode } from "react";

type BackgroundType = {
  children: ReactNode;
  className?: string;
};

const Background = ({ children, className }: BackgroundType) => {
  return (
    <div
      className={`min-h-dvh w-full dark:bg-dot-white/[0.3]  md:pb-0 pb-5 antialiased bg-grid-slate-900/[0.06] bg-white m-0 ${className}`}
    >
      {children}
    </div>
    // <div
    //   className={`min-h-dvh w-full dark:bg-black dark:bg-dot-white/[0.3] bg-black/[0.96] mb:pb-0 pb-5 antialiased bg-grid-white/[0.03] m-0 ${className}`}
    // >
    //   {children}
    // </div>
  );
};

export default Background;
