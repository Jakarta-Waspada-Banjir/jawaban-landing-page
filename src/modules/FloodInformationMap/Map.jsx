"use client";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import {
  EyeIcon,
  EyeOffIcon,
  FloodPostIcon,
  ObservationPostIcon,
  PumpHouseIcon,
  RainfallPostIcon,
  ReservoirIcon,
  SluiceGateIcon,
} from "@/components/icons";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Toggle,
} from "@/components/ui";

import { FloodPostMarker } from "./Marker/FloodPostMarker";
import { ObservationPostMarker } from "./Marker/ObservationPostMarker";
import { PumpHouseMarker } from "./Marker/PumpHouseMarker";
import { RainfallPostMarker } from "./Marker/RainfallPostMarker";
import { ReservoirMarker } from "./Marker/ReservoirMarker";
import { SluiceGatesMarker } from "./Marker/SluiceGatesMarker";
import { Highlight } from "./Highlight";
import { ToggleableMarker } from "./ToggleableMarker";

import "leaflet/dist/leaflet.css";

export const Map = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSluiceGatesMarker, setActiveSluiceGatesMarker] = useState(true);
  const [activePumpHouseMarker, setActivePumpHouseMarker] = useState(true);
  const [activeObservationPostMarker, setActiveObservationPostMarker] =
    useState(true);
  const [activeRainfallPostMarker, setActiveRainfallPostMarker] =
    useState(true);
  const [activeFloodPostMarker, setActiveFloodPostMarker] = useState(true);
  const [activeReservoirMarker, setActiveReservoirMarker] = useState(true);

  return (
    <>
      <Highlight />

      <div className="relative">
        <MapContainer
          center={[-6.174188678107991, 106.82695680910892]}
          zoom={12}
          scrollWheelZoom={true}
          className="z-10 mt-6 h-[500px] w-full rounded-lg shadow-md"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* SluiceGates | Pintu Air */}
          <SluiceGatesMarker
            activeSluiceGatesMarker={activeSluiceGatesMarker}
          />

          {/* PumpHouse | Pompa Air */}
          <PumpHouseMarker activePumpHouseMarker={activePumpHouseMarker} />

          {/* ObservationPost | Pos Pengamatan */}
          <ObservationPostMarker
            activeObservationPostMarker={activeObservationPostMarker}
          />

          {/* RainfallPost | Pos Curah Hujan */}
          <RainfallPostMarker
            activeRainfallPostMarker={activeRainfallPostMarker}
          />

          {/* FloodPost | Posko Banjir */}
          <FloodPostMarker activeFloodPostMarker={activeFloodPostMarker} />

          {/* Reservoir | Waduk */}
          <ReservoirMarker activeReservoirMarker={activeReservoirMarker} />
        </MapContainer>

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="absolute right-3 top-3 z-20 w-[215px] rounded-lg bg-white px-4 shadow-lg sm:w-[250px]"
        >
          <div className="flex items-center justify-between space-x-4 border-b border-gray-100 py-1">
            <h4 className="text-xs font-semibold sm:text-sm">
              Pengendalian Banjir
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-2">
            <div className="flex flex-col">
              {/* Pintu Air */}
              <ToggleableMarker
                icon={<SluiceGateIcon className="h-6 w-6" />}
                label="Pintu Air"
                isActive={activeSluiceGatesMarker}
                onToggle={() =>
                  setActiveSluiceGatesMarker(!activeSluiceGatesMarker)
                }
              />

              {/* Pompa Air */}
              <ToggleableMarker
                icon={<PumpHouseIcon className="h-6 w-6" />}
                label="Rumah Pompa Air"
                isActive={activePumpHouseMarker}
                onToggle={() =>
                  setActivePumpHouseMarker(!activePumpHouseMarker)
                }
              />

              {/* Pos Curah Hujan */}
              <ToggleableMarker
                icon={<RainfallPostIcon className="h-6 w-6" />}
                label="Pos Curah Hujan"
                isActive={activeRainfallPostMarker}
                onToggle={() =>
                  setActiveRainfallPostMarker(!activeRainfallPostMarker)
                }
              />

              {/* Pos Pengamatan */}
              <ToggleableMarker
                icon={<ObservationPostIcon className="h-6 w-6" />}
                label="Pos Pengamatan"
                isActive={activeObservationPostMarker}
                onToggle={() =>
                  setActiveObservationPostMarker(!activeObservationPostMarker)
                }
              />

              {/* Posko Banjir */}
              <ToggleableMarker
                icon={<FloodPostIcon className="h-6 w-6" />}
                label="Posko Banjir"
                isActive={activeFloodPostMarker}
                onToggle={() =>
                  setActiveFloodPostMarker(!activeFloodPostMarker)
                }
              />

              {/* Waduk */}
              <ToggleableMarker
                icon={<ReservoirIcon className="h-6 w-6" />}
                label="Waduk"
                isActive={activeReservoirMarker}
                onToggle={() =>
                  setActiveReservoirMarker(!activeReservoirMarker)
                }
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
};
