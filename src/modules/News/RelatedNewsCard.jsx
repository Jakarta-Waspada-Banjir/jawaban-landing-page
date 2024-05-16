import Image from "next/image";
import Link from "next/link";
import { Calendar, EyeIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { formatDate } from "@/utils";

const RelatedNewsCard = ({
  images,
  tag,
  title,
  viewed,
  slug,
  release_date,
  isPopularVariant = false,
  isOtherVariant = false,
}) => {
  return (
    <Link
      href={`/berita/${slug}`}
      className={cn(
        `group flex gap-3 rounded-xl border border-transparent p-2 transition duration-100 hover:cursor-pointer hover:bg-white/10`,
        { "hover:bg-gray-100": isPopularVariant || isOtherVariant },
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
            `text-xs font-medium uppercase leading-none text-white/60 group-hover:text-white/90`,
            {
              "text-gray-500 group-hover:text-gray-500":
                isPopularVariant || isOtherVariant,
            },
          )}
        >
          {tag}
        </h5>

        <h3
          className={cn(
            `-mt-1 line-clamp-2 text-sm font-medium text-white/90`,
            {
              "text-gray-800": isPopularVariant || isOtherVariant,
            },
          )}
        >
          {title}
        </h3>

        {isPopularVariant ? (
          <div className="flex items-center gap-x-1 text-xs text-gray-500 lg:text-[13px]">
            <EyeIcon className="h-4 w-4" />
            <span className="leading-none">Dilihat: {viewed} kali</span>
          </div>
        ) : (
          <div
            className={cn(
              `flex items-center gap-x-1 text-xs text-white/60 group-hover:text-white/90`,
              { "text-gray-500 group-hover:text-gray-500": isOtherVariant },
            )}
          >
            <Calendar className="h-3 w-3" />
            <span className="leading-none">
              {formatDate(release_date, "EEEE, dd MMMM yyy")}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RelatedNewsCard;
