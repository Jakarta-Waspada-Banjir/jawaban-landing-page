import { BASE_URL } from "@/config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      crawlDelay: 0.1,
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
