import React from "react";

import Image from "next/image";

const SelectedWorkCard = ({ imageLink, title, subTitle }) => {
  return (
    <div className="w-[90vw]  mt-5">
      <div className="relative grid grid-cols-1 items-end  justify-center gap-4  w-full min-h-[22rem] ">
        <Image
          src={imageLink}
          height={500}
          width={500}
          className=" w-full h-full absolute object-cover object-center outline-1 outline-amber-50/10"
          style={{
            filter: " contrast(90%) grayscale(100%) saturate(82%) sepia(12%)  ",
          }}
        />
        <div className=" absolute w-full    flex items-center justify-center  py-4 ">
          <div className=" w-[90%] h-10 outline-1 outline-amber-50/10  backdrop-blur-sm">
            <div className="flex items-center justify-between w-full h-full px-4">
              <h3 className="text-[1.2rem] font-extralight">{title}</h3>
              <h3 className="uppercase font-satoshi font-light text-[0.8rem] tracking-widest">
                {subTitle}
              </h3>
            </div>
          </div>
        </div>
        {/* <Image src={selectedWorkImages[0].src} height={500} width={500} /> */}
      </div>
    </div>
  );
};

export default SelectedWorkCard;
