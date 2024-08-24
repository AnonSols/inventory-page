import { Link } from "react-router-dom";
import { Button } from "./Button";

function Nav() {
  return (
    <nav
      className="p-6 sm:px-14 md:px-20 lg:px-24 flex shadow-lg shadow-green-600/5 items-center bg-transparent  justify-between 
      "
      // backdrop-blur-lg bg-slate-200 shadow-lg shadow-green-600/20
    >
      <Link to="/">
        <span className="text-xl font-bold text-white">
          {/* <img
            className="h-12 w-auto"
            src="/logoblackpng.png"
            alt="genesis orb's logo"
            
          /> */}
          Logo
        </span>
      </Link>
      <Button
        containerClassName="rounded-full"
        as="button"
        // className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        {" "}
        Get Started{" "}
      </Button>
    </nav>
  );
}

export default Nav;
