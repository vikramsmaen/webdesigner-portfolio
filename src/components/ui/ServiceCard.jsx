import React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import BtnMore from "./BtnMore";
export const ServiceCard = ({ cardNumber, title, description, btnText, btnLink }) => {
  return (
    <div>
      <div className="my-1 ">
        <div className="flex flex-col justify-around bg-[var(--card-background)] outline-1 outline-amber-50/20  w-full p-6  ">
          <h4 className="text-stone-500">{cardNumber}</h4>
          <h1 className="font-satoshi font-normal uppercase tracking-widest text-[1.3rem]">
            {title}
          </h1>
          <p className="mt-2   ">{description}</p>

          <div className="mt-6">
            <BtnMore btnText={btnText} link={btnLink} />
          </div>
        </div>
      </div>
    </div>
  );
};
