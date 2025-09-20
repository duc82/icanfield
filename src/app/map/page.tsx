"use client";
import { Program, Region } from "@/types/map";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Map = dynamic(() => import("@/components/map/Map"), { ssr: false });

const regions: Region[] = [
  {
    name: "Canada",
    propertyName: "Canada",
    code: "CA",
    flag: "/map/ca-flag.png",
  },
  {
    name: "Châu Âu",
    propertyName: "Europe",
    code: "EU",
    countries: [
      "Albania",
      "Andorra",
      "Austria",
      "Belarus",
      "Belgium",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czechia",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "North Macedonia",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "United Kingdom",
      "Ukraine",
      "Turkey",
    ],
    flag: "/map/eu-flag.png",
  },
  {
    name: "Mỹ",
    propertyName: "United States of America",
    code: "US",
    flag: "/map/us-flag.jpeg",
  },
  {
    name: "New Zealand",
    propertyName: "New Zealand",
    code: "NZ",
    flag: "/map/nz-flag.png",
  },
  {
    name: "Úc",
    propertyName: "Australia",
    code: "AU",
    flag: "/map/au-flag.png",
  },
  {
    name: "Caribe",
    propertyName: "Grenada",
    code: "CB",
    flag: "/map/caribe-flag.jpeg",
  },
  {
    name: "Việt Nam",
    propertyName: "Vietnam",
    code: "VN",
    flag: "/map/vn-flag.png",
  },
  {
    name: "Hoàng Sa",
    propertyName: "Paracel Islands",
    code: "VN",
    flag: "/map/vn-flag.png",
  },
  {
    name: "Trường Sa",
    propertyName: "Spratly Islands",
    code: "VN",
    flag: "/map/vn-flag.png",
  },
];

const programs: Program[] = [
  {
    title: "Start-up Visa (SUV)",
    slug: "start-up-suv",
    image: "/map/program-1.webp",
    budget: "3.5 tỷ VND",
    duration: "7 - 40 tháng",
    languages: ["Tiếng Anh", "Tiếng Pháp"],
    regionCode: "CA",
  },
  {
    title: "Lao động tay nghề tỉnh bang",
    slug: "lao-dong-tay-nghe-tinh-bang",
    image: "/map/program-2.webp",
    budget: "1.5 tỷ VND",
    duration: "36 - 42 tháng",
    languages: ["Tiếng Anh", "Tiếng Pháp"],
    regionCode: "CA",
  },
  {
    title: "Thẻ tường trú nhân slovakia",
    slug: "the-tuong-tru-nhan-slovakia",
    image: "/map/program-3.webp",
    budget: "Từ 5 tỷ VND",
    duration: "5 - 6 tháng",
    languages: ["Không yêu cầu"],
    regionCode: "EU",
  },
  {
    title: "Quốc tịch Thổ Nhĩ Kỳ",
    slug: "quoc-tich-tho-nhi-ky",
    image: "/map/program-4.webp",
    budget: "10 tỷ VND",
    duration: "6 - 9 tháng",
    languages: ["Không yêu cầu"],
    regionCode: "EU",
  },
  {
    title: "Visa EB-1A Định cư Mỹ dành cho Nhân tài",
    slug: "visa-eb1a-dinh-cu-my-danh-cho-nhan-tai",
    image: "/map/program-5.webp",
    budget: "3 tỷ VND",
    duration: "15 - 17 tháng",
    languages: ["Không yêu cầu"],
    regionCode: "US",
  },
  {
    title: "Visa L1A Diện Luân Chuyển Nhân Sự",
    slug: "visa-l1a-dien-luan-chuyen-nhan-su",
    image: "/map/program-6.webp",
    budget: "2.5 tỷ VND",
    duration: "2 - 5 tháng",
    languages: ["Không yêu cầu"],
    regionCode: "US",
  },
  {
    title: "Active Investor Plus Visa (AIP)  New Zealand",
    slug: "active-investor-plus-visa-aip-new-zealand",
    image: "/map/program-7.webp",
    budget: "80 tỷ VND",
    duration: "4 - 6 tháng",
    languages: ["Không yêu cầu"],
    regionCode: "NZ",
  },
  {
    title: "Visa 981 (Diện tay nghề bảo lãnh vùng)",
    slug: "visa-981-dien-tay-nghe-bao-lanh-vung",
    image: "/map/program-8.webp",
    budget: "Từ 0.3 tỷ VND",
    duration: "6 - 9 tháng",
    languages: ["Tiếng Anh"],
    regionCode: "AU",
  },
  {
    title: "Visa 190 Diện tay nghề bảo lãnh bang",
    slug: "visa-190-dien-tay-nghe-bao-bang",
    image: "/map/program-9.webp",
    budget: "1 tỷ VND",
    duration: "1 - 6 tháng",
    languages: ["Tiếng Anh"],
    regionCode: "AU",
  },
  {
    title: "Quốc tịch Antigua Barbuda",
    slug: "quoc-tich-antigua-barbuda",
    image: "/map/program-10.webp",
    budget: "5 tỷ VND",
    duration: "3 - 6 tháng",
    languages: ["Không yêu cầu"],
    regionCode: "CB",
  },
  {
    title: "Quốc tịch Dominica",
    slug: "quoc-tich-dominica",
    image: "/map/program-11.webp",
    budget: "5 tỷ VND",
    duration: "4 - 6 tháng",
    languages: ["Không yêu cầu"],
    regionCode: "CB",
  },
];

