import { cn } from "@/lib/utils";
import React from "react";

export default function ArrowRight({
  className,
  stroke = "white",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      className={cn("size-6", className)}
    >
      <path
        d="M7.625 12.0381H17.625M17.625 12.0381L13.625 8.03809M17.625 12.0381L13.625 16.0381"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
