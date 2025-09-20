"use client";
import { cn } from "@/lib/utils";
import { Region } from "@/types/map";
import Image from "next/image";

export default function Tab({
  region,
  isActive,
  handleFlyToPos,
}: {
  region: Region;
  isActive: boolean;
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
  return (
    <div
      onClick={() => handleFlyToPos({ region })}
      className={cn(
        "relative flex cursor-pointer items-center space-x-[0.5rem] max-sm:rounded-[0.375rem] max-sm:border-[1px] max-sm:border-[rgba(0,0,0,0.10)] max-sm:p-[0.38rem]",
        isActive && "max-sm:bg-[#5C321E]"
      )}
    >
      <div className="relative flex size-[1.75rem] rounded-[50%] bg-white shadow-[1px_2px_6px_0px_rgba(0,0,0,0.25)] backdrop-blur-[10px] max-sm:size-[1.35rem] max-sm:bg-[rgba(255,255,255,0.2)]">
        <div className="absolute bottom-0 left-0 z-[1] h-full w-full rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.00)0%,rgba(255,255,255,0.00)58%,rgba(255,255,255,0.70)97.11%)]"></div>
        <Image
          src={region.flag}
          alt={region.name}
          width={200}
          height={200}
          className="absolute left-1/2 top-1/2 z-0 size-[1.5rem] -translate-x-1/2 -translate-y-1/2 scale-[1.05] rounded-[50%] max-sm:left-0 max-sm:top-0 max-sm:size-[1.25rem] max-sm:translate-x-[1px] max-sm:translate-y-[1px] max-sm:scale-[1]"
        />
      </div>
      <span
        className={cn(
          "text-[0.875rem] font-medium uppercase leading-[1.5] tracking-[-0.00875rem] max-sm:text-[0.8125rem] text-brown after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:rounded-full after:max-sm:hidden",
          isActive
            ? "after:bg-[linear-gradient(90deg,#95502f_50%,#f5c178)] max-sm:text-white"
            : "after:bg-transparent"
        )}
      >
        {region.name}
      </span>
    </div>
  );
}
