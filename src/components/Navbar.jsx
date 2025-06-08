"use client";
import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react"; // Import Remix icons

const Navbar = () => {
  const isOpen = useState(false);

  const navLinksMobile = [
    { name: "Services", href: "/" },
    { name: "About", href: "/projects" },
    { name: "Work", href: "/contact" },
    { name: "Blog", href: "/contact" },
    { name: "Pricing", href: "/contact" },
    { name: "Styleguide", href: "/contact" },
  ];

  const navLinksDesktop = [
    { name: "Services", href: "/" },
    { name: "About", href: "/projects" },
    { name: "Work", href: "/contact" },
    { name: "Blog", href: "/contact" },
  ];

  return (
    <nav className=" z-40 fixed w-[90vw] mobile:[90vw]  tablet:max-w-4xl  h-[4rem] backdrop-blur-2xl bg-stone-700/20 outline-1 outline-amber-50/20 mt-5 top-0 ">
      {/* Logo */}
      <div className="flex items-center justify-between  w-full h-full px-4">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl">dominic.</h1>
        </div>
        {/* Navigation Links desktop */}
        <div className=" uppercase text-[var(--foreground)] cursosor-pointer text-[13px] font-satoshi font-normal tracking-widest  mobile:hidden  tablet:block   ">
          {navLinksDesktop.map((link) => (
            <a key={link.name} href={link.href} className=" mx-4">
              {link.name}
            </a>
          ))}
        </div>
        <button className=" bg-[var(--foreground)] text-[var(--background)] py-2 px-4 rounded cursor-pointer text-[13px] font-satoshi font-normal tracking-widest mobile:hidden  tablet:block">
          LET'S TALK
        </button>
        {/* Mobile Navbar menu icon */}
        <div className="mobile:flex mobile:items-center mobile:justify-center mobile:gap-3 desktop:hidden tablet:hidden">
          <button className=" bg-[var(--foreground)] text-[var(--background)] py-2 px-4 rounded cursor-pointer text-[13px] font-satoshi font-normal tracking-widest mobile:block  tablet:hidden">
            LET'S TALK
          </button>
          <button
            onClick={() => isOpen[1](!isOpen[0])}
            className="w-12 h-12 flex items-center justify-center focus:outline-none"
            aria-label={isOpen[0] ? "Close menu" : "Open menu"}>
            {isOpen[0] ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
        {isOpen[0] && (
          <div className="absolute top-18 left-0 w-full bg-[var(--card-background)] outline-1 outline-amber-50/20 )] z-10 transform transition-transform duration-300 ease-in-out mobile:block  tablet:hidden">
            <ul className="flex flex-col items-center space-y-3 p-4">
              {navLinksMobile.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="" onClick={() => isOpen[1](false)}>
                    <h3 className=" uppercase text-[var(--foreground)] cursosor-pointer text-[13px] font-satoshi font-normal tracking-widest">
                      {link.name}
                    </h3>
                  </a>
                </li>
              ))}
              <button className="w-full bg-[var(--foreground)] text-[var(--background)] py-2 px-4 rounded cursor-pointer text-[13px] font-satoshi font-normal tracking-widest">
                LET'S TALK
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
