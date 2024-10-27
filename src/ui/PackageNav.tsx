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
      {/* <div
        class="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6 border-b"
        x-data="{ open: false }"
      >
        <div
          className="flex flex-row items-center justify-between text-sm text-white lg:justify-start"
        >
          <a href="/"
            ><img
              className="max-h-12"
              src="src/img/Main Colored Logo 1.png"
              alt=""
            />
          </a>
          <button
            @click="open = !open"
            className="inline-flex items-center justify-center p-2 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
              />
            </svg>
          </button>
        </div>
        <nav
          :className="{'flex': open, 'hidden': !open}"
          className="flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0"
        >
          <a
            href="index.html"
            className="block px-4 py-2 mt-2 text-sm text-[#916330] focus:outline-none focus:shadow-outline hover:text-white/50 md:mt-0"
            >HOME
          </a>
          <a
            href="index.html#aboutus"
            className="block px-4 py-2 mt-2 text-sm text-black focus:outline-none focus:shadow-outline hover:text-white/50 md:mt-0"
            >ABOUT US</a
          >

          <a
            href="store.html"
            className="block px-4 py-2 mt-2 text-sm text-black focus:outline-none focus:shadow-outline hover:text-white/50 md:mt-0"
            >STORE
          </a>
          <a
            href="php/Reservations.php"
            className="block px-4 py-2 mt-2 text-sm text-black focus:outline-none focus:shadow-outline hover:text-white/50 md:mt-0"
            >RESERVATIONS</a
          >
          <a
            href="Contactus.html"
            className="block px-4 py-2 mt-2 text-sm text-black focus:outline-none focus:shadow-outline hover:text-white/50 md:mt-0"
            >CONTACT US</a
          >
        </nav>
      </div> */}
      <div className="flex items-center justify-around dark:text-neutral-200 gap-4">
        <ul className="flex text-sm sm:text-base  md:text-md items-center justify-center gap-2 sm:gap-4">
          <span className=" text-sm sm:text-base font-bold md:text-md items-center justify-center gap-2 sm:gap-4 hidden lg:flex">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>STORE</li>
            <li>RESERVATIONS</li>
            <li>CONTACT US</li>
          </span>

          <span className="lg:hidden cursor-pointer">
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
