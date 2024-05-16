"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { FloodControlData } from "@/data/FloodControlData";

import { Button } from "../../components/ui";

const FloodControlMenu = () => {
  const { authorities, slug } = useParams();
  const pathName = usePathname();

  const isUndefined = authorities === undefined ? "pemerintah" : authorities;

  const filteredData = FloodControlData.find(
    (data) => data.authorities === isUndefined,
  );

  return (
    <div className="flex w-60 flex-shrink-0 flex-col gap-2">
      {filteredData.data.map((menu, index) => {
        const isCurrentPathName =
          pathName === "/informasi-banjir/masyarakat" ||
          pathName === "/informasi-banjir/pemerintah" ||
          pathName === "/informasi-banjir";

        return (
          <Button
            asChild
            size="lg"
            key={index}
            variant={
              slug === menu.slug || (index === 0 && isCurrentPathName)
                ? "default"
                : "ghost"
            }
            className="justify-start"
          >
            <Link href={`/informasi-banjir/${isUndefined}/${menu.slug}`}>
              {menu.title}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default FloodControlMenu;
