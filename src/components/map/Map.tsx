"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";
import "swiper/css";
import dynamic from "next/dynamic";
import type { Map as IMap, PathOptions } from "leaflet";
import { Feature, GeometryObject, GeoJsonObject } from "geojson";
import worldData from "@/data/world.json";
import FlyMarker from "./FlyMarker";
import Tab from "./Tab";
import CustomZoom from "./CustomZoom";
import { Region } from "@/types/map";
import { useEffect, useState } from "react";
import { getCountryCenter } from "./getCountryCenter";
import * as Leaflet from "leaflet";

const MarkerClusterGroup = dynamic(
  () => import("react-leaflet-cluster").then((l) => l.default),
  { ssr: false }
);

const MapContainer = dynamic(
  () => import("react-leaflet").then((l) => l.MapContainer),
  {
    ssr: false,
  }
);
const GeoJSON = dynamic(
  () => import("react-leaflet/GeoJSON").then((l) => l.GeoJSON),
  { ssr: false }
);

const center = {
  lat: 50,
  lng: 25,
};

export default function Map({
  regions,
  activeRegion,
  handleChangeRegion,
}: {
  regions: Region[];
  activeRegion: Region;
  handleChangeRegion: (region: Region) => void;
}) {
  const [map, setMap] = useState<IMap | null>(null);
  const [ready, setReady] = useState(false);
  const [L, setL] = useState<typeof Leaflet | null>(null);

  const defaultStyle = (feature?: Feature<GeometryObject>): PathOptions => {
    const countries = regions.flatMap(
      (region) => region.countries || region.propertyName
    );

    let fillColor = "#F3F3F3"; // Default color for countries not in any region

    if (feature?.properties?.name === activeRegion.propertyName) {
      fillColor = "#bc9247"; // Active main country
    } else if (
      activeRegion.code === "EU" &&
      activeRegion.countries?.includes(feature?.properties?.name)
    ) {
      fillColor = "#bc9247"; // Special Europe
    } else if (feature?.properties?.name === "Vietnam") {
      fillColor = "#FF0000"; // Special Vietnam
    } else if (countries.includes(feature?.properties?.name)) {
      fillColor = "#D0C1BA"; // Other countries in regions
    }

    return {
      fillColor,
      weight: 0.3,
      color: "#7F7C6E",
      fillOpacity: 1,
    };
  };

  const handleFlyToPos = ({
    region,
    zoom = 3,
    duration = 0.75,
  }: {
    region: Region;
    zoom?: number;
    duration?: number;
  }) => {
    if (region.code === "VN" || !map) return;

    const pos = getCountryCenter(region.propertyName);

    if (!pos) return;

    handleChangeRegion(region);
    map.flyTo({ lat: pos[0], lng: pos[1] }, zoom, { duration });
  };

  const customMarkerIcon = (flag: string, name: string) => {
    if (!L) return;

    return L.divIcon({
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
  };

  useEffect(() => {
    import("leaflet").then((leaflet) => setL(leaflet));
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 z-[600] overflow-hidden ml-[2.38rem] w-[45.6rem] max-sm:relative max-sm:w-full max-sm:ml-0">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          breakpoints={{
            640: {
              spaceBetween: 56,
            },
          }}
          hidden={!ready}
          className="!p-4 max-sm:mb-[1.5rem] max-sm:!p-0"
        >
          {regions
            .filter((region) => region.code !== "VN")
            .map((region, i) => (
              <SwiperSlide key={i} className="!w-fit">
                <Tab
                  region={region}
                  isActive={activeRegion.code === region.code}
                  handleFlyToPos={handleFlyToPos}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <MapContainer
        attributionControl={false}
        scrollWheelZoom={true}
        zoomControl={false}
        center={center}
        zoom={2}
        minZoom={0.5}
        maxZoom={7}
        ref={setMap}
        whenReady={() => setReady(true)}
        className="h-full !bg-transparent"
      >
        <div className="overlay-top pointer-events-none absolute left-0 top-0 z-[500] h-[7.625rem] w-full bg-[linear-gradient(180deg,#FFF_56.16%,rgba(255,255,255,0.00)100%)] max-sm:hidden"></div>
        <div className="overlay-right absolute right-0 top-0 z-[500] h-full w-[9rem] bg-[linear-gradient(-90deg,#FFF_56.16%,rgba(255,255,255,0.00)100%)] max-sm:hidden"></div>
        <div className="overlay-bottom pointer-events-none absolute bottom-0 left-0 z-[500] h-[5.5rem] w-full bg-[linear-gradient(0,#FFF_56.16%,rgba(255,255,255,0.00)100%)] max-sm:hidden"></div>
        <div className="overlay-left pointer-events-none absolute left-0 top-0 z-[500] h-full w-[5.0625rem] bg-[linear-gradient(90deg,#FFF_56.16%,rgba(255,255,255,0.00)_100%)] max-sm:hidden"></div>

        <GeoJSON data={worldData as GeoJsonObject} style={defaultStyle} />

        <MarkerClusterGroup
          chunkedLoading // Tải cụm theo từng phần để tránh treo trình duyệt
          maxClusterRadius={81} // Bán kính cụm
        >
          {regions.map((region, i) => {
            return (
              <FlyMarker
                key={i}
                region={region}
                handleFlyToPos={handleFlyToPos}
                customMarkerIcon={customMarkerIcon}
              />
            );
          })}
        </MarkerClusterGroup>

        <CustomZoom />
      </MapContainer>
    </>
  );
}
