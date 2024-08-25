import { PinContainer } from "./AnimatedPin";

type PackageCardProp = {
  width?: string;
  height?: string;
  href?: string;
  cardTitle?: string;
  cardTitleColor?: string;
  boxClass?: string;
  childrenDescription: string;
  className?: string;
  containerClassName?: string;
  cardTitleColorGradientTo?: string;
  cardTitleColorGradientFrom?: string;
  cardTitleClassName?: string;
  desciptionColor?: string;
};

export function PackageCard({
  width = "15rem",
  height = "15rem",
  containerClassName,
  cardTitle,
  cardTitleColorGradientTo,
  cardTitleColorGradientFrom,
  cardTitleClassName,
  boxClass,
  className,
  childrenDescription,
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
        className={`flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ${width} ${height}`}
      >
        <h3
          className={`max-w-xs !pb-2 !m-0 font-bold  text-base  bg-gradient-to-b bg-clip-text bg-opacity-50 ${cardTitleColorGradientFrom} ${cardTitleColorGradientTo} ${cardTitleClassName}`}
        >
          {cardTitle}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{childrenDescription}</span>
        </div>
        <div className={`flex flex-1 w-full rounded-lg mt-4 ${boxClass}`} />
      </div>
    </PinContainer>
  );
}
