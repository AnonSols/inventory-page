import { useEffect } from "react";
import Background from "../ui/Background";
import { Spotlight } from "../ui/sportlightComponent/Spotlight";
import { Link } from "react-router-dom";
import Nav from "../ui/Nav";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "GenesisOrb | Congratulations 🍾";

    return () => {
      document.title = "GenesisOrb";
    };
  }, []);
  return (
    <Background className="grid overscroll-hidden grid-rows-[auto_1fr]  items-center justify-center w-full h-full">
      <Nav className="hover:shadow-green-600/20  backdrop-blur-lg shadow-green-600/10  bg-transparent ">
        {" "}
        <Link to="/">
          <span className="text-base sm:text-base font-bold md:text-md dark:text-neutral-200">
            <img
              className="h-12 w-auto"
              src="/public/logo.png"
              alt="genesis orb's logo"
            />
          </span>
        </Link>
        <div className="flex items-center justify-around dark:text-neutral-200 gap-4">
          <ul className="flex text-sm sm:text-base font-bold md:text-md items-center justify-center gap-2 sm:gap-4">
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </Nav>

      <article
        className="  my-auto relative z-10 w-full pt-20 md:pt-0 flex  flex-col justify-center  h-full place-items-center
          "
      >
        <Spotlight
          className="-top-[.9rem] hidden md:block left-4 lg:left-60 lg:-top-29 md:left-20 md:-top-20"
          fill="green"
        />
        <h1 className=" font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-green-600 to-green-800 text-3xl lg:text-7xl md:text-6xl px-8 sm:text-4xl p-6">
          404
          <br />
        </h1>
        <h1 className=" font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-green-600 to-green-800 text-3xl lg:text-7xl md:text-6xl px-8 sm:text-4xl p-6">
          Page Not Found!
        </h1>
       
      </article>
    </Background>
  );
};

export default PageNotFound;
