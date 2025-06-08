import React from "react";
import SelectedWorkCard from "./ui/SelectedWorkCard";
import { selectedWorkData } from "@/data/selectedWorkData";
import BtnMore from "./ui/BtnMore";

const SelectedWork = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[var(--background)] mb-10">
      <h2 className="text-[var(--foreground)] text-center text-[1.5rem] font-satoshi font-light tracking-widest mt-10">
        Selected Work
      </h2>
      <div className="mt-2 mb-8">
        <BtnMore btnText={"View All"} link={"#"} />
      </div>{" "}
      {/* Responsive Grid Layout */}
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-8">
          {selectedWorkData.map((work) => (
            <SelectedWorkCard
              key={work.id}
              imageLink={work.imageLink}
              title={work.title}
              subTitle={work.subTitle}
              category={work.category}
              year={work.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
