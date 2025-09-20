"use client";
import Image from "next/image";
import { useMap } from "react-leaflet";

export default function CustomZoom() {
  const map = useMap();

  const handleZoomIn = () => {
    map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    map.setZoom(map.getZoom() - 1);
  };

  return (
    <div className="absolute bottom-[2.69rem] left-[2.38rem] z-[600] flex flex-col space-y-[0.88rem] max-sm:hidden">
      <button
        onClick={handleZoomIn}
        className="flex size-[1.5rem] items-center justify-center rounded-[0.375rem] bg-[rgba(183,143,116,0.24)]"
      >
        <Image
          alt="Zoom in"
          width={200}
          height={200}
          className="size-[0.75rem] object-cover"
          src="/map/plus.svg"
        />
      </button>
      <button
        onClick={handleZoomOut}
        className="flex size-[1.5rem] items-center justify-center rounded-[0.375rem] bg-[rgba(183,143,116,0.24)]"
      >
        <img
          alt="Zoom out"
          width={200}
          height={200}
          className="size-[0.75rem] object-cover"
          src="/map/minus.svg"
        />
      </button>
    </div>
  );
}