export default function MapPage() {
  const [activeRegion, setActiveRegion] = useState<Region>(regions[0]);

  const regionLower = activeRegion.propertyName
    .toLowerCase()
    .split(" ")
    .join("-");

  return (
    <section className="bg-gray-200 px-10 max-sm:px-0 py-10 relative">
      <div className="flex h-full max-sm:flex-col rounded-[1.25rem] p-[1rem_2.69rem_2.38rem] pl-0 max-sm:px-0 bg-white">
        <div className="relative w-[65rem] h-[41.5rem] max-sm:h-[15rem] max-sm:w-full max-sm:px-4">
          <Map
            regions={regions}
            activeRegion={activeRegion}
            handleChangeRegion={(region) => setActiveRegion(region)}
          />
        </div>
        <div className="relative flex w-[28.3125rem] flex-col pt-[3.12rem] max-sm:w-full max-sm:px-0 z-[600]">
          <div className="flex overflow-hidden overflow-x-auto sm:min-h-[27.48rem] sm:flex-col sm:space-y-6 max-sm:space-x-4 max-sm:px-4">
            {programs
              .filter((p) => p.regionCode === activeRegion.code)
              .map((program) => (
                <Link
                  href={`/${program.slug}`}
                  key={program.slug}
                  className="rounded-[0.63rem] bg-[#F7F6F1] p-3 pb-6 max-sm:flex max-sm:w-auto max-sm:flex-col max-sm:rounded-[0.75rem] max-sm:p-[0.75rem]"
                >
                  <div className="line-clamp-3 flex items-center space-x-[1rem] border-b-[0.0625rem] border-[rgba(0,0,0,0.10)] pb-[1.12rem] max-sm:w-[18.75rem] max-sm:pb-[0.75rem]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={300}
                      height={200}
                      className="h-[6.4375rem] w-[8.75rem] rounded-[0.63rem] object-cover max-sm:size-[5.5rem] max-sm:rounded-[0.55rem]"
                    />
                    <div>
                      <div>
                        <span className="text-[0.625rem] font-bold uppercase leading-[1.5] text-brown max-sm:opacity-[0.5]">
                          Thông tin chương trình
                        </span>
                        <h3 className="line-clamp-2 text-[0.875rem] font-bold leading-[1.5] tracking-[-0.0175rem] text-brown sm:uppercase max-sm:line-clamp-2 max-sm:body-14-b">
                          {program.title}
                        </h3>
                      </div>
                      <div className="mt-[0.37rem] flex items-center justify-start space-x-[0.25rem] rounded-[0.25rem] bg-[rgba(101,67,30,0.15)] p-[0.25rem_0.5rem] sm:hidden">
                        <span className="tracking-[-0.00625rem] text-[rgb(28,28,28)] text-[0.625rem] leading-normal">
                          Thời gian xử lý
                        </span>
                        <p className="text-[0.625rem] font-bold text-[rgb(28,28,28)]">
                          {program.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-6 px-4 pt-[0.87rem] max-sm:space-x-2 max-sm:px-0 max-sm:pt-3 text-[rgb(21,21,21)]">
                    <div className="max-sm:bg-white max-sm:py-1 max-sm:px-2 max-sm:rounded-lg max-sm:flex-1">
                      <span className="text-[0.6875rem] leading-normal whitespace-nowrap max-sm:text-[0.625rem] max-sm:text-[rgba(92,92,92,0.7)] max-sm:tracking-[-.00625rem]">
                        Ngân sách tối thiểu
                      </span>
                      <p className="font-bold text-[0.8125rem] line-clamp-1 leading-normal">
                        {program.budget}
                      </p>
                    </div>
                    <div className="max-sm:hidden">
                      <span className="text-[0.6875rem] leading-normal whitespace-nowrap">
                        Thời gian xử lý
                      </span>
                      <p className="font-bold text-[0.8125rem] line-clamp-1 leading-normal">
                        {program.duration}
                      </p>
                    </div>
                    <div className="max-sm:bg-white max-sm:py-1 max-sm:px-2 max-sm:rounded-lg max-sm:flex-1">
                      <span className="text-[0.6875rem] leading-normal whitespace-nowrap max-sm:text-[0.625rem] max-sm:text-[rgba(92,92,92,0.7)] max-sm:tracking-[-.00625rem]">
                        Ngoại ngữ
                      </span>
                      <p className="font-bold text-[0.8125rem] line-clamp-1 leading-normal">
                        {program.languages.join(" / ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <Link
            href={`/dinh-cu-${regionLower}`}
            className="relative mt-[1.5rem] flex h-[4.875rem] w-full items-center overflow-hidden rounded-[0.5rem] max-sm:h-[4rem] max-sm:px-[1rem]"
          >
            <Image
              src={`/map/${regionLower}.webp`}
              alt={regionLower}
              width={500}
              height={500}
              className="z-1 absolute top-0 h-full w-full rounded-[0.63rem] object-cover max-sm:w-[90%]"
            />
            <div className="relative z-10 flex flex-col space-y-[0.12rem] pl-[10.0625rem] max-sm:pl-[6.5rem]">
              <span className="text-[0.875rem] font-semibold uppercase leading-[1.5] tracking-[-0.0175rem] text-white max-sm:text-[0.875rem]">
                Khám phá thêm
              </span>
              <span className="text-[0.625rem] font-semibold uppercase leading-[1.5] tracking-[-0.0125rem] text-white opacity-80 max-sm:text-[0.625rem]">
                chương trình liên quan
              </span>
            </div>
            <div className="absolute right-[0.25rem] top-1/2 z-10 flex size-[4.375rem] -translate-y-1/2 items-center justify-center overflow-hidden rounded-[0.375rem] bg-[rgba(255,255,255,0.22)] max-sm:right-[2.25rem] max-sm:h-[3.5rem] max-sm:w-[3.5rem]">
              <Image
                src="/map/arrow.svg"
                alt="Icanfield"
                width={200}
                height={200}
                className="size-[1.5rem] object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
