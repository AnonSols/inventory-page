import { useEffect, useState } from "react";
import TempNav from "../ui/PackageNav";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const [fName, setFname] = useState("");
  const [mail, setMail] = useState("");
  // const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "GenesisOrb | Register";

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

    toast.success(" We will Deliver Our Deck Right To Your Mail Box!🥳🥳!");

    navigate("/success");
  }
  return (
    <div className="grid overflow-x-hidden gap-9 grid-rows-[auto_1fr]">
      <header className="mb-6">
        <TempNav />
      </header>
      <main className="flex h-full place-items-center px-4 sm:px-8 flex-col">
        <figure className="mb-8">
          <img
            className="h-14 w-auto cursor-pointer"
            src="/logo.png"
            alt="Genesis orb"
            onClick={() => navigate("/")}
          />
        </figure>

        <section className="grid grid-rows-[auto_auto]  gap-9">
          <p
            className="  tracking-widest
              text-center sm:px-7 lg:w-[800px]"
          >
            interested investors can request our Pitch Deck to learn more about
            the business, including financials, projected growth, and risk
            factors.
          </p>

          <form onSubmit={handleRequest} className="sm:px-8 ">
            <ul className="mt-5 gap-5  flex flex-col">
              <li className="flex   flex-col md:flex-row md:items-center md:justify-center">
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
              <div className=" flex justify-end mb-4">
                <button
                  disabled={(!fName && !mail) || !fName || !mail}
                  className="w-full bg-[#39b54a] disabled:bg-green-[#39b54a]/80 shadow-lg p-3 text-lg rounded-lg outline-none focus:ring-2 focus:offset-2 flex items-center justify-center tracking-wide text-slate-200 mt-4 hover:bg-green-900 hover:shadow-xl md:w-[40%] md:self-end  disabled:cursor-not-allowed "
                >
                  {" "}
                  Request🎊!{" "}
                </button>
              </div>
            </ul>
          </form>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;
