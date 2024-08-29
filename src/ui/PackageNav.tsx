import Back from "./Back";
import { DeckButton } from "./DeckButton";

function Nav() {
  return (
    <nav
      className={`p-6 text-base sm:px-14 md:px-20 sticky lg:px-26 flex shadow-lg items-center bg-transparent  justify-between backdrop-blur-xs transition-all duration-[.3s] 
      `}
    >
      <Back />

          <DeckButton className="font-bold ">Request for Deck</DeckButton>
    </nav>
  );
}

export default Nav;
