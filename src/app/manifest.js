export default function manifest() {
  return {
    name: "Jakarta Waspada Banjir",
    short_name: "Jawaban",
    description:
      "Sumber informasi resmi untuk antisipasi dan tanggap darurat banjir di Jakarta.",
    start_url: "/",
    id: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#50E6FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
