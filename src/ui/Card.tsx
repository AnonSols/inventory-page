type CardTypes = {
  title: string;
  position: string;
  color: string;
  titleColor: string;
  price: string;
  cardDimensions: string;
};

const Card = ({
  title,
  position,
  color,
  titleColor,
  price,
  cardDimensions,
}: CardTypes) => {
  return (
    <div
      className={`flex basis-full transition-all duration-300 flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 ${cardDimensions} border border-gray-800 bg-black  rounded-xl shadow-xl `}
    >
      <h3
        className={`max-w-xs !pb-2 !m-0 font-bold  text-base  bg-gradient-to-b bg-clip-text bg-opacity-50 ${titleColor} `}
      >
        {title}
      </h3>
      <div className="text-base !m-0 !p-0 font-normal">
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
        className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${color}`}
      />
    </div>
  );
};

export default Card;
