import Image from "next/image";
import Link from "next/link";

import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { navigation } from "@/data/FooterData";

import logoFooter from "/public/logo/jawaban-white.svg";

export const Footer = () => {
  return (
    <footer className="mt-10 bg-primary">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between xl:flex-row xl:gap-8">
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logoFooter}
                alt="Jawaban-logo"
                sizes="200vw"
                className="h-full w-36 sm:h-full sm:w-48"
              />
            </Link>
            <p className="text-sm leading-6 text-white">
              Sumber informasi resmi untuk antisipasi dan tanggap darurat banjir
              di Jakarta.
            </p>
            <div className="flex flex-col gap-y-2 xl:pt-5">
              {/* Phone Number */}
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-white" />
                <Link
                  href="tel:+62215000000"
                  target="_blank"
                  className="text-sm leading-6 text-white"
                >
                  +62 21 5000 0000
                </Link>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-white" />
                <Link
                  href="mailto:jawabanproject@gmail.com"
                  target="_blank"
                  className="text-sm leading-6 text-white hover:text-white"
                >
                  jawabanproject@gmail.com
                </Link>
              </div>
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-white" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold leading-normal text-white">
                    Gedung A lantai 4
                  </span>
                  <p className="text-sm text-white">
                    Jl. Kramat Raya No. 212, Jakarta Pusat
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 md:flex-row md:gap-8 xl:mt-0">
            <div className="w-full md:w-40">
              <h3 className="text-base font-bold leading-6 text-white">
                Akses Cepat
              </h3>
              <ul role="list" className="mt-3 space-y-2 sm:mt-5">
                {navigation.quick_access.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.url}
                      className="text-sm leading-6 text-white hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7 w-full md:mt-0 md:w-60 xl:w-48">
              <h3 className="text-base font-bold leading-6 text-white">
                Tips Praktis
              </h3>
              <ul role="list" className="mt-3 space-y-2 sm:mt-5">
                {navigation.practical_tips.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.url}
                      target="_blank"
                      download
                      className="text-sm leading-6 text-white hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7 w-full md:mt-0 md:w-60 xl:w-48">
              <h3 className="text-base font-bold leading-6 text-white">
                Hukum dan Dukungan
              </h3>
              <ul role="list" className="mt-3 space-y-2 sm:mt-5">
                {navigation.legal_and_support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.url}
                      className="text-sm leading-6 text-white hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-7 justify-between border-t border-white/10 pt-4 md:mt-12 md:flex md:pt-8">
          <p className="text-sm leading-5 text-white">
            &copy; Jakarta Waspada Banjir 2024. Seluruh hak cipta dilindungi
            undang-undang.
          </p>
          <div className="flex items-center space-x-4 pt-5 md:pt-0">
            {navigation.social_media.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                className="rounded-full p-1 hover:bg-white/40"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
