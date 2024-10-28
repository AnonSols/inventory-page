import {
  //  Link,
  useNavigate,
} from "react-router-dom";
import Background from "../ui/Background";
// import Nav from "../ui/Nav";
import Banner from "../ui/Banner";
import { Spotlight } from "../ui/sportlightComponent/Spotlight";
// import { HiX } from "react-icons/hi";
import { Button } from "../ui/Button";
import TempNav from "../ui/PackageNav";
function Home() {
  const navigate = useNavigate();
  return (
    <Background className="grid overscroll-hidden grid-rows-[auto_1fr] relative">
      <header>
        <Banner className="flex justify-around items-center">
          <div
            className="font-bold flex-col md:space-x-2 items-center justify-center md:items-center md:flex-row grow flex text-black   mx-auto md:text-md 
           leading-2 tracking-wide
           text-xs md:text-sm lg:text-md"
          >
            <p>
              Invest in the future of local musical instruments! Join us as we
              build an ecosystem primed for growth, aiming for &#8358;1 billion
              in value by 2038. Grow with us!
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

        <TempNav />
      </header>

      <main>
        <article
          className="    relative z-10 w-full pt-20 md:pt-0 flex  flex-col justify-center  h-full place-items-center

          "
        >
          <Spotlight
            className="-top-[.9rem] left-4 lg:left-60 lg:-top-24 md:left-20 md:-top-20"
            fill="green"
          />
          <div
            className=" z-[-3]  absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center  
"
          />
          <video
            autoPlay
            loop
            muted
            className="absolute z-[-4] top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h1 className=" font-bold text-center bg-clip-text bg-opacity-50 text-transparent text-white text-3xl lg:text-7xl md:text-6xl px-8 sm:text-4xl">
            Welcome to the Future
          </h1>
          <div className="flex items-center justify-center flex-col leading-3 px-5">
            <span className="text-sm text-white lg:text-lg md:text-md  mt-4">
              World's most versatile Musical Instrument
            </span>
          </div>
        </article>
      </main>
    </Background>
  );
}
export default Home;
