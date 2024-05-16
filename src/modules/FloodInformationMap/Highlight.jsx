import {
  initialFloodPost,
  initialObservationPost,
  initialPumpHouse,
  initialRainfallPost,
  initialReservoir,
  initialSluiceGates,
} from "@/data/FloodInformationMap";

import { HighlightCard } from "./HighlightCard";

export const Highlight = () => {
  const totalSluiceGate = initialSluiceGates.length;
  const totalPumpHouse = initialPumpHouse.length;
  const totalRainfallPost = initialRainfallPost.length;
  const totalObservationPost = initialObservationPost.length;
  const totalFloodPost = initialFloodPost.length;
  const totalReservoir = initialReservoir.length;

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-5 md:grid-cols-3">
        {/* SluiceGates | Pintu Air */}
        <HighlightCard
          variant="pintu_air"
          title="Total Pintu Air"
          value={totalSluiceGate}
        />

        {/* PumpHouse | Pompa Air */}
        <HighlightCard
          variant="rumah_pompa"
          title="Total Rumah Pompa"
          value={totalPumpHouse}
        />

        {/* RainfallPost | Pos Curah Hujan */}
        <HighlightCard
          variant="pos_curah_hujan"
          title="Total Pos Curah Hujan"
          value={totalRainfallPost}
        />

        {/* ObservationPost | Pos Pengamatan */}
        <HighlightCard
          variant="pos_pengamatan"
          title="Total Pos Pengamatan"
          value={totalObservationPost}
        />

        {/* FloodPost | Posko Banjir */}
        <HighlightCard
          variant="posko_banjir"
          title="Total Posko Banjir"
          value={totalFloodPost}
        />

        {/* Reservoir | Waduk */}
        <HighlightCard
          variant="waduk"
          title="Total Waduk"
          value={totalReservoir}
        />
      </div>
    </div>
  );
};
