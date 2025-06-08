import React from "react";
import Image from "next/image";

const SelectedWorkCard = ({ imageLink, title, subTitle, category, year }) => {
  return (
    <div className="w-full group cursor-pointer">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={imageLink}
          fill
          className="object-cover object-center transition-all duration-300 group-hover:scale-105"
          style={{
            filter: "contrast(90%) grayscale(100%) saturate(82%) sepia(12%)",
          }}
          alt={`${title} - ${subTitle}`}
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-80" />{" "}
        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 tablet:p-6">
          <div className="bg-black/20 backdrop-blur-sm border border-amber-50/10 rounded-lg p-3 tablet:p-4 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[var(--foreground)] text-lg tablet:text-xl font-light leading-tight">
                  {title}
                </h3>
                <p className="text-amber-50/80 uppercase font-satoshi font-light text-xs tablet:text-sm tracking-widest mt-1">
                  {subTitle}
                </p>
              </div>
              <div className="text-right">
                {category && (
                  <p className="text-amber-50/60 text-xs uppercase tracking-wide">{category}</p>
                )}
                {year && <p className="text-amber-50/40 text-xs mt-1">{year}</p>}
              </div>
            </div>
          </div>
        </div>
        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 border border-amber-50/60 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-amber-50/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWorkCard;
