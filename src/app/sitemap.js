import { BASE_URL } from "@/config";
import { routesMapData } from "@/data/RoutesMapData";

export default function sitemap() {
  const routesMap = routesMapData.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routesMap];
}
