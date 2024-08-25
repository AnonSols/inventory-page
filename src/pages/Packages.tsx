import { useEffect } from "react";
import { PinContainer } from "../ui/AnimatedPin";
import { Highlight } from "../ui/heroHightlighComponent/Highlight";

import { Spotlight } from "../ui/sportlightComponent/Spotlight";

const Packages = () => {
  useEffect(() => {
    document.title = "Genesis | Package";

    return () => {
      document.title = "Genesis | Home";
    };
  }, []);
  return (
    <section className="h-full  flex flex-col md:items-center md:justify-center">
      <Spotlight
        className="-top-[1rem] left-4 md:left-60 md:-top-20"
        fill="green"
      />

      <article
        className=" p-4 max-w-7xl mt:8 md:mt-0  relative z-10  w-full md:pt-0 items-center  justify-center
         grid gap-6 sm:gap-8 md:grid-rows-[1fr] md:grid-cols-[1fr_1fr]"
      >
        <div className="border   border-gray-500 px-4 py-6 sm:px-6 sm:py-8 md:border-none rounded-lg ">
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-neutral-300  to-neutral-600  ">
            Journey With Us
          </h1>
          <div className="flex items-center justify-center flex-col leading-3 px-5">
            <p className="mt-4 font-normal  text-neutral-300 max-w-lg text-center mx-auto tracking-wide md:text-lg md:tracking-wider leading-8 text-sm">
              The global Market for musical instruments is Projectd to reach{" "}
              <br />
              <Highlight className="text-black dark:text-white">
                <b>$10.82 billion by 2025</b>
              </Highlight>
            </p>
            <em className="text-xs md:text-sm text-gray-400 mt-4">
              - Source: <b>Google</b>
            </em>
          </div>
        </div>

        <section className=" flex items-center justify-center flex-col gap-10  rounded-lg">
          <h1 className="text-3xl md:hidden font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-neutral-300  to-neutral-600  ">
            Our Packages
          </h1>

          <ul className="pin w-full backdrop-blur-sm md:flex-row grid grid-rows-1 md:grid-cols-[auto_auto_auto] justify-center gap-4">
            <li>
              {" "}
              <PinContainer
                // containerClassName="h-[50px] w-[50px]"
                // className="h-[100px] w-[100px]"
                title="Gold Package - 500 Million"
                href="https://genesisorb.com"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  bg-gradient-to-b bg-clip-text bg-opacity-50 from-yellow-300  to-orange-600">
                    Gold Package - 500 Million
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Be a{" "}
                      <b className="bg-gradient-to-b bg-clip-text bg-opacity-50  from-yellow-300  to-orange-600 text-md">
                        Gold
                      </b>{" "}
                      investor for 500 Million Naira
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-yellow-500 via-orange-200 to-orange-500" />
                </div>
              </PinContainer>{" "}
            </li>
            <li>
              {" "}
              <PinContainer
                title="Classic Package - 250 Million"
                href="https://genesisorb.com"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  bg-gradient-to-b bg-clip-text bg-opacity-50  from-neutral-300  to-neutral-600">
                    Classic Package - 250 Million
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Be a{" "}
                      <b className="bg-gradient-to-b bg-clip-text bg-opacity-50  from-neutral-300  to-neutral-600 text-md">
                        Classic
                      </b>{" "}
                      investor for 250 Million Naira
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-neutral-500 via-gray-200 to-neutral-500" />
                </div>
              </PinContainer>{" "}
            </li>
            <li>
              {" "}
              <PinContainer
                title="Premuium Package - 50 Million"
                href="https://genesisorb.com"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  bg-gradient-to-b bg-clip-text bg-opacity-50 from-cyan-300  to-green-600">
                    Premium Package - 50 Million
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Be a{" "}
                      <b className="bg-gradient-to-b bg-clip-text bg-opacity-50 from-cyan-300  to-green-600 text-md">
                        Premium
                      </b>{" "}
                      investor for 50 Million Naira
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-cyan-200 to-green-500" />
                </div>
              </PinContainer>{" "}
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
};

export default Packages;
