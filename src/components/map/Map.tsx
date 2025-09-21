"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "leaflet/dist/leaflet.css";
import "swiper/css";
import dynamic from "next/dynamic";
import type { Map as IMap, PathOptions } from "leaflet";
import { Feature, GeometryObject, GeoJsonObject } from "geojson";
import worldData from "@/data/world.json";
import FlyMarker from "./FlyMarker";
import Tab from "./Tab";
import CustomZoom from "./CustomZoom";
import { Region } from "@/types/map";
import { useState } from "react";
import { getCountryCenter } from "./getCountryCenter";

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
      fillColor = "#bc9247"; // EU countries highlight
    } else if (feature?.properties?.name === "Vietnam") {
      fillColor = "#FF0000"; // Special Vietnam
    } else if (countries.includes(feature?.properties?.name)) {
      fillColor = "#D0C1BA"; // Other region countries
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

    if (!pos) return;

    handleChangeRegion(region);
    map.flyTo({ lat: pos[0], lng: pos[1] }, zoom, { duration });
  };

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
        ref={setMap}
        whenReady={() => setReady(true)}
        className="h-full !bg-transparent"
      >
        <div className="overlay-top pointer-events-none absolute left-0 top-0 z-[500] h-[7.625rem] w-full bg-[linear-gradient(180deg,#FFF_56.16%,rgba(255,255,255,0.00)100%)] max-sm:hidden"></div>
        <div className="overlay-right absolute right-0 top-0 z-[500] h-full w-[9.5rem] bg-[linear-gradient(-90deg,#FFF_56.16%,rgba(255,255,255,0.00)100%)] max-sm:hidden"></div>
        <div className="overlay-bottom pointer-events-none absolute bottom-0 left-0 z-[500] h-[5.5rem] w-full bg-[linear-gradient(0,#FFF_56.16%,rgba(255,255,255,0.00)100%)] max-sm:hidden"></div>
        <div className="overlay-left pointer-events-none absolute left-0 top-0 z-[500] h-full w-[5.0625rem] bg-[linear-gradient(90deg,#FFF_56.16%,rgba(255,255,255,0.00)_100%)] max-sm:hidden"></div>

        <GeoJSON data={worldData as GeoJsonObject} style={defaultStyle} />

        {regions.map((region, i) => {
          return (
            <FlyMarker
              key={i}
              region={region}
              handleFlyToPos={handleFlyToPos}
            />
          );
        })}

        <CustomZoom />
      </MapContainer>
    </>
  );
}
