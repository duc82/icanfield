"use client";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { Region } from "@/types/map";
import { getCountryCenter } from "./getCountryCenter";

const customMarkerIcon = (flag: string, name: string) =>
  L.divIcon({
    className:
      "!w-[5rem] !h-[3.26rem] relative !-mt-[3.26rem] max-sm:!-mt-[2rem] max-sm:!pointer-events-none ",
    html: `
      <div class="custom-marker pointer-events-none !w-[5rem] !h-[3.26rem] absolute !left-[-1.5rem] top-0 max-sm:!pointer-events-none">
              <img
                src="/map/bg-marker.png"
                alt="${name}"
                class="absolute w-full h-full top-0 !left-1/2 !-translate-x-1/2 object-cover marker-bound max-sm:!w-[2rem] max-sm:!h-auto"
              />
              <img
                src="${flag}"
                alt="${name}"
                class="absolute !size-[1.5rem] top-[1rem] !left-1/2 !-translate-x-1/2 object-cover marker-bound rounded-full max-sm:!size-[1rem] max-sm:top-[0.6rem]"
              />
              <div class="text-brown absolute bottom-[-0.1rem] left-1/2 flex h-[1.375rem] w-fit -translate-x-1/2 translate-y-full items-center whitespace-nowrap rounded-[6.25rem] bg-[#E1DDC5] px-[0.5rem] text-[0.75rem] font-semibold uppercase leading-[1.2] tracking-[-0.0075rem]">
                ${name}
              </div>
            </div>
      `,
  });

export default function FlyMarker({
  region,
  handleFlyToPos,
}: {
  region: Region;
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
  let countryName = region.propertyName;
  if (region.code === "EU") {
    countryName = "Germany";
  }

  let pos = getCountryCenter(countryName);

  if (region.propertyName === "Spratly Islands") {
    pos = [8.641, 111.918];
  }

  if (region.propertyName === "Paracel Islands") {
    pos = [16.5, 112.0];
  }

  if (!pos) return null;

  return (
    <Marker
      key={region.code}
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
