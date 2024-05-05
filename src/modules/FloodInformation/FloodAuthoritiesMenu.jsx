"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Button } from "../../components/ui";

const FloodAuthoritiesMenu = () => {
  const { authorities } = useParams();
  const pathName = usePathname();

  return (
    <div className="mx-auto flex gap-3 md:mx-0">
      <Button
        asChild
        size="lg"
        variant={
          authorities === "pemerintah" || pathName === "/info-banjir"
            ? "default"
            : "outline"
        }
        className={
          authorities === "masyarakat"
            ? "border-2 border-primary bg-white text-primary hover:bg-gray-100 hover:text-primary"
            : "border-2 border-primary"
        }
      >
        <Link href="/info-banjir/pemerintah">Pemerintah</Link>
      </Button>
      <Button
        size="lg"
        variant={authorities === "masyarakat" ? "default" : "outline"}
        className={
          authorities === "masyarakat"
            ? "border-2 border-primary"
            : "border-2 border-primary bg-white text-primary hover:bg-gray-100 hover:text-primary"
        }
        asChild
      >
        <Link href="/info-banjir/masyarakat">Masyarakat</Link>
      </Button>
    </div>
  );
};

export default FloodAuthoritiesMenu;
