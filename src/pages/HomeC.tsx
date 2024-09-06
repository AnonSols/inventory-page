import { Link, useNavigate } from "react-router-dom";
import Background from "../ui/Background";
import Nav from "../ui/Nav";
import Banner from "../ui/Banner";
import { Spotlight } from "../ui/sportlightComponent/Spotlight";
// import { HiX } from "react-icons/hi";
import { Button } from "../ui/Button";
function Home() {
  const navigate = useNavigate();
  return (
    <Background className="grid overscroll-hidden grid-rows-[auto_1fr] ">
      <header>
        <Banner className="flex justify-around items-center">
          <div
            className="font-bold flex-col md:space-x-2 items-center justify-center md:items-center md:flex-row grow flex text-black   mx-auto md:text-md 
           leading-4
           text-xs md:text-sm lg:text-md"
          >
            <p>
              Invest, let's build the future together. We are building an
              eco-system that would worth over 1 Billion by 2039
            </p>
            <Button
              onClick={() => navigate("/package")}
              containerClassName="rounded-full shrink-0 md:gap-x-2 self-start mt-1"
              as="button"
              // className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              {" "}
              Get Started{" "}
            </Button>
          </div>
          {/* <button className="self-center  text-slate-900 rounded-md cursor-pointer font-bold focus:ring focus:ring-orange-700/80 foucs:outline-none  hover:shadow hover:bg-green-900 p-2  ">
            <HiX />
          </button> */}
        </Banner>
        <Nav className="hover:shadow-green-600/20  backdrop-blur-lg shadow-green-600/10  bg-transparent ">
          {" "}
          <Link to="/">
            <span className="text-base sm:text-base font-bold md:text-md dark:text-neutral-200">
              {/* <img
            className="h-12 w-auto"
            src="/logoblackpng.png"
            alt="genesis orb's logo"
            
          /> */}
              Logo
            </span>
          </Link>
          <div className="flex items-center justify-around dark:text-neutral-200 gap-4">
            <ul className="flex text-sm sm:text-base font-bold md:text-md items-center justify-center gap-2 sm:gap-4">
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
           
          </div>
        </Nav>
      </header>

      <main>
        <Spotlight
          className="-top-[.9rem] left-4 lg:left-60 lg:-top-24 md:left-20 md:-top-20"
          fill="green"
        />
        <article
          className="  my-auto relative z-10 w-full pt-20 md:pt-0 flex  flex-col justify-center  h-full place-items-center
          "
        >
          <h1 className=" font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-green-600 to-green-800 text-3xl lg:text-7xl md:text-6xl px-8 sm:text-4xl">
            Welcome to the Future
          </h1>
          <div className="flex items-center justify-center flex-col leading-3 px-5">
            <em className="text-xs lg:text-sm md:text-md text-gray-800 mt-4">
              ~ World's most versatile Musical Instrument ~
            </em>
          </div>
        </article>
      </main>
    </Background>
  );
}

export default Home;
