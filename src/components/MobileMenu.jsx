"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui";
import { menus } from "@/data/menus";

import { Bars3Icon } from "./icons";

import logoSvg from "/public/logo/jawaban.svg";

export function MobileMenu() {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  return (
    <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
      <SheetTrigger aria-label="Open menu">
        <Bars3Icon className="h-6 w-6 text-black lg:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-12 w-12">
                <Image
                  fill
                  src={logoSvg}
                  priority
                  alt="Jawaban Logo"
                  sizes="200vw"
                />
              </div>
            </Link>
          </div>
        </SheetHeader>

        <div className="w-full py-5">
          {menus.map((menu) =>
            menu.items.length > 0 ? (
              <Accordion
                key={menu.id}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={menu.name} className="border-gray-100">
                  <AccordionTrigger className="hover:text-primary hover:no-underline">
                    {/* title */}
                    <div className="flex items-center space-x-4">
                      <span>{menu.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {menu.items.map((item) => (
                      <div key={item.id}>
                        <Link
                          href={`${item.url}`}
                          className="block py-2 hover:text-primary"
                          onClick={() => setIsOpenSheet(false)}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <div key={menu.id} className="py-4">
                <Link
                  href={menu.url}
                  className="block hover:text-primary hover:no-underline"
                >
                  {menu.name}
                </Link>
              </div>
            ),
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
