import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  XIcon,
} from "@/components/icons";

export const navigation = {
  quick_access: [
    {
      id: 1,
      name: "Informasi Banjir",
      url: "/informasi-banjir",
    },
    {
      id: 2,
      name: "Peta Informasi Banjir",
      url: "/peta-informasi-banjir",
    },
    {
      id: 3,
      name: "Berita",
      url: "/berita",
    },
    {
      id: 4,
      name: "Tanya Jawab",
      url: "/tanya-jawab",
    },
    {
      id: 5,
      name: "Kontak Darurat",
      url: "/kontak-darurat",
    },
  ],
  practical_tips: [
    {
      id: 1,
      name: "Cara Mengatasi Banjir",
      url: "/document/cara-mengatasi-banjir.pdf",
    },
    {
      id: 2,
      name: "Membersihkan Rumah Pasca Banjir",
      url: "/document/membersihkan-rumah-pasca-banjir.pdf",
    },
    {
      id: 3,
      name: "Mengapa Banjir Terjadi",
      url: "/document/mengapa-banjir-terjadi.pdf",
    },
    {
      id: 4,
      name: "Sinegritas Elemen Masyarakat Dalam Menghadapi Banjir",
      url: "/document/sinegritas-elemen-masyarakat.pdf",
    },
  ],
  legal_and_support: [
    {
      id: 1,
      name: "Informasi Hak Cipta",
      url: "/segera-hadir",
    },
    {
      id: 2,
      name: "Kebijakan Privasi",
      url: "/segera-hadir",
    },
    {
      id: 3,
      name: "Syarat dan Ketentuan",
      url: "/segera-hadir",
    },
  ],
  social_media: [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61559544519623&mibextid=ZbWKwL",
      icon: <FacebookIcon className="h-6 w-6 text-white" />,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/jawaban.project",
      icon: <InstagramIcon className="h-6 w-6 text-white" />,
    },
    {
      id: 3,
      name: "X",
      url: "https://twitter.com/JawabanProject",
      icon: <XIcon className="h-5 w-5 text-white" />,
    },
    {
      id: 4,
      name: "Tiktok",
      url: "https://www.tiktok.com/@jawaban.project",
      icon: <TiktokIcon className="h-6 w-6 text-white" />,
    },
  ],
};
