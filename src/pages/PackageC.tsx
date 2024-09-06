import { useEffect, useState } from "react";
// import Background from "../ui/Background";
import Nav from "../ui/Nav";
import { Spotlight } from "../ui/sportlightComponent/Spotlight";
import Back from "../ui/Back";
import { DeckButton } from "../ui/DeckButton";
import Modal from "../ui/Modal";
import {
  HeroHighlight,
  Highlight,
} from "../ui/heroHightlighComponent/Highlight";
import Card from "../ui/Card";
import { PackageCard } from "../ui/PackageCard";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
const Packages = () => {
  const [fName, setFname] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "GenesisOrb | Packages";

    return () => {
      document.title = "GenesisOrb | Home";
    };
  }, []);

  function clearFn() {
    setMail("");
    setFname("");
  }
  function handleRequest() {
    if (!mail && !fName) return;

    const data = { fName, mail };

    localStorage.setItem(fName, JSON.stringify(data));

    clearFn();

    toast.success("We'll keep you up-to-date🥳🥳!");

    navigate("/success");
  }
  return (
    <Modal>
      <HeroHighlight className="grid overscroll-x-none grid-rows-[auto_1fr] ">
        <header>
          <Nav className="hover:shadow-green-600/20 backdrop-blur-xs sm:mt-4 lg:mt-0 rounded-xl shadow-green-600/10 ">
            {" "}
            <Back />
            <Modal.Open open="deck">
              <DeckButton className=" lg:font-bold text-[.8rem] shadow-lg text-[inherit] sm:text-base px-3">
                Request for Deck
              </DeckButton>
            </Modal.Open>
            <Modal.Window
              windowsName="deck"
              onSubmit={handleRequest}
              btnState={(!fName && !mail) || !fName || !mail}
              reset={clearFn}
            >
              <p
                className=" text-xl tracking-widest
              text-center"
              >
                We will Deliver Our Deck Right To Your Mail Box!
              </p>

              <ul className="mt-5 deck-ul flex flex-col">
                <li className="flex  flex-col md:flex-row md:items-center md:justify-center">
                  <label htmlFor="name" className="">
                    {" "}
                    full name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fName}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="What's your name!"
                  />
                </li>

                <li className="flex  flex-col md:flex-row md:items-center md:justify-center">
                  <label htmlFor="email" className=" ">
                    {" "}
                    email:
                  </label>
                  <input
                    type="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    id="email"
                    placeholder="What's your email!"
                  />
                </li>
              </ul>
            </Modal.Window>
          </Nav>
        </header>

        <main className="overscroll-x-none">
          <Spotlight
            className="-top-[.9rem] left-4 lg:left-40 md:left-20 md:-top-20 lg:-top-26"
            fill="green"
          />
          <article
            className=" p-4   md:mt-0  z-10  md:pt-0 items-center  justify-center md:items-start
         grid gap-6 sm:gap-8 md:grid-rows-[1fr] lg:grid-cols-[1fr_1fr] md:gap-0"
          >
            <div
              className="border mt-4 md:block flex flex-col border-gray-500 px-123
         sm:px-14 py-4 sm:py-6 self-center md:border-none rounded-lg "
            >
              <h1 className="text-4xl p-1 md:p-6 md:self-start md:text-7xl  font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-green-600 to-green-800  ">
                Journey With Us
              </h1>
              <div className="flex items-center justify-center flex-col leading-3 px-5">
                <p className="mt-4 font-normal   max-w-lg text-center mx-auto tracking-wide md:text-lg md:tracking-wider leading-8 text-sm">
                  The global Market for musical instruments is Project to reach{" "}
                  <br />
                  <Highlight className="text-black p-1 sm:p-2 sm:mt-3 md:mt-6 md:p-1 dark:text-white lg:mt-5">
                    <b>$10.82 billion by 2025</b>
                  </Highlight>
                </p>
                <em className="text-xs md:text-sm text-gray-400 mt-4">
                  - Source: <b>Google</b>
                </em>
              </div>
            </div>

            <section className="pt-4 gap-8 md:gap-0 flex items-center justify-center flex-col   rounded-lg">
              <h1 className="text-3xl lg:hidden font-bold text-center bg-clip-text bg-opacity-50 text-transparent dark:bg-gradient-to-b dark:from-neutral-600  dark:to-neutral-900 bg-gradient-to-b from-green-600 to-green-800 pb-2 ">
                Our Packages
              </h1>

              <article className="hidden  md:flex  ">
                <ul className="backdrop-blur-sm md:backdrop-blur-none md:flex-row grid grid-cols-[auto_auto] md:grid-rows-[auto_auto_auto] md:items-start md:justify-start justify-center md:m-0 md:gap-0 ">
                  <li className="self-start">
                    <PackageCard
                      cardTitle="Gold Package - 500 Million"
                      cardTitleClassName="from-yellow-300  to-orange-600"
                      titleColor="from-yellow-300  to-orange-600"
                      cardDimension=" w-[12rem] md:w-[14rem]  md:h-[16rem]  h-[14rem] "
                      position="Gold"
                      price="500"
                      boxClass="bg-gradient-to-br from-yellow-500 via-orange-200 to-orange-500"
                    />
                  </li>
                  <li className=" row-span-2 items-center self-center">
                    <PackageCard
                      cardTitle="Classic Package - 250 Million"
                      cardTitleClassName="from-neutral-500 via-gray-200 to-neutral-500"
                      titleColor="from-neutral-300 to-neutral-600"
                      cardDimension="  w-[14rem] h-[16rem]  md:w-[16rem] md:h-[18rem]"
                      position="Classic"
                      price="250"
                      boxClass="bg-gradient-to-br from-neutral-500 via-gray-200 to-neutral-500"
                    />
                  </li>
                  <li className="justify-content-end">
                    <PackageCard
                      cardTitle="Gold Package - 50 Million"
                      cardTitleClassName="from-cyan-300  to-green-600"
                      titleColor="from-cyan-300  to-green-600"
                      cardDimension=" w-[12rem] md:w-[14rem]  md:h-[16rem]  h-[14rem] "
                      position="Premium"
                      price="50"
                      boxClass="bg-gradient-to-br from-green-500 via-cyan-200 to-green-500"
                    />
                  </li>
                </ul>
              </article>

              <article className=" md:hidden flex ">
                <ul className=" md:hidden backdrop-blur-sm flex flex-col gap-4 justify-center items-center">
                  <li>
                    <Card
                      title="Gold  Package - 500 Million"
                      position="Gold"
                      color="from-yellow-500 via-orange-200 to-orange-500"
                      price="500"
                      cardDimensions="w-[16rem] h-[19rem]  sm:w-[18rem] sm:h-[20rem]  "
                      titleColor="from-yellow-300  to-orange-600"
                    />
                  </li>
                  <li>
                    <Card
                      cardDimensions="w-[18rem] sm:w-[20rem] sm:h-[22rem]  h-[20rem]"
                      title="Classic  Package - 250 Million"
                      position="Classic"
                      color=" from-neutral-500 via-gray-200 to-neutral-500"
                      price="250"
                      titleColor="from-neutral-300 to-neutral-600"
                    />
                  </li>
                  <li>
                    <Card
                      cardDimensions="sm:w-[18rem] sm:h-[20rem]  w-[16rem] h-[19rem] "
                      title="Premium  Package - 50 Million"
                      position="Premium"
                      color="from-green-500 via-cyan-200 to-green-500"
                      price="50"
                      titleColor="from-cyan-300  to-green-600"
                    />
                  </li>
                </ul>
              </article>
            </section>
          </article>
        </main>
      </HeroHighlight>
      {/* <Background className="grid overscroll-x-none grid-rows-[auto_1fr] ">
        <header>
          <Nav className="hover:shadow-green-600/20  shadow-green-600/10 ">
            {" "}
            <Back />
            <Modal.Open open="deck">
              <DeckButton className=" lg:font-bold text-[.8rem] shadow-lg text-[inherit] sm:text-base px-3">
                Request for Deck
              </DeckButton>
            </Modal.Open>
            <Modal.Window
              windowsName="deck"
              onSubmit={handleRequest}
              btnState={(!fName && !mail) || !fName || !mail}
              reset={clearFn}
            >
              <p
                className=" text-xl tracking-widest
              text-center"
              >
                We will Deliver Our Deck Right To Your Mail Box!
              </p>

              <ul className="mt-5 deck-ul flex flex-col">
                <li className="flex  flex-col md:flex-row md:items-center md:justify-center">
                  <label htmlFor="name" className="">
                    {" "}
                    full name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fName}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="What's your name!"
                  />
                </li>

                <li className="flex  flex-col md:flex-row md:items-center md:justify-center">
                  <label htmlFor="email" className=" ">
                    {" "}
                    email:
                  </label>
                  <input
                    type="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    id="email"
                    placeholder="What's your email!"
                  />
                </li>
              </ul>
            </Modal.Window>
          </Nav>
        </header>

        <main className="overscroll-x-none">
          <Spotlight
            className="-top-[.9rem] left-4 lg:left-40 md:left-20 md:-top-20 lg:-top-26"
            fill="green"
          />
          <article
            className=" p-4   md:mt-0  z-10  md:pt-0 items-center  justify-center md:items-start
         grid gap-6 sm:gap-8 md:grid-rows-[1fr] lg:grid-cols-[1fr_1fr] md:gap-0"
          >
            <div
              className="border mt-4 md:block flex flex-col border-gray-500 px-123
         sm:px-14 py-4 sm:py-6 self-center md:border-none rounded-lg "
            >
              <h1 className="text-5xl md:self-start md:text-7xl font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-neutral-400  to-neutral-700  ">
                Journey With Us
              </h1>
              <div className="flex items-center justify-center flex-col leading-3 px-5">
                <p className="mt-4 font-normal   max-w-lg text-center mx-auto tracking-wide md:text-lg md:tracking-wider leading-8 text-sm">
                  The global Market for musical instruments is Project to reach{" "}
                  <br />
                  <Highlight className="text-black p-1 sm:p-2 sm:mt-3 md:mt-4 md:p-1 dark:text-white lg:mt-5">
                    <b>$10.82 billion by 2025</b>
                  </Highlight>
                </p>
                <em className="text-xs md:text-sm text-gray-400 mt-4">
                  - Source: <b>Google</b>
                </em>
              </div>
            </div>

            <section className="pt-4 gap-8 md:gap-0 flex items-center justify-center flex-col   rounded-lg">
              <h1 className="text-3xl lg:hidden font-bold text-center bg-clip-text bg-opacity-50 text-transparent bg-gradient-to-b from-neutral-400  to-neutral-700  ">
                Our Packages
              </h1>

              <article className="hidden  md:flex  ">
                <ul className="backdrop-blur-sm md:backdrop-blur-none md:flex-row grid grid-cols-[auto_auto] md:grid-rows-[auto_auto_auto] md:items-start md:justify-start justify-center md:m-0 md:gap-0 ">
                  <li className="self-start">
                    <PackageCard
                      cardTitle="Gold Package - 500 Million"
                      cardTitleClassName="from-yellow-300  to-orange-600"
                      titleColor="from-yellow-300  to-orange-600"
                      cardDimension=" w-[12rem] md:w-[14rem]  md:h-[16rem]  h-[14rem] "
                      position="Gold"
                      price="500"
                      boxClass="bg-gradient-to-br from-yellow-500 via-orange-200 to-orange-500"
                    />
                  </li>
                  <li className=" row-span-2 items-center self-center">
                    <PackageCard
                      cardTitle="Classic Package - 250 Million"
                      cardTitleClassName="from-neutral-500 via-gray-200 to-neutral-500"
                      titleColor="from-neutral-300 to-neutral-600"
                      cardDimension="  w-[14rem] h-[16rem]  md:w-[16rem] md:h-[18rem]"
                      position="Classic"
                      price="250"
                      boxClass="bg-gradient-to-br from-neutral-500 via-gray-200 to-neutral-500"
                    />
                  </li>
                  <li className="justify-content-end">
                    <PackageCard
                      cardTitle="Gold Package - 50 Million"
                      cardTitleClassName="from-cyan-300  to-green-600"
                      titleColor="from-cyan-300  to-green-600"
                      cardDimension=" w-[12rem] md:w-[14rem]  md:h-[16rem]  h-[14rem] "
                      position="Premium"
                      price="50"
                      boxClass="bg-gradient-to-br from-green-500 via-cyan-200 to-green-500"
                    />
                  </li>
                </ul>
              </article>

              <article className=" md:hidden flex ">
                <ul className=" md:hidden backdrop-blur-sm flex flex-col gap-4 justify-center items-center">
                  <li>
                    <Card
                      title="Gold  Package - 500 Million"
                      position="Gold"
                      color="from-yellow-500 via-orange-200 to-orange-500"
                      price="500"
                      cardDimensions="w-[16rem] h-[19rem]  sm:w-[18rem] sm:h-[20rem]  "
                      titleColor="from-yellow-300  to-orange-600"
                    />
                  </li>
                  <li>
                    <Card
                      cardDimensions="w-[18rem] sm:w-[20rem] sm:h-[22rem]  h-[20rem]"
                      title="Classic  Package - 250 Million"
                      position="Classic"
                      color=" from-neutral-500 via-gray-200 to-neutral-500"
                      price="250"
                      titleColor="from-neutral-300 to-neutral-600"
                    />
                  </li>
                  <li>
                    <Card
                      cardDimensions="sm:w-[18rem] sm:h-[20rem]  w-[16rem] h-[19rem] "
                      title="Premium  Package - 50 Million"
                      position="Premium"
                      color="from-green-500 via-cyan-200 to-green-500"
                      price="50"
                      titleColor="from-cyan-300  to-green-600"
                    />
                  </li>
                </ul>
              </article>
            </section>
          </article>
        </main>
      </Background> */}
    </Modal>
  );
};

export default Packages;
