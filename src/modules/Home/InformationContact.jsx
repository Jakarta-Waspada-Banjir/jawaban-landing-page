import Link from "next/link";

import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { navigation } from "@/data/FooterData";

export const InformationContact = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md bg-gradient-to-b from-primary to-secondary/70 p-6 md:block lg:col-span-1">
      {/* Bubble */}
      <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-white/15" />
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/15" />
      <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-white/15" />
      <div className="absolute -bottom-10 -right-10 h-32 w-32 transform rounded-full bg-white/15" />

      <div className="flex h-full w-full flex-col justify-between space-y-4">
        <div className="flex flex-col space-y-2 sm:space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            Informasi Kontak
          </h3>
          <h6 className="text-base font-medium text-white">
            Hubungi kami untuk bantuan dan informasi terkini tentang banjir di
            Jakarta.
          </h6>

          <div className="flex flex-col gap-y-3 pt-4">
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-white" />
              <Link
                href="tel:+62215000000"
                target="_blank"
                className="text-sm font-medium text-white"
              >
                +62 21 5000 0000
              </Link>
            </div>

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

            <div className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-white" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-white">
                  Gedung A lantai 4
                </span>
                <p className="text-sm text-white">
                  Jl. Kramat Raya No. 212, Jakarta Pusat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-4 md:pt-0">
          {navigation.social_media.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="rounded-full p-1 hover:bg-white/40"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
