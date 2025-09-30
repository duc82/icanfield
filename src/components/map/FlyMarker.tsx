"use client";
import { Region } from "@/types/map";
import { getCountryCenter } from "./getCountryCenter";
import dynamic from "next/dynamic";

const Marker = dynamic(() => import("react-leaflet").then((l) => l.Marker), {
  ssr: false,
});

export default function FlyMarker({
  region,
  customMarkerIcon,
  handleFlyToPos,
}: {
  region: Region;
  customMarkerIcon: (flag: string, name: string) => L.DivIcon | undefined;
  handleFlyToPos: ({
    region,
    zoom,
    duration,
  }: {
    region: Region;
    zoom?: number;
    duration?: number;
  }) => void;
}) {
  let pos = getCountryCenter(region.propertyName);

  if (region.propertyName === "Spratly Islands") {
    pos = [8.641, 111.918];
  }

  if (region.propertyName === "Paracel Islands") {
    pos = [16.5, 112.0];
  }

  if (!pos) return null;

  return (
    <Marker
      position={{ lat: pos[0], lng: pos[1] }}
      eventHandlers={{
        click: () => {
          handleFlyToPos({ region });
        },
      }}
      icon={customMarkerIcon(region.flag, region.name)}
    ></Marker>
  );
}
