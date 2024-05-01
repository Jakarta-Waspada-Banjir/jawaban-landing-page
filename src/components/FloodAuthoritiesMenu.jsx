"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Button } from "./ui";

const FloodAuthoritiesMenu = () => {
  const { authorities } = useParams();
  const pathName = usePathname();

  return (
    <div className="flex gap-3">
      <Button
        asChild
        size="lg"
        variant={
          authorities === "pemerintah" || pathName === "/pengendalian-banjir"
            ? "default"
            : "outline"
        }
        className={
          authorities === "masyarakat"
            ? "border-2 border-primary bg-white text-primary hover:bg-gray-100 hover:text-primary"
            : "border-2 border-primary"
        }
      >
        <Link href="/pengendalian-banjir/pemerintah/sistem-pengendalian-banjir">
          Pemerintah
        </Link>
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
        <Link href="/pengendalian-banjir/masyarakat/kerja-bakti">
          Masyarakat
        </Link>
      </Button>
    </div>
  );
};

export default FloodAuthoritiesMenu;
