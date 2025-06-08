import React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const BtnMore = ({ btnText, link }) => {
  return (
    <div>
      <a href={link} rel="noopener noreferrer">
        <div className="group flex  items-center  gap-4 mt-6 cursor-pointer">
          <div className="outline-1 outline-amber-50/20 bg-stone-700/20 p-2 rounded-full group-hover:bg-stone-700/40 group-hover:outline-amber-50/40 group-hover:rotate-45 transition-all duration-300">
            <ArrowUpRightIcon size={20} weight="thin" />
          </div>
          <h3 className="font-satoshi font-normal uppercase tracking-widest text-[1rem]">
            {btnText}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default BtnMore;
