import {
  DisasterMapIcon,
  EmergencyCallIcon,
  FloodInformationIcon,
  QuestionAnswerIcon,
} from "@/components/icons";

export const initialNewsCarousel = [
  {
    id: 1,
    title: "Warga membersihkan rumahnya setelah banjir",
    url_image: "/images/carousel-home/carousel-1.jpg",
    url: "/coming-soon",
    created_at: "2024-03-31T06:22:25.557035+07:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper felis, et luctus nisi.",
  },
  {
    id: 2,
    title: "Banjir di Jakarta, apa yang harus kamu lakukan?",
    url_image: "/images/carousel-home/carousel-2.jpg",
    url: "/coming-soon",
    created_at: "2024-03-31T06:22:25.557035+07:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper felis, et luctus nisi.",
  },
  {
    id: 3,
    title: "Dinas Sumber Daya Air DKI Jakarta membersihkan kali",
    url_image: "/images/carousel-home/carousel-3.jpg",
    url: "/coming-soon",
    created_at: "2024-03-31T06:22:25.557035+07:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper felis, et luctus nisi.",
  },
];

// ----------------------- Water Level -----------------------
export const waterLevelStatus = {
  STANDBY1: 1,
  STANDBY2: 2,
  STANDBY3: 3,
  NORMAL: 4,
};

export const initialWaterLevelData = [
  {
    id: 1,
    name: "Pos Kali Jodo",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Siaga 1",
    status_code: 1,
  },
  {
    id: 2,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Siaga 2",
    status_code: 2,
  },
  {
    id: 3,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Siaga 3",
    status_code: 3,
  },
  {
    id: 4,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
  {
    id: 5,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
  {
    id: 6,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
  {
    id: 7,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
  {
    id: 8,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
  {
    id: 9,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
  {
    id: 10,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
  {
    id: 11,
    name: "Pos Depok",
    category: "Pos Pengamatan",
    date: "2024-03-31T06:22:25.557035+07:00",
    time: "22.00",
    water_flow: "Aliran Tengah",
    weather: "Mendung",
    water_height: "140 cm",
    status: "Normal",
    status_code: 4,
  },
];
// ----------------------- End Water Level -----------------------

// ----------------------- Quick Access -----------------------
export const initialQuickAccess = [
  {
    id: 1,
    title: "Kontak Darurat",
    url: "/kontak-darurat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper felis, et luctus nisi.",
    icon: <EmergencyCallIcon className="mb-3 h-auto w-8" />,
  },
  {
    id: 2,
    title: "Info Banjir",
    url: "/coming-soon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper felis, et luctus nisi.",
    icon: <FloodInformationIcon className="mb-3 h-7 w-7" />,
  },
  {
    id: 3,
    title: "Peta Bencana",
    url: "/coming-soon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper felis, et luctus nisi.",
    icon: <DisasterMapIcon className="mb-3 h-7 w-7" />,
  },
  {
    id: 4,
    title: "Tanya Jawab",
    url: "/coming-soon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper felis, et luctus nisi.",
    icon: <QuestionAnswerIcon className="mb-3 h-auto w-10" />,
  },
];
// ----------------------- End Quick Access -----------------------

// ----------------------- Related News -----------------------
export const initialRelatedNews = [
  {
    id: 1,
    title: "Hujan Berintensitas Ringan Hingga Sedang Guyur Jakarta Hari Ini",
    description:
      "Badan Meteorologi, Klimatologi dan Geofisika (BMKG) memprediksi hujan berintensitas ringan hingga sedang mengguyur Jakarta hari ini. Dikutip dari laman resmi BMKG, Kamis (29/2), pada pagi hari cuaca berawan tebal hingga hujan berintensitas sedang diprediksi menaungi wilayah Jakarta Utara, Jakarta Pusat, Jakarta Timur, Jakarta Barat, Jakarta Selatan, dan Kepulauan Seribu.",
    url_image: "/images/carousel-home/carousel-1.jpg",
    url: "/coming-soon",
    created_at: "2024-03-31T06:22:25.557035+07:00",
    updated_at: "2024-03-31T06:22:25.557035+07:00",
  },
  {
    id: 2,
    title: "Hujan Berintensitas Ringan Hingga Sedang Guyur Jakarta Hari Ini",
    description:
      "Badan Meteorologi, Klimatologi dan Geofisika (BMKG) memprediksi hujan berintensitas ringan hingga sedang mengguyur Jakarta hari ini. Dikutip dari laman resmi BMKG, Kamis (29/2), pada pagi hari cuaca berawan tebal hingga hujan berintensitas sedang diprediksi menaungi wilayah Jakarta Utara, Jakarta Pusat, Jakarta Timur, Jakarta Barat, Jakarta Selatan, dan Kepulauan Seribu.",
    url_image: "/images/carousel-home/carousel-1.jpg",
    url: "/coming-soon",
    created_at: "2024-03-31T06:22:25.557035+07:00",
    updated_at: "2024-03-31T06:22:25.557035+07:00",
  },
  {
    id: 3,
    title: "Hujan Berintensitas Ringan Hingga Sedang Guyur Jakarta Hari Ini",
    description:
      "Badan Meteorologi, Klimatologi dan Geofisika (BMKG) memprediksi hujan berintensitas ringan hingga sedang mengguyur Jakarta hari ini. Dikutip dari laman resmi BMKG, Kamis (29/2), pada pagi hari cuaca berawan tebal hingga hujan berintensitas sedang diprediksi menaungi wilayah Jakarta Utara, Jakarta Pusat, Jakarta Timur, Jakarta Barat, Jakarta Selatan, dan Kepulauan Seribu.",
    url_image: "/images/carousel-home/carousel-1.jpg",
    url: "/coming-soon",
    created_at: "2024-03-31T06:22:25.557035+07:00",
    updated_at: "2024-03-31T06:22:25.557035+07:00",
  },
  {
    id: 4,
    title: "Hujan Berintensitas Ringan Hingga Sedang Guyur Jakarta Hari Ini",
    description:
      "Badan Meteorologi, Klimatologi dan Geofisika (BMKG) memprediksi hujan berintensitas ringan hingga sedang mengguyur Jakarta hari ini. Dikutip dari laman resmi BMKG, Kamis (29/2), pada pagi hari cuaca berawan tebal hingga hujan berintensitas sedang diprediksi menaungi wilayah Jakarta Utara, Jakarta Pusat, Jakarta Timur, Jakarta Barat, Jakarta Selatan, dan Kepulauan Seribu.",
    url_image: "/images/carousel-home/carousel-1.jpg",
    url: "/coming-soon",
    created_at: "2024-03-31T06:22:25.557035+07:00",
    updated_at: "2024-03-31T06:22:25.557035+07:00",
  },
];
// ----------------------- End Related News -----------------------
