"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { DestkopMenu } from "./DestkopMenu";
import { MobileMenu } from "./MobileMenu";

import logo from "/public/logo/jawaban-logo.png";

export const Header = ({ inMobileHidden = false, isTransparent = false }) => {
  return (
    <header
      id="header"
      className={cn(
        "fixed left-0 right-0 top-0 z-50 w-full bg-white shadow-md transition-colors duration-300",
        {
          "hidden lg:block": inMobileHidden,
          "bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-md backdrop-filter":
            isTransparent,
        },
      )}
    >
      <div className="h-full w-full">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-4">
          <div className="relative flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-4 lg:space-x-0">
                <MobileMenu />
                <div className="flex flex-shrink-0 items-center justify-between">
                  <Link href="/" className="inline-flex items-center">
                    <Image
                      className="w-40"
                      src={logo}
                      width={0}
                      height={0}
                      priority
                      alt="Jawaban-logo"
                      sizes="200vw"
                    />
                  </Link>
                </div>
              </div>
              <DestkopMenu isTransparent={isTransparent} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
