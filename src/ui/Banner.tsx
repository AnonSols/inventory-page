import { ReactNode } from "react";

type BannerType = {
  children: ReactNode;
  className?: string;
};

const Banner = ({ children, className }: BannerType) => {
  return (
    <div
      className={`bg-gradient-to-r from-green-600 text-black to-green-500  dark:from-indigo-500 dark:to-purple-500 w-full flex justify-center  px-4 py-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Banner;
