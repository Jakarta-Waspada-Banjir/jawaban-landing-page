import Image from "next/image";
import { Calendar, EyeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const RelatedNewsCard = ({
  images,
  tag,
  title,
  release_date,
  isPopulerVariant = false,
}) => {
  return (
    <div
      className={cn(
        `group flex gap-3 rounded-xl border border-transparent p-2 transition duration-100 hover:cursor-pointer hover:bg-white/10`,
        { "hover:bg-gray-100": isPopulerVariant },
      )}
    >
      <div className="relative h-20 w-20 flex-shrink-0">
        <Image
          src={images}
          fill
          className="rounded-lg object-cover"
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between">
        <h5
          className={cn(
            `text-xs uppercase leading-none text-white/60 group-hover:text-white/90`,
            {
              "text-gray-800 group-hover:text-gray-800": isPopulerVariant,
            },
          )}
        >
          {tag}
        </h5>

        <h3
          className={cn(`-mt-1 line-clamp-2 text-sm text-white/90`, {
            "font-medium text-gray-800": isPopulerVariant,
          })}
        >
          {title}
        </h3>

        {isPopulerVariant ? (
          <div className="flex items-center gap-x-1 text-sm text-gray-600">
            <EyeIcon className="h-4 w-4" />
            <span className="leading-none">Dilihat: 120 kali</span>
          </div>
        ) : (
          <div className="flex items-center gap-x-1 text-xs text-white/60 group-hover:text-white/90">
            <Calendar className="h-3 w-3" />
            <span className="leading-none">{release_date}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedNewsCard;
