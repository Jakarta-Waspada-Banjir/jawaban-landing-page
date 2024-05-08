import { Calendar, PenLine } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
} from "@/components/ui";
import RelatedNewsCard from "@/modules/News/RelatedNewsCard";

const News = () => {
  return (
    <div className="absolute left-0 h-[600px] w-full bg-[url('/images/edukasi-banjir-1.jpeg')] bg-cover bg-no-repeat">
      <div className="h-full w-full bg-black/60">
        <div className="mx-auto flex h-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:px-8">
          {/* kiri */}
          <div className="flex flex-col justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-white hover:text-white/80"
                    href="/"
                  >
                    Beranda
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium text-primary">
                    Berita
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col gap-6">
              <h5 className="-mb-4 text-base uppercase text-white/60">
                Banjir
              </h5>
              <h3 className="font-serif text-4xl font-medium text-white/90">
                Berita dummy pertama buat layouting doang, tambahin sedikit biar
                keliatan panjang, pengen liat jadinya kaya gimana
              </h3>

              <div className="flex gap-2 text-sm text-white/60">
                <p className="flex gap-2">
                  <Calendar className="h-5 w-5" />
                  Kamis, 2 Mei 2024
                </p>
                |
                <p className="flex gap-2">
                  <PenLine className="h-5 w-5" />
                  Penulis: John Doe Doe
                </p>
              </div>

              <Button className="w-min border border-white/30 bg-transparent p-5 hover:bg-primary hover:text-white">
                Baca Selengkapnya
              </Button>
            </div>
          </div>

          {/* kanan */}
          <div className="flex h-min w-[400px] flex-shrink-0 flex-col gap-1 rounded-xl border border-gray-700 bg-gray-400 bg-opacity-10 bg-clip-padding p-4 backdrop-blur-md backdrop-filter">
            <h4 className="text-sm font-semibold uppercase text-white">
              Berita Terkini
            </h4>

            <RelatedNewsCard />
            <RelatedNewsCard />
            <RelatedNewsCard />
            <RelatedNewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
