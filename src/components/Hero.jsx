import React from "react";
import { RiArrowDownLine } from "@remixicon/react";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import { logos } from "@/logos";
import Marquee from "react-fast-marquee";
import BtnMore from "./ui/BtnMore";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col  items-center ">
        <img
          src="/img.png"
          className="h-[19rem] tablet:h-[30rem] desktop:h-[38rem] mt-14 object-contain "
          alt="Hero Image"
        />
      </div>
      <h1 className="font-satoshi font-light text-center text-[4rem] tablet:text-[5rem] desktop:text-[9rem] ">
        Web Designer
      </h1>
      <h1 className="text-[4rem] tablet:text-[5rem] desktop:text-[9rem] font-gambetta font-light italic text-center  leading-3 mt-5 tablet:mt-7 desktop:mt-10">
        & Developer
      </h1>
      <div className="  mt-12 tablet:mt-16 desktop:mt-20  flex justify-center items-center">
        <p className="text-center text-[1.1rem] tablet:text-[1.5rem] font-light  w-[26rem] tablet:w-[36rem] ">
          Premium Web Design, Development, and SEO services to help your business stand out.
        </p>
      </div>
      <div className="flex justify-center items-center  gap-2 mt-12 tablet:mt-16 desktop:mt-20 ">
        <BtnMore btnText="My Services" link="#services" />
      </div>
      <div className=" mt-12 tablet:mt-16 desktop:mt-20   w-[90vw] flex justify-center items-center h-[5rem] ">
        <Marquee
          className="h-[5rem] mx-5 tablet:mx-10 desktop:mx-20 "
          gradient={true}
          gradientColor="var(--background)"
          gradientWidth={200}
          speed={100}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-[2rem] mx-5 "
              loading="lazy"
              style={{
                filter:
                  "invert(93%) sepia(12%) saturate(921%) hue-rotate(328deg) brightness(99%) contrast(87%)",
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
