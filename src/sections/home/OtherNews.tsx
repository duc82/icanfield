"use client";
import Title from "@/components/home/Title";
import ArrowTopRight from "@/components/svg/ArrowTopRight";
import ChevronLeft from "@/components/svg/ChevronLeft";
import Search from "@/components/svg/Search";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const tabs = [
  {
    id: 1,
    title: "Sự kiện",
  },
  {
    id: 2,
    title: "Tin định cư",
  },
  {
    id: 3,
    title: "Tin du học",
  },
  {
    id: 4,
    title: "Câu chuyện thành công",
  },
];

const filters = [
  {
    value: "all",
    label: "Tất cả",
  },
  {
    value: "latest",
    label: "Mới nhất",
  },
  {
    value: "oldest",
    label: "Cũ nhất",
  },
  {
    value: "az",
    label: "A-Z",
  },
  {
    value: "za",
    label: "Z-A",
  },
];

const news = [
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-1.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-2.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-3.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-4.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-5.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-1.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-2.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-6.png",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Tin tức du học",
    date: "23/10/2024",
    href: "#",
    image: "/home/other_news-7.png",
  },
];

export default function OtherNews() {
  const [activeTabId, setActiveTabId] = useState(1);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".fade-in-up-item");

    const matchMedia = gsap.matchMedia();
    matchMedia.add("(max-width: 639px)", () => {
      items.forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 50,
          duration: 0.75,
          scrollTrigger: {
            trigger: item,
          },
        });
      });
    });

    matchMedia.add("(min-width: 640px)", () => {
      for (let i = 0; i < items.length; i += 3) {
        const group = items.slice(i, i + 3);
        const y = 50 + ((i / 3) % 3) * 25;
        gsap.from(group, {
          autoAlpha: 0,
          y,
          duration: 0.75,
          stagger: 0.2,
          scrollTrigger: {
            trigger: group[0],
          },
        });
      }
    });

    return () => {
      matchMedia.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="px-20 pb-[2.19rem] max-sm:pb-12 max-sm:px-4">
      <Title text="Tin tức khác" className="fade-in-box mb-7 max-sm:mb-4" />
      <div className="flex items-center justify-between max-sm:items-start max-sm:flex-col mb-8">
        <div className="overflow-hidden w-full max-sm:mb-3">
          <div
            className="flex items-center space-x-[1.94rem] max-sm:space-x-[1.13rem] overflow-x-auto whitespace-nowrap"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={cn(
                  "text-base py-2 font-medium tracking-[-0.02rem] text-black/60 whitespace-nowrap transition-all duration-300 border-b border-b-transparent hover:text-secondary hover:border-b-secondary",
                  tab.id === activeTabId && "text-secondary border-secondary"
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 max-sm:gap-5">
          <div className="max-sm:order-2 w-[16.9375rem] max-sm:w-[10.1rem]">
            <select
              defaultValue="all"
              className="w-full text-[#333] font-medium text-base max-sm:text-sm bg-[#F3F3F3] py-3 pr-2 rounded-lg border-none max-sm:tracking=[-0.015rem] focus:ring-0"
            >
              {filters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  Lọc theo: {filter.label}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-[16.9375rem] max-sm:w-[10.1rem]">
            <input
              type="search"
              className="w-full rounded-lg bg-[#F3F3F3] text-sm font-medium leading-[1.3125rem] tracking-[-0.0175rem] placeholder:text-[#A1A1A1] max-sm:placeholder:text-xs text-[#333] py-3 pl-12 max-sm:pl-8 pr-2 focus:ring-0 border-none"
              placeholder="Tìm kiếm trong Blog"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 left-4 max-sm:left-2 max-sm:size-4.5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-x-[1.87rem] gap-y-[4.5rem] max-sm:gap-y-6">
        {news.map((item, i) => (
          <Link
            href={item.href}
            className="fade-in-up-item rounded-[1.25rem] overflow-hidden relative group"
            key={i}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-linear-other-news cursor-pointer z-10"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white">
              <span className="py-1.5 px-3 max-sm:py-[0.31rem] max-sm:px-2.5 rounded-md bg-[rgba(248,244,241,0.48)] backdrop-blur-[15px] inline-flex items-center text-xs max-sm:text-[0.625rem] font-bold uppercase leading-[1.125rem] max-sm:leading-[0.9375rem] mb-[0.68rem] max-sm:mb-3">
                Tin tức du học
              </span>
              <p className="max-w-[23.24119rem] max-sm:max-w-full block font-svn-mightiest text-xl max-sm:text-sm font-medium leading-[1.875rem] max-sm:leading-[1.3125rem] tracking-[-0.025rem] mb-2">
                {item.title}
              </p>
              <div className="flex items-center space-x-1 text-sm max-sm:text-xs leading-[0.89663rem] max-sm:leading-[1.125rem] text-[#C0C0C0]">
                <Image
                  src="/home/calendar.svg"
                  alt="Calendar"
                  width={15}
                  height={16}
                  className="size-[1.01794rem] max-sm:size-[0.85238rem]"
                />
                <span>{item.date}</span>
              </div>
            </div>

            <div className="absolute top-8 right-8 z-30 max-sm:hidden">
              <div className="flex items-center justify-end relative overflow-hidden w-[8.5rem] h-11">
                <span className="absolute top-1/2 left-5 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
                  Xem thêm
                </span>
                <div className="w-11 h-full flex items-center justify-end rounded-[0.9375rem] bg-white group-hover:w-full transition-all duration-500">
                  <div className="size-11 flex items-center justify-center">
                    <ArrowTopRight />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-6 max-sm:space-x-4 mt-[1.38rem] max-sm:mt-6">
        <button
          type="button"
          className="py-[0.62rem] px-[0.53588rem] size-10 max-sm:size-8 p-3 max-sm:p-2.5 flex items-center justify-center rounded-xl hover:bg-[#3F2214]/20"
        >
          <ChevronLeft />
        </button>
        <div className="flex items-center space-x-3.5 max-sm:space-x-[1.19rem]">
          <button
            type="button"
            className="size-10 max-sm:size-8 p-3 max-sm:p-2.5 flex items-center justify-center border border-[#CFCECE] bg-[#3F2214] rounded-xl text-sm font-bold leading-[1.3125rem] text-white"
          >
            1
          </button>
          <button
            type="button"
            className="size-10 max-sm:size-8 p-3 max-sm:p-2.5 flex items-center justify-center border border-[#CFCECE] rounded-xl text-sm font-bold leading-[1.3125rem] bg-transparent text-[#3F2214] transtion duration-300 hover:bg-[#3F2214] hover:text-white"
          >
            2
          </button>
          <button
            type="button"
            className="size-10 max-sm:size-8 p-3 max-sm:p-2.5 flex items-center justify-center border border-[#CFCECE] rounded-xl text-sm font-bold leading-[1.3125rem] bg-transparent text-[#3F2214] transtion duration-300 hover:bg-[#3F2214] hover:text-white"
          >
            3
          </button>
          <button
            type="button"
            className="size-10 max-sm:size-8 p-3 max-sm:p-2.5 flex items-center justify-center border border-[#CFCECE] rounded-xl text-sm font-bold leading-[1.3125rem] bg-transparent text-[#3F2214] transtion duration-300 hover:bg-[#3F2214] hover:text-white"
          >
            4
          </button>
          <button
            type="button"
            className="size-10 max-sm:size-8 p-3 max-sm:p-2.5 flex items-center justify-center border border-[#CFCECE] rounded-xl text-sm font-bold leading-[1.3125rem] bg-transparent text-[#3F2214] transtion duration-300 hover:bg-[#3F2214] hover:text-white"
          >
            ...
          </button>
        </div>
        <button
          type="button"
          className="size-10 max-sm:size-8 p-3 max-sm:p-2.5 flex items-center justify-center rounded-xl hover:bg-[#3F2214]/20"
        >
          <ChevronLeft className="rotate-180" />
        </button>
      </div>
    </section>
  );
}
