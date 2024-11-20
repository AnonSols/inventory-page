import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";

function TempNav() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {" "}
      <Nav className="hover:shadow-green-600/20  backdrop-blur-lg shadow-green-600/10  bg-transparent ">
        {" "}
        <Link to="/">
          <figure className="text-base sm:text-base font-bold md:text-md dark:text-neutral-200">
            <img
              className="h-12 w-auto"
              src="/logo.png"
              alt="GenesisOrb"
              loading="lazy"
            />
          </figure>
        </Link>
        <div className="flex items-center justify-around dark:text-neutral-200 gap-4">
          <ul className="flex text-sm sm:text-base  md:text-md items-center justify-center gap-2 sm:gap-4">
            <span className=" text-sm sm:text-base font-bold md:text-md items-center justify-center gap-2 sm:gap-4 hidden lg:flex">
              <li>
                <a href="https://genesisorb.com/index.html">HOME</a>
              </li>
              <li>
                <a href="https://genesisorb.com/index.html#aboutus">ABOUT US</a>
              </li>
              <li>
                <a href="https://genesisorb.com/store.html">STORE</a>
              </li>
              <li>
                <a href="https://genesisorb.com/php/Reservations.php">
                  RESERVATIONS
                </a>
              </li>
              <li>
                <a href="https://genesisorb.com/php/Reservations.php">
                  CONTACT US
                </a>
              </li>
            </span>

            <span
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpened((open) => !open)}
            >
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
      {isOpened && (
        <section className="py-4 bg-white md:hidden ">
          <ul className="flex flex-col  gap-4 place-items-center">
            <li>
              <a href="https://genesisorb.com/index.html">HOME</a>
            </li>
            <li>
              <a href="https://genesisorb.com/index.html#aboutus">ABOUT US</a>
            </li>
            <li>
              <a href="https://genesisorb.com/store.html">STORE</a>
            </li>
            <li>
              <a href="https://genesisorb.com/php/Reservations.php">
                RESERVATIONS
              </a>
            </li>
            <li>
              <a href="https://genesisorb.com/php/Reservations.php">
                CONTACT US
              </a>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default TempNav;
