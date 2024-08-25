import { useEffect } from "react";
import Nav from "./Nav";
import { Outlet, useLocation } from "react-router-dom";
import { useNavContext } from "../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Back from "./Back";
import { DeckButton } from "./DeckButton";
// import { BeamCollitionAnimation } from "./Beam/BeamBackground";

export function AppLayout() {
  const Location = useLocation();
  const { isNavOpened, setisNavOpened } = useNavContext();
  useEffect(() => {
    if (Location.pathname === "/package") setisNavOpened(true);
    else {
      setisNavOpened(false);
    }
  }, [Location.pathname, setisNavOpened]);
  const navigate = useNavigate();
  return (
    // add exploading beams to the background
    <div className="min-h-screen min-w-screen grid grid-rows-[auto_1fr_auto] w-full dark:bg-black dark:bg-dot-white/[0.3] bg-black/[0.96] antialiased bg-grid-white/[0.03] m-0">
      {/* use dynamic nav rendering */}
      {!isNavOpened ? (
        <Nav className="hover:shadow-green-600/20  shadow-green-600/5 ">
          {" "}
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
          <div className="flex items-center justify-around gap-4">
            <ul className="flex text-sm items-center justify-center font-bold gap-4">
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
            <Button
              onClick={() => navigate("/package")}
              containerClassName="rounded-full"
              as="button"
              // className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              {" "}
              Get Started{" "}
            </Button>
          </div>
        </Nav>
      ) : (
        <Nav className="items-center justify-center">
          <Back />

          <DeckButton className="font-bold ">Request for Deck</DeckButton>
        </Nav>
      )}
      <main className=" ">
        {/* <BeamCollitionAnimation>
        </BeamCollitionAnimation> */}
        <Outlet />
      </main>
    </div>
  );
}
