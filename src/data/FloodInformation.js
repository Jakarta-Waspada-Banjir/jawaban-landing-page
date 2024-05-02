import {
  FloodInformationIcon,
  MagnifyingGlassIcon,
  ShieldIcon,
  WarningIcon,
} from "@/components/icons";

export const thingsToDo = [
  {
    id: 1,
    icon: <MagnifyingGlassIcon className="h-16 w-16" />,
    title: "Sebelum Terjadi Banjir",
    list: [
      "Ketahui wilayah-wilayah rawan banjir",
      "Pantau risiko banjir di JakPantau",
      "Koordinasikan protokol banjir dengan tetangga",
      "Dokumentasikan surat dan dokumen berharga dalam bentuk soft copy",
      "Ketahui kebutuhan khusus anggota keluarga.",
    ],
  },
  {
    id: 2,
    icon: <WarningIcon className="h-16 w-16" />,
    title: "Ketika Ada Potensi Banjir",
    list: [
      "Perhatikan informasi peringatan dini berupa notifikasi dari aplikasi JAKI, media sosial, ataupun pengeras suara",
      "Amankan barang berharga ke tempat yang aman dan tinggi",
      "Matikan jaringan listrik",
      "Persiapkan tas siaga bencana",
      "Ikuti arahan petugas",
    ],
  },
  {
    id: 3,
    icon: <FloodInformationIcon className="h-16 w-16" />,
    title: "Saat Terjadi Banjir",
    list: [
      "Cari informasi dari sumber yang terpercaya",
      "Laporkan kondisi banjir melalui JakLapor di JAKI",
      "Matikan jaringan listrik",
      "Waspada terhadap arus air, saluran air, kubangan, dan tempat-tempat lain yang tergenang",
      "Bawa tas daruratmu",
    ],
  },
  {
    id: 4,
    icon: <ShieldIcon className="h-16 w-16" />,
    title: "Sesudah Terjadi Banjir",
    list: [
      "Cari informasi kondisi saat ini dan tempat mendapatkan bantuan dari sumber terpercaya",
      "Kembali ke rumah hanya setelah keadaan aman",
      "Gunakan sepatu untuk melindungi kaki dari benda tajam seperti paku",
      "Bersihkan lumpur",
    ],
  },
];
