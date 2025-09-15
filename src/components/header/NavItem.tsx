import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/header";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function NavItem({ data }: { data: NavItem }) {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleHoverSubItem = (image: string) => {
    const imageEl = imageRef.current;
    if (imageEl) {
      imageEl.src = image;
    }
  };

  return (
    <li className="fade-in-box-nav-item relative h-full flex items-center cursor-pointer group text-base font-medium -tracking-[0.02rem]">
      {data.subMenus && (
        <>
          <div className={cn("flex items-center gap-1", data.className)}>
            {data.icon && (
              <Image
                src={data.icon}
                width={0}
                height={0}
                alt="Icon"
                className="size-6 object-cover"
              />
            )}
            <span>{data.title}</span>
            <Image
              src="/header/chevron-down-brown.svg"
              width={16}
              height={16}
              alt="Arrow Down"
              className="size-4"
            />
          </div>

          <div
            className="absolute left-0 top-full cursor-auto z-50 transition-all delay-150 duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:delay-0"
            style={{
              left: `calc(-${data.x})`,
            }}
          >
            <Image
              src="/header/triangle.svg"
              alt="Triangle"
              width={36}
              height={23}
              className="w-12 h-8"
              style={{
                transform: `translateX(calc(${data.x}))`,
              }}
            />
            <div className="h-[22.5rem] w-[58rem] rounded-3xl -translate-y-4 bg-white p-4">
              <div className="flex item-start justify-between">
                <div className="p-8">
                  <p className="font-svn-mightiest text-[2rem] font-medium leading-[2.4rem] -tracking-[0.04rem] text-[#333] mb-10">
                    {data.title}
                  </p>
                  <div className="space-y-2">
                    {data.subMenus.map((subMenu, i) => (
                      <Link
                        href={subMenu.href}
                        key={i}
                        className="block pt-6 pb-2 text-xl font-semibold leading-6 uppercase -tracking-[0.0125rem] text-[#5C5C5C]"
                        onMouseEnter={() => handleHoverSubItem(subMenu.image)}
                      >
                        {subMenu.title}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.subMenus[0].image}
                  ref={imageRef}
                  alt="Image"
                  className="h-[20.72281rem] w-[26.5rem] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {!data.subMenus && data.href && (
        <Link href={data.href}>{data.title}</Link>
      )}
    </li>
  );
}
