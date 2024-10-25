import { ReactNode } from "react";

type CardTypes = {
  title: string;
  position: string;
  color: string;
  titleColor: string;
  children: ReactNode;
  price: string;
  cardDimensions: string;
};

const Card = ({
  title,
  position,
  color,
  titleColor,
  price,
  children,
  cardDimensions,
}: CardTypes) => {
  color;
  return (
    <div
      className={`flex basis-full transition-all duration-300 flex-col p-6 tracking-tight text-slate-800/50 sm:basis-1/2 ${cardDimensions} border border-green-500/[0.2] !bg-slate-200  rounded-xl shadow-xl `}
    >
      <h3
        className={`max-w-xs !pb-2 !m-0 font-bold  text-base  bg-gradient-to-b bg-clip-text bg-opacity-50 ${titleColor} `}
      >
        {title}
      </h3>
      <div className="text-base  !m-0 !p-0 font-normal">
        <span className=" ">
          Be a{" "}
          <b
            className={`bg-gradient-to-b bg-clip-text bg-opacity-50 ${titleColor} text-md`}
          >
            {position}
          </b>{" "}
          investor for {price} Million Naira
        </span>
      </div>
      <div
        className={`   w-full rounded-lg mt-4 bg-gradient-to-br  h-full relative`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
