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
      name: "Kontak Darurat",
      url: "/kontak-darurat",
    },
    {
      id: 2,
      name: "Info Banjir",
      url: "/info-banjir",
    },
    {
      id: 3,
      name: "Peta Informasi Banjir",
      url: "/peta-informasi-banjir",
    },
    {
      id: 4,
      name: "Tanya Jawab",
      url: "/faq",
    },
    {
      id: 5,
      name: "Berita",
      url: "/berita",
    },
  ],
  practical_tips: [
    {
      id: 1,
      name: "Cara mengamankan rumah dari banjir",
      url: "/coming-soon",
    },
    {
      id: 2,
      name: "Peralatan darurat yang wajib ada",
      url: "/coming-soon",
    },
    {
      id: 3,
      name: "Cara aman mengungsi saat banjir",
      url: "/coming-soon",
    },
  ],
  legal_and_support: [
    {
      id: 1,
      name: "Informasi hak cipta",
      url: "/coming-soon",
    },
    {
      id: 2,
      name: "Kebijakan privasi",
      url: "/coming-soon",
    },
    {
      id: 3,
      name: "Syarat dan ketentuan",
      url: "/coming-soon",
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
