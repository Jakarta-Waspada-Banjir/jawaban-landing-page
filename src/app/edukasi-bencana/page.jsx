import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

const datas = [
  {
    id: 1,
    title: "Tips Menghadapi curah hujan yang tinggi di wilayahmu",
    image: "/images/edukasi-banjir-1.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "Tips Menghadapi curah hujan yang tinggi di wilayahmu",
    image: "/images/edukasi-banjir-1.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "Tips Menghadapi curah hujan yang tinggi di wilayahmu",
    image: "/images/edukasi-banjir-1.jpeg",
    link: "#",
  },
];

const items = [
  {
    id: 1,
    question: "Apa itu Banjir?",
    answer:
      "Banjir, bah, atau ampuh adalah peristiwa bencana alam yang terjadi ketika aliran air yang berlebihan merendam daratan. Pengarahan banjir Uni Eropa mengartikan banjir sebagai perendaman sementara oleh air pada daratan yang biasanya tidak terendam air.",
  },
  {
    id: 2,
    question: "Apa yang menyebabkan Jakarta banjir?",
    answer:
      "Secara geografis, DKI Jakarta merupakan dataran rendah yang berada di antara hulu sungai dan pesisir. Hal ini membuat banjir di Jakarta disebabkan oleh 3 jenis banjir yang berbeda, yaitu banjir kiriman, banjir hujan lokal, dan banjir rob. Selain itu, pembuangan limbah ke sungai atau kanal dapat menyebabkan penyumbatan serta penyempitan sungai sehingga air lebih sulit tertampung. Penurunan permukaan tanah Jakarta juga menjadi faktor penyebab banjir akhir-akhir ini.",
  },
  {
    id: 3,
    question: "Apa bedanya genangan dengan banjir?",
    answer:
      "Banjir dan genangan memiliki beberapa perbedaan, salah satunya berupa waktu. Genangan adalah air yang menggenang setelah hujan namun surut dalam kurun waktu kurang dari 24 jam, sedangkan air menggenang yang tidak surut setelah 1x24 jam diklasifikasi sebagai banjir. Selain itu, genangan memiliki tinggi permukaan air yang kurang dari 40 cm, dimana banjir bisa jauh lebih tinggi dari 40 cm. Genangan juga biasanya melingkupi luas wilayah yang lebih kecil daripada banjir.",
  },
  {
    id: 4,
    question:
      "Berapa nomor telepon darurat yang bisa saya hubungi saat banjir melanda?",
    answer: "Kamu bisa menghubungi nomor darurat 112",
  },
];

export default function DisasterEducation() {
  return (
    <>
      <Header />

      <Banner>
        <h1 className="text-center text-xl font-semibold text-white sm:text-2xl">
          Edukasi Bencana
        </h1>
        <p className="text-center text-lg text-white sm:text-xl">
          Ayo! Temukan lebih banyak tentang bencana banjir
        </p>
      </Banner>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-8 flex flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row">
          {datas.map((data) => (
            <Link
              href={data.link}
              key={data.id}
              className="relative h-[234px] w-full cursor-pointer rounded-md border border-gray-300 shadow-lg lg:w-[416px]"
            >
              <Image
                src={data.image}
                alt="edukasi-banjir"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-md object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 w-full rounded-md bg-black bg-opacity-40 p-3 text-white">
                <h3 className="line-clamp-2 text-base font-semibold">
                  {data.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <h1 className="text-center text-xl font-semibold sm:text-2xl">
          Yuk! Tambah Pengetahuanmu
        </h1>

        <Accordion type="multiple" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger className="hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
