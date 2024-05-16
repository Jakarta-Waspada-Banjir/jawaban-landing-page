"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { FaqData } from "@/data/FaqData";

export const FaqSelect = () => {
  const { slug } = useParams();
  const router = useRouter();

  const isUndefined = slug === undefined || slug === "banjir";
  const filteredData = FaqData.find((data) => data.slug === slug)?.title ?? "-";

  const handleSelectItem = (slug) => {
    router.push(`/faq/${slug}`);
  };

  return (
    <Select onValueChange={handleSelectItem}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={isUndefined ? "Banjir" : filteredData} />
      </SelectTrigger>
      <SelectContent className="z-50">
        {FaqData.map((data) => (
          <SelectItem key={data.id} value={data.slug} className="">
            {data.title ?? "-"}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
