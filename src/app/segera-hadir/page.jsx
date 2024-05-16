import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Segera Hadir",
};

const ComingSoon = () => {
  return (
    <>
      <Header />
      <div className="pt-20 lg:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          <div className="absolute -top-8 left-0 h-28 w-28 rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl filter sm:top-0 md:h-36 md:w-36" />
          <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl filter md:h-36 md:w-36" />
          <div className="flex flex-col items-center py-24">
            <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-4xl font-bold text-transparent sm:text-7xl">
              SEGERA HADIR
            </h1>
            <p className="mt-4 max-w-2xl text-center text-sm font-medium text-gray-500 sm:text-base">
              Persiapkan diri Anda untuk platform baru yang akan menjadi panduan
              Anda dalam menghadapi banjir di Jakarta. Dengan informasi akurat
              dan tepat waktu, kami bertujuan membantu Anda dan keluarga Anda
              tetap aman dan siap menghadapi kemungkinan banjir.
            </p>

            <Button className="mt-8 rounded-full" asChild>
              <Link href="/">Kembali ke beranda</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;
