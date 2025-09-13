"use client";
import React, { useEffect, useState } from "react";
import { NavItemLeft, NavItemRight } from "./Header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  navItemLeft: NavItemLeft[];
  navItemRight: NavItemRight[];
}

const navItemMobile = [
  {
    title: "Hỗ trợ khách hàng",
    subMenus: [
      { title: "Thẩm định hồ sơ", href: "#" },
      {
        title: "So sánh chương trình",
        href: "#",
      },
      {
        title: "Thông tin hộ chiếu",
        href: "#",
      },
    ],
  },
  {
    title: "Cẩm nang iCanfield",
    href: "#",
  },
  {
    title: "Sự kiện",
    href: "#",
  },
  {
    title: "Liên hệ",
    href: "#",
  },
];

export default function MobileMenu({ navItemLeft }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col space-y-1.5 rounded-md justify-center items-end p-3 w-[3.125rem] bg-black/10"
      >
        <div
          className={cn(
            "rounded-xs h-0.5 w-full bg-linear-[97deg] from-primary from-[-3.86%] via-secondary via-[51.97%] to-third to-[117.18%] transition duration-300",
            isOpen && "rotate-45 w-3/4 translate-y-1 -translate-x-1"
          )}
        ></div>
        <div
          className={cn(
            "rounded-xs h-0.5 w-3/4 bg-linear-[97deg] from-primary from-[-3.86%] via-secondary via-[51.97%] to-third to-[117.18%] transition duration-300",
            isOpen && "rotate-135 -translate-y-1 -translate-x-1"
          )}
        ></div>
      </button>
      <nav
        className={cn(
          "fixed inset-0 w-full top-[60px] -translate-y-full overflow-y-auto invisible bg-[#F6F6F4] transition-all duration-500 -z-10",
          isOpen && "visible translate-y-0"
        )}
      >
        <div className="p-4 pb-6 flex flex-col gap-3">
          {navItemLeft.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex overflow-hidden rounded-lg relative"
            >
              <Image
                src={item.mobileImage}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[9.125rem] h-[5.1875rem] object-cover"
              />
              <div
                className={cn(
                  "absolute left-[calc(9.125rem/2)] top-0 h-full w-[calc(100%-9.125rem/2)] flex items-center justify-between pl-16 pr-5.5 gap-4",
                  item.className
                )}
              >
                <div className="text-white min-w-[9.0625rem] shrink-0">
                  <h2 className="text-base font-semibold tracking-[-0.01rem] mb-1.5">
                    {item.title}
                  </h2>
                  <p className="text-xs leading-4.5 text-white/85">
                    {item.description}
                  </p>
                </div>
                <div className="rounded-full bg-white/25 p-1">
                  <div className="size-4.5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="6"
                      viewBox="0 0 5 6"
                      fill="none"
                      className="size-1.5"
                    >
                      <path
                        d="M1.25 0.75L3.5 3L1.25 5.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <button
            type="button"
            className="flex items-center justify-between text-[#333] bg-white p-4 rounded-xl font-medium text-base tracking-[-0.02rem]"
          >
            <span>Các chương trình khác</span>
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
                className="size-1.5"
              >
                <path
                  d="M1.25 0.75L3.5 3L1.25 5.25"
                  stroke={"#333"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <div className="rounded-xl overflow-hidden bg-white px-4">
            {navItemMobile.map((item, index) => (
              <button
                type="button"
                key={index}
                className="flex w-full items-center justify-between text-[#333] bg-white py-4 font-medium text-base tracking-[-0.02rem] border-b"
              >
                <span>{item.title}</span>
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    className="size-1.5"
                  >
                    <path
                      d="M1.25 0.75L3.5 3L1.25 5.25"
                      stroke={"#333"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
