import Link from "next/link";

export const initialEmergencyContact = [
  {
    id: 1,
    image: "/images/emergency-contact/bpbd-dki-jakarta.png",
    name: "BPBD Provinsi DKI Jakarta",
    address:
      "Jl. Kyai Haji Zainul Arifin No.71, RT.10/RW.10, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
    phone: "(021) 6344766",
    email: "bpbddki@jakarta.go.id",
    website: "https://bpbd.jakarta.go.id/",
  },
  {
    id: 2,
    image: "/images/emergency-contact/dinas-sosial.png",
    name: "Dinas Sosial Pemerintah Provinsi DKI Jakarta",
    address:
      "Jl. Gunung Sahari II No.6, RT.13/RW.7, Gn. Sahari Sel., Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10610",
    phone: "(021) 4265116",
    email: "",
    website: "https://dinsos.jakarta.go.id/",
  },
  {
    id: 3,
    image: "/images/emergency-contact/dinas-sumber-daya-air.png",
    name: "Dinas Sumber Daya Air Provinsi DKI Jakarta",
    address:
      "Jl. Taman Jati Baru No.1, RT.17/RW.1, Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10150",
    phone: "(021) 3846608",
    email: "sumberdayaair@jakarta.go.id",
    website: "https://dsda.jakarta.go.id/",
  },
];

export const faqEmergencyContact = [
  {
    id: 1,
    question: "Kapan saya harus menggunakan nomor darurat?",
    answer:
      "Gunakan nomor darurat jika Anda atau orang lain dalam bahaya langsung, seperti dalam keadaan medis yang mengancam jiwa, kebakaran, atau jika Anda menyaksikan tindak kriminal. Jika situasinya tidak mendesak, silahkan hubungi nomor layanan non-darurat kami.",
  },
  {
    id: 2,
    question:
      "Apa yang harus saya lakukan jika saya tidak yakin apakah situasinya adalah darurat?",
    answer:
      "Jika Anda tidak yakin, lebih baik untuk menghubungi nomor darurat. Menjelaskan situasi Anda kepada operator darurat dapat membantu mereka menilai apakah Anda membutuhkan bantuan darurat.",
  },
  {
    id: 3,
    question: "Apa yang harus saya sampaikan ketika menghubungi nomor darurat?",
    answer:
      "Berikan detail yang jelas dan spesifik tentang lokasi Anda, sifat daruratnya, jumlah orang yang terlibat, dan jenis bantuan yang mungkin Anda perlukan. Jangan tutup panggilan hingga Anda mendapatkan instruksi untuk melakukannya.",
  },
  {
    id: 4,
    question: "Bagaimana saya dapat mempersiapkan diri untuk keadaan darurat?",
    answer:
      "Selalu ada baiknya untuk bersiap-siap untuk potensi darurat. Anda dapat mulai dengan mempelajari dasar-dasar pertolongan pertama, memiliki kit darurat di rumah dan kendaraan Anda, dan memperbarui diri Anda dengan rencana darurat lokal.",
  },
  {
    id: 5,
    question:
      "Di mana saya bisa menemukan informasi lebih lanjut tentang persiapan bencana?",
    answer:
      "Untuk informasi lebih lanjut tentang cara mempersiapkan bencana dan keadaan darurat, silahkan kunjungi",
    link: (
      <Link
        href="https://bpbd.jakarta.go.id/"
        target="_blank"
        className="text-primary"
      >
        https://bpbd.jakarta.go.id/
      </Link>
    ),
  },
];
