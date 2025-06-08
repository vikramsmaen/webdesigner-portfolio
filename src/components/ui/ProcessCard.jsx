import React from "react";

export const ProcessCard = ({ duration, subtitle, title, description, features }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center   p-3  outline-1 outline-amber-50/10 bg-stone-700/20">
        <div className="flex flex-col  justify-center w-full  p-5">
          <div className=" outline outline-amber-50/20 px-2 block w-fit mb-7">
            <h3 className="uppercase text-[0.9rem] font-satoshi font-light ">{duration}</h3>
          </div>
          <h3 className="uppercase text-[0.9rem] font-satoshi font-light text-stone-500 ">
            {subtitle}
          </h3>
          <h1 className="uppercase text-[1.3rem] font-satoshi font-light mb-3 ">{title}</h1>
          <p className="text-[0.9rem]  font-light mb-5">{description}</p>
          <ul className="list-disc pl-5">
            {features.map((feature, index) => (
              <li key={index} className="text-[0.9rem]  font-light mb-5">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
