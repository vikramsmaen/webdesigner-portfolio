import React from "react";
import SelectedWorkCard from "./ui/SelectedWorkCard";
import { selectedWorkImages } from "@/images";
import BtnMore from "./ui/BtnMore";
const SelectedWork = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  bg-[var(--background)] mb-10">
      <h2 className="text-[var(--foreground)] text-center text-[1.5rem] font-satoshi font-light tracking-widest mt-10 ">
        Selected Work
      </h2>
      <div className=" mt-2 mb-3">
        <BtnMore btnText={"View All"} link={"#"} />
      </div>

      <SelectedWorkCard
        imageLink={selectedWorkImages[0].src}
        title={"Space"}
        subTitle={"web design"}
      />
      <SelectedWorkCard
        imageLink={selectedWorkImages[1].src}
        title={"Space"}
        subTitle={"web design"}
      />
      <SelectedWorkCard
        imageLink={selectedWorkImages[2].src}
        title={"Space"}
        subTitle={"web design"}
      />
      <SelectedWorkCard
        imageLink={selectedWorkImages[3].src}
        title={"Space"}
        subTitle={"web design"}
      />
    </div>
  );
};

export default SelectedWork;
