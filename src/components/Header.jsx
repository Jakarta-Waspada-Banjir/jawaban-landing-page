"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { DestkopMenu } from "./DestkopMenu";
import { MobileMenu } from "./MobileMenu";

import logoSvg from "/public/logo/jawaban.svg";

export const Header = ({ inMobileHidden = false }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyThreshold = 30;
      if (window.scrollY > stickyThreshold && !isSticky) {
        setIsSticky(true);
      } else if (window.scrollY <= stickyThreshold && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <header
      className={cn(
        "z-50 w-full bg-white shadow-md transition-all duration-700 ease-in-out",
        {
          "fixed left-0 right-0 top-0 shadow-sm": isSticky,
          "hidden lg:block": inMobileHidden,
        },
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-4">
        <div className="relative flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-4 lg:space-x-0">
              <MobileMenu />
              <div className="flex flex-shrink-0 items-center justify-between">
                <Link href="/" className="inline-flex items-center">
                  <div className="relative h-12 w-12 lg:h-20 lg:w-20">
                    <Image
                      fill
                      src={logoSvg}
                      priority
                      alt="Jawaban-logo"
                      sizes="200vw"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <DestkopMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
