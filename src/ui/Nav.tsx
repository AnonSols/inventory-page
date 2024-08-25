import { ReactNode } from "react";

interface NavType {
  className?: string;
  children: ReactNode;
}
function Nav({ className, children }: NavType) {
  return (
    <nav
      className={`p-6 sm:px-14 md:px-20 sticky lg:px-26 flex shadow-lg items-center bg-transparent  justify-between backdrop-blur-xs transition-all duration-[.3s] ${className}
      `}
    >
      {children}
    </nav>
  );
}

export default Nav;
