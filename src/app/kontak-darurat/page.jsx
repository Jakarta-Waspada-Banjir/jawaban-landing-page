import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Card,
} from "@/components/ui";
import {
  faqEmergencyContact,
  initialEmergencyContact,
} from "@/data/EmergencyContactData";
import { EmergencyContactCard } from "@/modules/EmergencyContact/EmergencyContactCard";

export const metadata = {
  title: "Kontak Darurat",
};

const EmergencyContactPage = () => {
  return (
    <>
      <Header />
      <div className="pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-primary">
                  Kontak Darurat
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="my-8">
            <h1 className="mb-2 text-2xl font-semibold text-gray-700 md:text-3xl">
              Kontak Darurat
            </h1>
            <p className="text-sm font-medium text-gray-500 sm:text-base">
              Halaman ini menyediakan informasi vital tentang cara menghubungi
              layanan darurat. Gunakan nomor ini hanya dalam situasi darurat.
              Untuk pertanyaan non-darurat, silahkan lihat informasi kontak
              lainnya.
            </p>
          </div>

          <div className="mt-6">
            <Card className="w-full p-6 shadow-md">
              <div className="grid sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-center border-b border-gray-200 pb-4 sm:border-r sm:p-4 md:border-b-0 md:pl-0">
                  <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold text-transparent">
                    112
                  </h2>
                  <p className="mt-2 text-center text-base text-gray-500 md:text-sm">
                    Panggilan Darurat Nasional
                  </p>
                </div>
                <div className="flex flex-col items-center border-b border-gray-200 p-4 md:border-b-0 md:border-r">
                  <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold text-transparent">
                    113
                  </h2>
                  <p className="mt-2 text-center text-base text-gray-500 md:text-sm">
                    Pemadam Kebakaran
                  </p>
                </div>
                <div className="flex flex-col items-center border-b border-gray-200 p-4 sm:border-b-0 sm:border-r">
                  <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold text-transparent">
                    110
                  </h2>
                  <p className="mt-2 text-center text-base text-gray-500 md:text-sm">
                    Polisi
                  </p>
                </div>
                <div className="flex flex-col items-center pt-4 md:pl-4">
                  <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold text-transparent">
                    119
                  </h2>
                  <p className="mt-2 text-center text-base text-gray-500 md:text-sm">
                    Ambulan
                  </p>
                </div>
              </div>
            </Card>

            <p className="mt-10 text-sm font-medium text-gray-500 sm:text-base">
              Informasi Kontak dan Kanal Komunikasi Resmi Pemerintah Provinsi
              DKI Jakarta untuk Situasi Darurat Bencana
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {initialEmergencyContact.map((emergencyContact) => (
                <EmergencyContactCard
                  key={emergencyContact.id}
                  image={emergencyContact.image}
                  name={emergencyContact.name}
                  address={emergencyContact.address}
                  phone={emergencyContact.phone}
                  email={emergencyContact.email}
                  website={emergencyContact.website}
                />
              ))}
            </div>
          </div>

          {/* FAQ */}
          <h2 className="mb-8 mt-14 text-2xl font-semibold text-gray-700 sm:text-center md:text-3xl">
            Pertanyaan Umum Mengenai Kontak Darurat
          </h2>
          <Accordion type="multiple" collapsible="true" className="w-full">
            {faqEmergencyContact.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-base font-semibold text-gray-700 hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-500 sm:text-base">
                  {item.answer} {item.link && item.link}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmergencyContactPage;
