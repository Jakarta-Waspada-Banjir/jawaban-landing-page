import CountUp from "react-countup";

import {
  FloodPostIcon,
  ObservationPostIcon,
  PumpHouseIcon,
  RainfallPostIcon,
  ReservoirIcon,
  SluiceGateIcon,
} from "@/components/icons";
import { Card } from "@/components/ui";
import { convertNumberToThousand } from "@/utils";

export const HighlightCard = ({ variant, title, value }) => {
  let icon = null;

  switch (variant) {
    case "pintu_air":
      icon = <SluiceGateIcon className="h-10 w-10" />;
      break;
    case "rumah_pompa":
      icon = <PumpHouseIcon className="h-10 w-10" />;
      break;
    case "pos_curah_hujan":
      icon = <RainfallPostIcon className="h-10 w-10" />;
      break;
    case "pos_pengamatan":
      icon = <ObservationPostIcon className="h-10 w-10" />;
      break;
    case "posko_banjir":
      icon = <FloodPostIcon className="h-10 w-10" />;
      break;
    case "waduk":
      icon = <ReservoirIcon className="h-10 w-10" />;
      break;
    default:
      break;
  }
  return (
    <div className="group">
      <Card className="h-full w-full px-6 py-4 duration-200 ease-in-out group-hover:border-primary group-hover:bg-primary/10">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="rounded-full">{icon}</div>
            <p className="text-base font-medium text-ternary-500">
              {title ?? "-"}
            </p>
          </div>
          <h1 className="truncate text-3xl font-bold text-gray-600 xl:text-4xl">
            <CountUp
              start={0}
              end={value ? value : 0}
              duration={5}
              separator="."
            />
          </h1>
        </div>
      </Card>
    </div>
  );
};
