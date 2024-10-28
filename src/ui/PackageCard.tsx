import { PinContainer } from "./AnimatedPin";

type PackageCardProp = {
  href?: string;
  cardTitle?: string;
  src?: string;
  childrenDescription?: string;
  className?: string;
  containerClassName?: string;
  cardTitleColorGradientTo?: string;
  cardTitleColorGradientFrom?: string;
  cardTitleClassName?: string;
  desciptionColor?: string;
  titleColor?: string;
  price?: string;
  position?: string;
  cardDimension?: string;
};

export function PackageCard({
  cardDimension,
  containerClassName,
  cardTitle,
  cardTitleColorGradientTo,
  cardTitleColorGradientFrom,
  cardTitleClassName,
  src,
  className,
  price,
  titleColor,
  position,
  href,
}: PackageCardProp) {
  return (
    <PinContainer
      containerClassName={containerClassName}
      className={className}
      title={cardTitle}
      href={href}
    >
      <div
        className={`flex basis-full flex-col p-4 tracking-tight text-slate-800/50 sm:basis-1/2 ${cardDimension}`}
      >
        <h3
          className={`max-w-xs !pb-2 !m-0 font-bold  text-base  bg-gradient-to-b bg-clip-text bg-opacity-50 ${cardTitleColorGradientFrom} ${cardTitleColorGradientTo} ${cardTitleClassName}`}
        >
          {cardTitle}
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
          className={`   w-full rounded-lg mt-4 bg-gradient-to-br  h-full relative`}
        >
          <img
            src={`${src}`}
            loading="lazy"
            alt={cardTitle}
            className="w-full h-full rounded-md object-cover absolute mb-4"
          />
        </div>
      </div>
    </PinContainer>
  );
}
