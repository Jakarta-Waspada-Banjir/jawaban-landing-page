import Image from "next/image";
import { Calendar } from "lucide-react";

const RelatedNewsCard = ({ images, tag, title, release_date }) => {
  return (
    <div className="group flex gap-3 rounded-xl border border-transparent p-2 transition duration-100 hover:bg-white/10">
      <div className="relative h-20 w-20 flex-shrink-0">
        <Image
          src={images}
          fill
          className="rounded-lg object-cover"
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between">
        <h5 className="text-xs uppercase leading-none text-white/60 group-hover:text-white/90">
          {tag}
        </h5>

        <h3 className="-mt-1 line-clamp-2 text-sm text-white/90">{title}</h3>
        <div className="flex items-center gap-x-1 text-xs text-white/60 group-hover:text-white/90">
          <Calendar className="h-3 w-3" />
          <span className="leading-none">{release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
