"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./Mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#poznajmysie"
                  className="text-black px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out hover:bg-gray-300  rounded-md text-sm font-medium"
                >
                  Poznajmy się
                </Link>
              </li>
              <li>
                <Link
                  href="#realizacje"
                  className="text-black px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out hover:bg-gray-300  rounded-md text-sm font-medium"
                >
                  Realizacje
                </Link>
              </li>
              <li>
                <Link
                  href="#projekty"
                  className="text-black px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out hover:bg-gray-300  rounded-md text-sm font-medium"
                >
                  Projekty
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  className="text-black px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out hover:bg-gray-300  rounded-md text-sm font-medium"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
