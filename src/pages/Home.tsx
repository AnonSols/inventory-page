import { Spotlight } from "../ui/sportlightComponent/Spotlight";
import { Highlight } from "../ui/heroHightlighComponent/Highlight";

const Home = () => {
  return (
    <section className=" h-[inherit] flex flex-col items-center justify-center">
      <Spotlight
        className="-top-[1.4rem] left-4 md:left-60 md:-top-20"
        fill="green"
      />

      <article
        className=" p-4 my-auto relative z-10 w-full pt-20 md:pt-0 flex items-center flex-col justify-center 
          "
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-orange-200 to-green-500 ">
          Welcome to the Future
        </h1>
        <div className="flex items-center justify-center flex-col leading-3 px-5">
          <p className="mt-4 font-normal  text-neutral-300 max-w-lg text-center mx-auto tracking-wide md:text-lg md:tracking-wider leading-7 text-sm">
            Invest, let's build the future together. We are building an
            eco-system that would worth over{" "}
            <Highlight className="text-black dark:text-white">
              <b>1 Billion by 2039</b>
            </Highlight>
          </p>
          <em className="text-xs md:text-sm text-gray-400 mt-4">
            ~ World's most versatile Musical Instrument ~
          </em>
        </div>
      </article>
    </section>
  );
};

export default Home;
