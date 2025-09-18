"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import NavMenu from "./NavMenu";
import { NavItem } from "@/types/header";

export interface NavItemLeft {
  title: string;
  href: string;
  description: string;
  subMenus?: { title: string; href: string; image: string }[];
  className?: string;
  image?: string;
  mobileImage: string;
}

export interface NavItemRight {
  title: string;
  href?: string;
  subMenus?: { title: string; href: string }[];
  className?: string;
  image?: string;
  icon?: string;
}

const links = [
  {
    icon: "/header/agenda.svg",
    title: "Sự kiện",
    href: "#",
  },
  {
    icon: "/header/flag.svg",
    title: "Tin định cư",
    href: "#",
  },
  {
    icon: "/header/gmail.svg",
    title: "Liên hệ",
    href: "#",
  },
];

const navItemLeft: NavItemLeft[] = [
  {
    title: "Định cư Canada",
    href: "#",
    mobileImage: "/header/canada-flag.png",
    description: "54 chương trình",
    className: "bg-linear-red",
  },
  {
    title: "Định cư Mỹ",
    href: "#",
    subMenus: [
      {
        title: "Các chương trình định cư",
        href: "#",
        image: "/header/submenu-3.png",
      },
      { title: "Dự án EB-5", href: "#", image: "/header/submenu-3.png" },
    ],
    image: "/header/submenu-1.png",
    description: "24 chương trình",
    mobileImage: "/header/us-flag.png",
    className: "bg-linear-light-navy",
  },
  {
    title: "Quốc tịch Caribe",
    href: "#",
    mobileImage: "/header/caribe-flag.png",
    className: "bg-linear-blue",
    description: "32 chương trình",
  },
  {
    title: "Định cư Châu Âu",
    href: "#",
    mobileImage: "/header/eu-flag.png",
    className: "bg-linear-dark-navy",
    description: "36 chương trình",
  },
];

const languages = [
  {
    title: "VN",
    icon: "/header/vn.svg",
  },
  {
    title: "EN",
    icon: "/header/en.svg",
  },
];

const navItems: NavItem[] = [
  {
    title: "Định cư Canada",
    href: "#",
  },
  {
    title: "Định cư Mỹ",
    href: "#",
    x: "11rem",
    subMenus: [
      {
        title: "Các chương trình định cư",
        href: "#",
        image: "/header/submenu-1.png",
      },
      { title: "Dự án EB-5", href: "#", image: "/header/submenu-2.png" },
    ],
  },
  {
    title: "Quốc tịch Caribe",
    href: "#",
  },
  {
    title: "Định cư Châu Âu",
    href: "#",
  },
];

const navItemRight: NavItem[] = [
  {
    title: "Các chương trình khác",
    x: "29rem",
    subMenus: [
      { title: "Đầu tư định cư Úc", href: "#", image: "/header/submenu-2.png" },
      { title: "Bất động sản Úc", href: "#", image: "/header/submenu-3.png" },
    ],
  },
  {
    title: "Cẩm nang iCanfield",
    href: "#",
  },
  {
    title: "Hỗ trợ khách hàng",
    icon: "/header/star.svg",
    className:
      "text-sm leading-[1.3125rem] tracking-[-0.0175rem] bg-primary text-white rounded-lg py-2 px-4.5 pr-[1.375rem] hover:bg-primary hover:text-white hover:bg-primary text-white focus:bg-primary focus:text-white focus:bg-primary",
    x: "45rem",
    subMenus: [
      { title: "Thẩm định hồ sơ", href: "#", image: "/header/submenu-1.png" },
      {
        title: "So sánh chương trình",
        href: "#",
        image: "/header/submenu-2.png",
      },
      {
        title: "Thông tin hộ chiếu",
        href: "#",
        image: "/header/submenu-3.png",
      },
    ],
  },
];

