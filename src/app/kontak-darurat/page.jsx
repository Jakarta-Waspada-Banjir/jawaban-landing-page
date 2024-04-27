import Image from "next/image";

import EmergencyContactCard from "@/components/EmergencyContactCard";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EmergencyContactPage = () => {
  return (
    <>
      <Header />

      {/* hero section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="my-8 flex flex-col items-center gap-x-16 md:flex-row xl:gap-x-20">
          {/* content image desktop */}
          <div className="relative hidden flex-shrink-0 md:block md:h-[250px] md:w-[200px] lg:h-[300px] lg:w-[250px] xl:h-[350px] xl:w-[300px]">
            <Image
              src="/section/emergency-contact-image.svg"
              alt="Hero Image"
              className="object-contain"
              fill
            />
          </div>

          {/* content text */}
          <div className="flex flex-col gap-y-5 text-primary">
            <h1 className="text-center text-4xl font-bold md:text-left md:text-3xl lg:text-4xl xl:text-5xl">
              Layanan 112
            </h1>
            {/* content image mobile */}
            <div className="relative mx-auto h-[250px] w-[150px] md:hidden">
              <Image
                src="/section/emergency-contact-image.svg"
                alt="Hero Image"
                className="object-contain"
                fill
              />
            </div>
            <p className="text-justify md:text-base lg:text-lg">
              Jangan ragu untuk menghubungi kami jika Anda memerlukan bantuan
              darurat terkait dengan cuaca ekstrem, banjir, atau situasi darurat
              lainnya. Kami dapat dihubungi melalui nomor darurat yang tersedia
              atau melalui formulir kontak di situs web ini.
            </p>
          </div>
        </div>

        {/* card */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20 xl:gap-24">
          <EmergencyContactCard
            company="BPBD DKI JAKARTA"
            address="Jl. Kyai Haji Zainul Arifin No.71, RT.10/RW.10, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130"
            phoneNumber="(021) 6344766"
            link="https://bpbd.jakarta.go.id/"
          />
          <EmergencyContactCard
            company="Dinas Sosial DKI Jakarta"
            address="Jl. Kyai Haji Zainul Arifin No.71, RT.10/RW.10, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130"
            phoneNumber="(021) 6344766"
            link="https://dinsos.jakarta.go.id/"
          />
          <EmergencyContactCard
            company="Dinas Sosial DKI Jakarta"
            address="Jl. Kyai Haji Zainul Arifin No.71, RT.10/RW.10, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130"
            phoneNumber="(021) 6344766"
            link="https://dinsos.jakarta.go.id/"
          />
        </div>
      </section>
    </>
  );
};

export default EmergencyContactPage;
