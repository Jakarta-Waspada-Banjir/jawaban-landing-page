import Image from "next/image";

import EmergencyContactCard from "@/components/EmergencyContactCard";
import { Header } from "@/components/Header";
import { InputWithLabel } from "@/components/InputWithLabel";
import { TextareaWithLabel } from "@/components/TextAreaWithLabel";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Kontak Darurat",
};

const EmergencyContactPage = () => {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-32">
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
                darurat terkait dengan cuaca ekstrem, banjir, atau situasi
                darurat lainnya. Kami dapat dihubungi melalui nomor darurat yang
                tersedia atau melalui formulir kontak di situs web ini.
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

          {/* form section */}
          <div className="mx-auto mt-20 max-w-7xl bg-secondary">
            <h2 className="text-2xl font-bold lg:text-3xl">Kritik dan Saran</h2>
            <p className="text-base font-semibold md:text-lg">
              Ayo, kirim kritik dan saranmu !!. Tolong jangan kirim hal hal
              berbau SARA dan Pornografi
            </p>

            <div className="mx-auto mt-10 flex max-w-min items-center md:mt-10 md:gap-10 lg:mt-16 lg:gap-16">
              <div className="relative hidden flex-shrink-0 md:flex md:h-[250px] md:w-[350px] lg:h-[300px] lg:w-[400px] xl:h-[350px] xl:w-[450px]">
                <Image
                  fill
                  sizes="100vw"
                  quality={100}
                  className="object-contain"
                  src="/section/contact-form-image.png"
                  alt="contact form image"
                />
              </div>
              <form
                action=""
                className="flex w-screen flex-col gap-4 md:w-[300px] lg:w-[400px]"
              >
                <InputWithLabel
                  label="Nama"
                  id="nama"
                  placeholder="Nama"
                  className="w-full"
                />
                <InputWithLabel
                  label="Alamat Email"
                  id="email"
                  placeholder="Alamat Email"
                />
                <TextareaWithLabel
                  label="Pesan"
                  id="message"
                  placeholder="Masukkan pesan anda"
                />
                <Button type="button">Kirim</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EmergencyContactPage;
