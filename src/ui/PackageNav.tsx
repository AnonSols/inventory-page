import { Link } from "react-router-dom";
import Nav from "./Nav";

function TempNav() {
  return (
    <Nav className="hover:shadow-green-600/20  backdrop-blur-lg shadow-green-600/10  bg-transparent ">
      {" "}
      <Link to="/">
        <span className="text-base sm:text-base font-bold md:text-md dark:text-neutral-200">
          <img className="h-12 w-auto" src="/logo.png" alt="GenesisOrb" />
        </span>
      </Link>
      <div className="flex items-center justify-around dark:text-neutral-200 gap-4">
        <ul className="flex text-sm sm:text-base font-bold md:text-md items-center justify-center gap-2 sm:gap-4">
          <span className=" text-sm sm:text-base font-bold md:text-md items-center justify-center gap-2 sm:gap-4 hidden md:flex"> 
            <li>Instagram</li>
            <li>Twitter</li>
          </span>

        <span className="md:hidden">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
           </span>
        </ul>
      </div>
    </Nav>
  );
}

export default TempNav;
