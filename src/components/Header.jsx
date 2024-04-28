import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { DestkopMenu } from "./DestkopMenu";
import { MobileMenu } from "./MobileMenu";

import logoSvg from "/public/logo/jawaban-white.svg";

export const Header = ({ inMobileHidden = false }) => {
  return (
    <header
      className={cn("z-50 lg:relative lg:overflow-y-visible", {
        "hidden lg:block": inMobileHidden,
      })}
    >
      <div className="mx-auto max-w-7xl bg-primary px-4 py-4 sm:px-6 lg:px-8 lg:py-4 lg:shadow-sm">
        <div className="relative flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-4 lg:space-x-0">
              <MobileMenu />
              <div className="flex flex-shrink-0 items-center justify-between">
                <Link href="/" className="inline-flex items-center">
                  <div className="relative h-12 w-12 lg:h-14 lg:w-14">
                    <Image
                      fill
                      src={logoSvg}
                      priority
                      alt="Jawaban Logo"
                      sizes="200vw"
                    />
                  </div>
                  <div className="flex flex-col pl-5 lg:pt-1">
                    <span className="text-xl font-bold uppercase text-white">
                      JAWABAN
                    </span>
                    <span className="text-lg text-white">
                      Jakarta Waspada Banjir
                    </span>
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
