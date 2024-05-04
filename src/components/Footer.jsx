import Image from "next/image";
import Link from "next/link";

import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { navigation } from "@/data/FooterData";

import logoFooter from "/public/logo/jawaban-white.svg";

export const Footer = () => {
  return (
    <footer className="mt-10 bg-primary">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
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
                <a
                  href="tel:+62215000000"
                  target="_blank"
                  className="text-sm leading-6 text-white"
                >
                  +62 21 5000 0000
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-white" />
                <a
                  href="mailto:jawaban@jakarta.go.id"
                  target="_blank"
                  className="text-sm leading-6 text-white hover:text-white"
                >
                  jawaban@jakarta.go.id
                </a>
              </div>
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-white" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold leading-normal text-white">
                    Gedung A lantai 4
                  </span>
                  <p className="text-sm text-white">
                    Jl. Puskesmas Kelurahan Duri Kepa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-4 md:gap-8">
              <div>
                <h3 className="text-base font-bold leading-6 text-white">
                  Tautan Cepat
                </h3>
                <ul role="list" className="mt-3 space-y-2 sm:mt-5">
                  {navigation.quick_links.map((item) => (
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
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-bold leading-6 text-white">
                  Sumber Daya
                </h3>
                <ul role="list" className="mt-3 space-y-2 sm:mt-5">
                  {navigation.resources.map((item) => (
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
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-bold leading-6 text-white">
                  Tips Praktis
                </h3>
                <ul role="list" className="mt-3 space-y-2 sm:mt-5">
                  {navigation.practical_tips.map((item) => (
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
              <div className="mt-10 md:mt-0">
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
        </div>
        <div className="mt-7 justify-between border-t border-white/10 pt-4 md:mt-12 md:flex md:pt-8">
          <p className="text-sm leading-5 text-white">
            &copy; Jakarta Waspada Banjir 2024. Seluruh hak cipta dilindungi
            undang-undang.
          </p>
          <div className="flex items-center space-x-4 pt-5 md:pt-0">
            {navigation.social_media.map((item) => (
              <Link key={item.id} href={item.url}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
