import React from "react";
import { ProcessCard } from "@/components/ui/ProcessCard";
import { processData } from "@/data/processData";

const Process = () => {
  return (
    <div className="mt-6 tablet:mt-10 w-[90vw] max-w-7xl mx-auto mb-10">
      <div className="heading flex flex-col items-center mb-8 tablet:mb-12 desktop:mb-16 px-4">
        <h3 className="uppercase font-satoshi font-light tracking-widest text-xs tablet:text-sm desktop:text-base">
          the process
        </h3>
        <h1 className="font-satoshi font-extralight text-5xl  mt-2 tablet:mt-3 text-center">
          Your Website
        </h1>
        <h1 className="font-gambetta font-extralight italic text-5xl  my-2 tablet:my-4 desktop:my-6 leading-tight text-center">
          in 5 steps
        </h1>
        <p className="text-center mt-3 tablet:mt-4 desktop:mt-6 text-sm tablet:text-base desktop:text-lg max-w-2xl leading-relaxed">
          Our process ensures that we create a website tailored to your business needs.
        </p>
      </div>
      {/* Mobile Layout - Single Column */}
      <div className="block tablet:hidden">
        <div className="flex flex-col">
          {processData.map((process, index) => (
            <div key={process.id} className="flex flex-col items-center">
              {/* Timeline number */}
              <div className="flex flex-col items-center w-full">
                <div className="outline-1 outline-amber-50/20 size-10 flex items-center justify-center bg-stone-700/20 rounded-full mb-4">
                  <h3 className="text-center text-[0.9rem] leading-0">
                    {process.id.toString().padStart(2, "0")}
                  </h3>
                </div>
                {/* Line connecting number to card */}
                <div className="w-[0.1px] h-8 bg-amber-50 mb-4"></div>
              </div>

              {/* Process Card */}
              <div className="w-full mb-8">
                <ProcessCard
                  duration={process.duration}
                  subtitle={process.subtitle}
                  title={process.title}
                  description={process.description}
                  features={process.features}
                />
              </div>

              {/* Line connecting card to next number (except for last item) */}
              {index < processData.length - 1 && (
                <div className="w-[0.1px] h-8 bg-amber-50 mb-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>{" "}
      {/* Desktop Layout - Zigzag Timeline */}
      <div className="hidden tablet:block">
        <div className="relative">
          {/* Central Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-amber-50 h-full z-10"></div>

          <div className="space-y-16">
            {processData.map((process, index) => (
              <div key={process.id} className="relative flex items-center">
                {/* Timeline number in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="outline-1 outline-amber-50/20 size-12 flex items-center justify-center bg-stone-700 rounded-full">
                    <h3 className="text-center text-[1rem] leading-0">
                      {process.id.toString().padStart(2, "0")}
                    </h3>
                  </div>
                </div>

                {/* Process Cards - Alternating left and right */}
                {index % 2 === 0 ? (
                  // Even index - Card on the left
                  <div className="w-full flex justify-start pr-[55%]">
                    <div className="w-full">
                      <ProcessCard
                        duration={process.duration}
                        subtitle={process.subtitle}
                        title={process.title}
                        description={process.description}
                        features={process.features}
                      />
                    </div>
                  </div>
                ) : (
                  // Odd index - Card on the right
                  <div className="w-full flex justify-end pl-[55%]">
                    <div className="w-full">
                      <ProcessCard
                        duration={process.duration}
                        subtitle={process.subtitle}
                        title={process.title}
                        description={process.description}
                        features={process.features}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
