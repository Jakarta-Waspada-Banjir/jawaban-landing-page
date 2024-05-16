import { Calendar, EyeIcon, LinkIcon, PenLine } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/utils";

import { ModalShareSocialMedia } from "../News/ModalShareSocialMedia";

const Jumbotron = ({ data }) => {
  console.log(data.image);
  return (
    <div
      className="h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${data.image}')` }}
    >
      <div className="h-full w-full bg-gradient-to-t from-black from-10% via-black/80 via-40%">
        <div className="mx-auto flex h-full max-w-7xl items-end justify-between gap-5 px-4 pb-7 sm:px-6 lg:gap-28 lg:px-8">
          <div className="relative flex h-full flex-col justify-end gap-4 xl:gap-5">
            <div className="absolute top-24 w-full md:top-[108px] lg:top-[140px]">
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
                    <BreadcrumbLink
                      className="text-white hover:text-white/80"
                      href="/berita"
                    >
                      Berita
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="w-40 truncate font-medium text-primary md:w-52 lg:w-60 ">
                      {data.slug}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex flex-col">
              {/* text */}
              <h5 className="text-sm text-white/60 xl:text-base">
                {data.tag ?? "-"}
              </h5>
              <h2 className="font-serif text-2xl text-white/90 xl:text-3xl">
                {data.title ?? "-"}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60 xl:text-sm">
              <p className="flex gap-2">
                <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
                {formatDate(data.release_date, "EEEE, dd MMMM yyy") ?? "-"}
              </p>
              |
              <p className="flex gap-2">
                <PenLine className="h-4 w-4 xl:h-5 xl:w-5" />
                Penulis: {data.author ?? "-"}
              </p>
            </div>
            {/* desktop */}
            <ModalShareSocialMedia data={data} inMobileHidden />

            <div className="flex gap-5 md:hidden">
              {/* view */}
              <div className="flex items-center gap-2 xl:gap-3">
                <EyeIcon className="h-5 w-5 text-white/60 xl:h-6 xl:w-6" />
                <Separator
                  orientation="vertical"
                  className="h-9 w-[2px] rounded-full bg-white/60 xl:h-11"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-white/90 xl:text-base">
                    {data.viewed ?? 0} Kali
                  </p>
                  <p className="text-xs text-white/60 xl:text-sm">
                    Berita ini dilihat
                  </p>
                </div>
              </div>
              {/* share */}
              <div className="flex items-center gap-3">
                <LinkIcon className="h-5 w-5 text-white/60 xl:h-6 xl:w-6" />
                <Separator
                  orientation="vertical"
                  className="h-9 w-[2px] rounded-full bg-white/60 xl:h-11"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-white/90 xl:text-base">
                    {data.shared ?? "-"} Kali
                  </p>
                  <p className="text-xs text-white/60 xl:text-sm">
                    Berita ini dibagikan
                  </p>
                </div>
              </div>
            </div>
            <ModalShareSocialMedia data={data} />
          </div>
          <div className="hidden shrink-0 flex-col items-end gap-3 md:flex">
            <div className="flex gap-5">
              {/* view */}
              <div className="flex items-center gap-2 xl:gap-3">
                <EyeIcon className="h-5 w-5 text-white/60 xl:h-6 xl:w-6" />
                <Separator
                  orientation="vertical"
                  className="h-9 w-[2px] rounded-full bg-white/60 xl:h-11"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-white/90 xl:text-base">
                    {data.viewed ?? "-"} Kali
                  </p>
                  <p className="text-xs text-white/60 xl:text-sm">
                    Berita ini dilihat
                  </p>
                </div>
              </div>
              {/* share */}
              <div className="flex items-center gap-3">
                <LinkIcon className="h-5 w-5 text-white/60 xl:h-6 xl:w-6" />
                <Separator
                  orientation="vertical"
                  className="h-9 w-[2px] rounded-full bg-white/60 xl:h-11"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-white/90 xl:text-base">
                    {data.shared ?? "-"} Kali
                  </p>
                  <p className="text-xs text-white/60 xl:text-sm">
                    Berita ini dibagikan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
