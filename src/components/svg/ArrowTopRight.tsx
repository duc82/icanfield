import { cn } from "@/lib/utils";
import React from "react";

export default function ArrowTopRight({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
    >
      <path
        d="M7.04928 16.9497L16.9488 7.05025M16.9488 7.05025H8.46349M16.9488 7.05025V15.5355"
        stroke="#3F2214"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
