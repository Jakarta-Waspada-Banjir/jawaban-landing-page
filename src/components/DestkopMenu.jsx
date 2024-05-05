"use client";

import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { menus } from "@/data/menus";

export function DestkopMenu() {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center space-x-5 font-medium text-black">
        {menus.map((menu) =>
          menu.items.length > 0 ? (
            <DropdownMenu key={menu.id}>
              <DropdownMenuTrigger className="flex items-center focus:outline-none">
                {menu.name}{" "}
                <ChevronDownIcon className="ml-2 h-4 w-4 text-black" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {menu.items.map((item) => (
                  <div key={item.id}>
                    <Link href={`${item.url}`} className="hover:text-primary">
                      <DropdownMenuItem>{item.name}</DropdownMenuItem>
                    </Link>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={menu.id}
              href={`${menu.url}`}
              className="flex items-center space-x-4"
            >
              <span>{menu.name}</span>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
