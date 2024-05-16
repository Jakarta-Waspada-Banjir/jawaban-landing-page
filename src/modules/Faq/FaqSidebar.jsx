"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Button } from "@/components/ui";
import { FaqData } from "@/data/FaqData";
import { cn } from "@/lib/utils";

export const FaqSidebar = () => {
  const { slug } = useParams();
  const pathName = usePathname();

  const isCurrentPathName =
    pathName === "/tanya-jawab" || pathName === "/tanya-jawab/banjir";
  return (
    <div className="flex w-72 flex-auto flex-shrink-0 flex-col gap-2">
      {FaqData.map((data, index) => {
        return (
          <Button
            asChild
            key={index}
            size="lg"
            variant={
              slug === data.slug || (index === 0 && isCurrentPathName)
                ? "default"
                : "ghost"
            }
            className={cn(
              "justify-start px-4 text-gray-500 hover:bg-gray-200/60 hover:text-gray-800",
              {
                "border bg-primary text-white hover:bg-primary hover:text-white":
                  slug === data.slug || (index === 0 && isCurrentPathName),
              },
            )}
          >
            <Link href={`/tanya-jawab/${data.slug}`}>{data.title ?? "-"}</Link>
          </Button>
        );
      })}
    </div>
  );
};
