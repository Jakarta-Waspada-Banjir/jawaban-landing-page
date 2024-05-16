import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";

export default function FaqLayout({ children }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-4 pt-24 sm:px-6 lg:px-8 lg:py-6 lg:pt-32">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-primary">
                Tanya Jawab
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="my-8">
          <h1 className="mb-2 text-2xl font-semibold text-gray-700 md:text-3xl">
            Tanya Jawab
          </h1>
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            Pertanyaan yang sering diajukan seputar informasi banjir di Jakarta
          </p>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
}
