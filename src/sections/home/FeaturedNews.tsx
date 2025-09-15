"use client";

import Title from "@/components/home/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/components/svg/ArrowRight";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile";

const featuredNews = [
  {
    title:
      "Khám phá các quốc gia có chính sách định cư tay nghề tốt nhất, cơ hội phát triển sự nghiệp.",
    type: "Sự kiện nổi bật",
    date: "14.10.2024",
    image: "/home/featured_news-1.png",
    href: "#",
  },
  {
    title:
      "Khám phá các quốc gia có chính sách định cư tay nghề tốt nhất, cơ hội phát triển sự nghiệp.",
    type: "Sự kiện nổi bật",
    date: "14.10.2024",
    image: "/home/featured_news-1.png",
    href: "#",
  },
  {
    title: "Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024",
    type: "Sự kiện nổi bật",
    date: "14.10.2024",
    image: "/home/featured_news-2.png",
    href: "#",
  },
];

export default function FeaturedNews() {
  const isMobile = useIsMobile();
  const [newsActive, setNewsActive] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const progressBarRef = useRef(null);

  const itemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      const height = itemRef.current.offsetHeight;
      setItemHeight(height);
    }
  }, []);

  const featuredNew = featuredNews[newsActive];

  return (
    <section className="px-20 pt-20 pb-[6.75rem] max-sm:pt-12 max-sm:pb-6 max-sm:px-4">
      <Title text="Tin tức nổi bật" className="mb-6" />
      {!isMobile && (
        <div className="max-sm:hidden rounded-[1.25rem] w-full h-[34.63219rem] relative overflow-hidden">
          {featuredNews.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              fill
              alt={featuredNew?.title || "Featured News"}
              className={cn(
                "object-center opacity-0 transition duration-500",
                newsActive === index && "opacity-100"
              )}
            />
          ))}
          <div className="bg-linear-[183deg] from-[rgba(63,34,20,0.00)] from-[10.25%] to-black to-[119.74%] absolute top-0 w-full h-full"></div>
          <div className="absolute bottom-6 left-[4.54rem] flex flex-col space-y-[1.34rem] z-20">
            <div className="flex items-center space-x-[1.34rem]">
              <span className="bg-white text-brown rounded-[0.33625rem] px-[0.6725rem] flex items-center text-[0.78456rem] font-medium leading-[1.37181rem] tracking-[-0.02019rem]">
                {featuredNew?.type}
              </span>
              <div className="flex items-center space-x-1 text-[0.78456rem] leading-[0.89663rem] text-white">
                <Image
                  src="/home/calendar.svg"
                  alt="Calendar"
                  width={15}
                  height={16}
                  className="size-[0.89663rem]"
                />
                <span>{featuredNew?.date}</span>
              </div>
            </div>
            <div className="max-w-[40.9375rem]">
              <h3 className="text-white font-svn-mightiest text-[2.24156rem] font-medium leading-[2.68988rem] tracking-[-0.05606rem]">
                {featuredNew?.title}
              </h3>
            </div>
            <Link
              href={featuredNew?.href || "#"}
              className="px-6 py-2 w-fit text-white text-sm font-medium leading-[1.3125rem] tracking-[-0.0175rem] rounded-lg border border-white/25 h-12 space-x-2 flex items-center"
            >
              <span>Chi tiết bài viết</span>
              <ArrowRight />
            </Link>
          </div>

          <div className="absolute top-[5.63rem] bottom-[5.63rem] right-[1.48rem] max-sm:hidden flex items-center overflow-hidden z-20">
            <div
              style={{
                transform: `translateY(calc(50% - ${
                  newsActive * (itemHeight + 48) + itemHeight / 2
                }px))`,
              }}
              className="flex flex-col space-y-12 max-w-[18.3377rem] transition duration-300"
            >
              {featuredNews.map((featuredNew, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setNewsActive(index)}
                  ref={index === 0 ? itemRef : null}
                  className={cn(
                    "text-white/[34%] text-left transition duration-300",
                    newsActive === index && "text-white"
                  )}
                >
                  <p className="text-[0.78456rem] font-semibold leading-[1.01994rem] tracking-[0.05606rem] uppercase">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <h3 className="text-[0.96869rem] font-medium leading-[1.28469rem]">
                    {featuredNew.title}
                  </h3>
                </button>
              ))}
            </div>
            <div className="flex flex-col space-y-7 text-white">
              <button
                type="button"
                onClick={() =>
                  setNewsActive((prev) => (prev === 0 ? prev : prev - 1))
                }
                className="flex items-center justify-center p-2.5 rounded-full hover:bg-brown/90"
              >
                <ChevronUp />
              </button>
              <div className="flex flex-col items-center space-y-1.5">
                {featuredNews.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setNewsActive(index)}
                    className={cn(
                      "size-3 flex items-center justify-center rounded-full transition duration-300",

                      newsActive === index && "border border-white"
                    )}
                  >
                    <div
                      className={cn(
                        "size-2 rounded-full border border-white/40 transition duration-300",
                        newsActive === index && "bg-white border-none"
                      )}
                    ></div>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  setNewsActive((prev) =>
                    prev === featuredNews.length - 1 ? prev : prev + 1
                  )
                }
                className="flex items-center justify-center p-2.5 rounded-full hover:bg-brown/90"
              >
                <ChevronDown />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div
            ref={progressBarRef}
            className="absolute -bottom-1.5 left-0 w-full h-[0.8125rem] rounded-2xl bg-linear-[98deg] from-[#B56641] from-[41.26%] to-third to-[97.06%]"
          ></div>
        </div>
      )}

      {isMobile && (
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{
            el: ".pagination-mobile",
            type: "bullets",
            clickable: true,
            bulletClass:
              "size-3 flex items-center justify-center rounded-full bg-white/40",
            bulletActiveClass: "border border-brown swiper-pagination-active",
            renderBullet: function (index, className) {
              return `<span class="${className}"><div class="size-2 rounded-full border border-brown/40"></div></span>`;
            },
          }}
        >
          {featuredNews.map((featuredNew, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-[1.25rem] relative overflow-hidden"
                style={{
                  backgroundImage: `url(${featuredNew.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "34.625rem",
                }}
              >
                <div className="bg-linear-[182deg] from-[rgba(63,34,20,0.00)] from-[28.99%] to-black to-[107.39%] absolute top-0 w-full h-full"></div>
                <div className="absolute bottom-4 left-6 right-10 flex flex-col space-y-4 z-10">
                  <div className="flex items-center space-x-[1.34rem]">
                    <span className="bg-white text-brown rounded-[0.33625rem] px-[0.6725rem] flex items-center text-[0.78456rem] font-medium leading-[1.37181rem] tracking-[-0.02019rem]">
                      {featuredNew.type}
                    </span>
                    <div className="flex items-center space-x-1 text-[0.78456rem] leading-[0.89663rem] text-white">
                      <Image
                        src="/home/calendar.svg"
                        alt="Calendar"
                        width={0}
                        height={0}
                        className="size-[0.89663rem]"
                      />
                      <span>{featuredNew.date}</span>
                    </div>
                  </div>
                  <div className="max-w-[40.9375rem]">
                    <h3 className="text-white font-svn-mightiest text-lg font-medium leading-[1.35rem]">
                      {featuredNew.title}
                    </h3>
                  </div>
                  <Link
                    href={featuredNew.href}
                    className="w-fit text-white text-sm font-medium leading-[1.125rem ] tracking-[-0.015rem] rounded-lg space-x-2 flex items-center"
                  >
                    <span>Chi tiết bài viết</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="pagination-mobile flex items-center justify-center space-x-1.5 mt-6"></div>
        </Swiper>
      )}
    </section>
  );
}