export default function Header() {
  const [activeLang, setActiveLang] = useState(languages[0]);

  useGSAP(() => {
    gsap.from(".fade-in-box-nav-item", {
      scrollTrigger: {
        trigger: ".fade-in-box-nav-item",
        start: "top 80%",
      },
      opacity: 0,
      y: -25,
      delay: 0.2,
      duration: 0.5,
      stagger: 0.1,
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Desktop & Tablet */}
      <>
        <div className="max-sm:hidden bg-linear-[118deg] from-primary from-[69.75%] via-secondary via-[142.7%] to-third to-[182.76%] text-white px-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-[0.47rem_0.59rem] bg-white/[0.08] flex items-center space-x-2.5">
              <Image
                src="/header/file.svg"
                width={0}
                height={0}
                alt=""
                className="size-3.5 object-cover"
              />
              <p className="uppercase text-text-primary text-xs font-medium leading-[1.125rem]">
                Tin doanh nghiệp
              </p>
            </div>
            <Swiper
              slidesPerView={1}
              direction="vertical"
              loop
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay]}
              className="h-6 w-80"
            >
              <SwiperSlide className="!flex items-center">
                <Link
                  href="#"
                  className="text-[0.8125rem] leading-[0.975rem] hover:underline"
                >
                  Tối ưu công năng sử dụng trong căn hộ ở Ecopark
                </Link>
              </SwiperSlide>
              <SwiperSlide className="!flex items-center">
                <Link
                  href="#"
                  className="text-[0.8125rem] leading-[0.975rem] hover:underline"
                >
                  Tối ưu công năng sử dụng trong căn hộ ở Ecopark
                </Link>
              </SwiperSlide>
              <SwiperSlide className="!flex items-center">
                <Link
                  href="#"
                  className="text-[0.8125rem] leading-[0.975rem] hover:underline"
                >
                  Tối ưu công năng sử dụng trong căn hộ ở Ecopark
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex items-center space-x-11">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center space-x-2.5"
              >
                <Image
                  src={link.icon}
                  width={16}
                  height={16}
                  alt={link.title}
                  className="size-4 object-cover"
                />
                <span className="uppercase text-xs font-medium leading-[1.125rem] tracking-[-0.0075rem]">
                  {link.title}
                </span>
              </Link>
            ))}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-10">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent !text-white text-xs font-medium leading-[1.125rem] p-0 flex items-center space-x-1.5">
                    <Image
                      src={activeLang.icon}
                      alt=""
                      width={0}
                      height={0}
                      className="size-[1.1875rem] flex-shrink-0 rounded-full"
                    />
                    <span>{activeLang.title}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-10">
                    <ul className="grid w-20 gap-2">
                      {languages.map((lang, i) => (
                        <li key={i}>
                          <NavigationMenuLink asChild className="p-0">
                            <button
                              type="button"
                              onClick={() => setActiveLang(lang)}
                              className="text-xs w-full font-medium leading-[1.125rem]"
                            >
                              <div className="flex items-center space-x-1.5">
                                <Image
                                  src={lang.icon}
                                  alt=""
                                  width={0}
                                  height={0}
                                  className="size-[1.1875rem] flex-shrink-0 rounded-full"
                                />
                                <span>{lang.title}</span>
                              </div>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="max-sm:hidden bg-white text-[#333] px-20 flex items-center justify-between">
          <NavMenu datas={navItems} />
          <Link href="/" className="fade-in-box-nav-item">
            <Image
              src="/header/logo.png"
              width={38}
              height={50}
              alt="Logo"
              className="w-[2.33106rem] h-[3.125rem]"
            />
          </Link>
          <NavMenu datas={navItemRight} />
        </div>
      </>

      {/* Mobile */}
      <div className="sm:hidden bg-white py-3 px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/header/logo_mobile.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo"
            className="w-[6.25244rem] h-auto object-cover"
          />
        </Link>
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-10">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[#2E2E2E] text-xs font-medium leading-[1.125rem] p-0 flex items-center">
                  <div className="flex items-center space-x-1.5">
                    <Image
                      src={activeLang.icon}
                      alt=""
                      width={0}
                      height={0}
                      className="size-4 flex-shrink-0 rounded-full"
                    />
                    <span>{activeLang.title}</span>
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-10 px-3.5 py-2">
                  {
                    <ul className="grid gap-2">
                      {languages.map((lang, i) => (
                        <li key={i}>
                          <NavigationMenuLink asChild className="p-0">
                            <button
                              type="button"
                              onClick={() => setActiveLang(lang)}
                              className="text-xs w-full font-medium leading-[1.125rem] flex items-center justify-center"
                            >
                              <div className="flex items-center space-x-2">
                                <Image
                                  src={lang.icon}
                                  alt=""
                                  width={0}
                                  height={0}
                                  className="size-4 flex-shrink-0 rounded-full"
                                />
                                <span>{lang.title}</span>
                              </div>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  }
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <MobileMenu navItemLeft={navItemLeft} navItemRight={navItemRight} />
        </div>
      </div>
    </header>
  );
}
