import Image from "next/image";
import { Calendar } from "lucide-react";

const RelatedNewsCard = () => {
  return (
    <div className="group flex gap-3 rounded-xl border border-transparent p-2 transition duration-100 hover:border hover:border-gray-700 hover:bg-white/10">
      <div className="relative h-24 w-24 flex-shrink-0">
        <Image
          src="/images/edukasi-banjir-1.jpeg"
          fill
          className="rounded-lg object-cover"
          alt="gatau males"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h5 className="text-xs uppercase text-white/60 group-hover:text-white/90">
          Banjir
        </h5>

        <h3 className="line-clamp-2 text-white/90">
          Dummy berita terkini digunakan untuk layouting saja kurang lebih
          seperti ini tampilannya
        </h3>
        <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white/90">
          <Calendar className="h-4 w-4" /> Kamis, 2 Mei 2024
        </div>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
