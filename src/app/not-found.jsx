import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="pb-20 pt-24 lg:pt-12 lg:pb-2">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-6">
          <div className="flex flex-col justify-center">
            <h1 className="mb-5 text-center text-2xl font-bold text-black md:text-[40px] md:leading-tight lg:text-left">
              Ups, Halaman ini tidak ditemukan.
            </h1>
            <p className="text-center text-sm font-normal text-ternary-500 sm:text-base lg:max-w-md lg:text-left">
              Seperti air yang mengalir mengikuti alur sungainya, terkadang kita
              menemukan hambatan yang mengarahkan kita ke tempat yang tak
              terduga. Sepertinya Anda telah menemui jalan buntu di sini. Tidak
              perlu khawatir, izinkan kami membantu Anda mengalir kembali ke
              arah yang benar!
            </p>
            <div className="mt-8 text-center lg:text-left">
              <Button asChild className="rounded-full text-sm sm:text-base">
                <Link href="/">Kembali ke beranda</Link>
              </Button>
            </div>
          </div>

          <Image
            src="/images/empty-state/404.svg"
            alt="not-found-page"
            width={381}
            height={442}
            className="mx-auto h-auto w-96 md:w-auto lg:w-[30rem]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
