import Link from "next/link";
import React from "react";
import ArrowRight from "../svg/ArrowRight";
import Image from "next/image";

const infos = [
  {
    icon: "/footer/home.svg",
    href: "https://maps.app.goo.gl/e56DLTYeQMhpWtub9",
    content:
      "Tầng 12, Tòa nhà President Place 93 Nguyễn Du, Phường Sài Gòn, TP.HCM",
  },
  {
    icon: "/footer/email.svg",
    href: "mailto:vietnam@icanfield.com",
    content: "vietnam@icanfield.com",
  },
  {
    icon: "/footer/phone.svg",
    href: "tel:0766506655",
    content: "0766 50 66 55",
  },
];

const links = [
  {
    content: "Về chúng tôi",
    href: "#",
  },
  {
    content: "Định cư Canada",
    href: "#",
  },
  {
    content: "Định cư Mỹ",
    href: "#",
  },
  {
    content: "Định cư Châu Âu",
    href: "#",
  },
  {
    content: "Định cư nhập tịch Caribe",
    href: "#",
  },
];

const socials = [
  {
    icon: "/footer/facebook.svg",
    href: "https://www.facebook.com/icanfieldvietnam",
  },
  {
    icon: "/footer/instagram.svg",
    href: "https://www.instagram.com/icanfieldvietnam/",
  },
  {
    icon: "/footer/linkedin.svg",
    href: "https://www.linkedin.com/company/icanfield-vietnam/",
  },
  {
    icon: "/footer/youtube.svg",
    href: "https://www.youtube.com/@icanfieldvietnam",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#3F2214] text-white">
      <div className="pt-24 max-sm:pt-10">
        <div className="px-20 max-sm:px-4 flex flex-col items-center gap-6 max-sm:gap-4 mb-[3.25rem] max-sm:mb-10">
          <h1 className="text-center font-svn-mightiest text-[2.5rem] max-sm:text-xl font-semibold leading-[3rem] max-sm:leading-[1.625rem] tracking-[-0.05rem] max-sm:tracking-[-0.025rem]">
            Hãy để iCanfield dẫn lối <br /> hành trình quốc tế hóa của bạn!
          </h1>
          <Link
            href="#"
            className="px-6 py-2 w-fit text-white text-sm font-medium leading-[1.3125rem] tracking-[-0.0175rem] rounded-lg border border-white/25 max-sm:border-white/85 space-x-2 flex items-center"
          >
            <span>Hỗ trợ khách hàng</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="bg-white/[0.03] backdrop-blur-[10px] rounded-t-4xl py-16 max-sm:py-10 px-24 max-sm:px-4">
          <div className="flex items-center max-sm:flex-col justify-between gap-[6.63rem] max-sm:gap-8 mb-8">
            <Link href="/" className="shrink-0">
              <Image
                src="/footer/logo.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[11.875rem] h-[13.95613rem] max-sm:w-[8.18975rem] max-sm:h-[9.625rem]"
              />
            </Link>
            <div className="flex items-start max-sm:flex-col max-sm:gap-10 w-full justify-between max-sm:w-full">
              <div className="flex-[0_0_17.25rem] max-sm:flex-1">
                <h2 className="text-base font-medium uppercase text-white mb-8 max-sm:mb-4">
                  Thông tin liên hệ
                </h2>
                <ul className="flex flex-col space-y-5 max-sm:space-y-3">
                  {infos.map((info, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Image
                        src={info.icon}
                        alt="icon"
                        width={20}
                        height={20}
                        className="w-[1.25rem] h-auto mt-1 max-sm:mt-0"
                      />
                      <Link
                        href={info.href}
                        target="_blank"
                        className="max-sm:text-sm max-sm:font-light"
                      >
                        {info.content}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-[0_0_11.6875rem] max-sm:flex-1">
                <h2 className="text-base font-medium uppercase text-white mb-8 max-sm:mb-4">
                  Liên kết nhanh
                </h2>
                <ul className="grid grid-cols-1 max-sm:grid-cols-2 gap-4 max-sm:gap-3">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 last:hidden"
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        className="max-sm:text-sm max-sm:font-light"
                      >
                        {link.content}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-[0_0_21.3125rem] max-sm:flex-1">
                <h2 className="text-base font-medium text-white mb-8">
                  Kết nối ngay hôm nay, đội ngũ chuyên gia của chúng tôi sẵn
                  sàng hỗ trợ bạn!
                </h2>
                <div className="space-y-4">
                  <label
                    htmlFor="footer_email"
                    className="block text-sm leading-[1.3125rem] font-semibold"
                  >
                    Đăng ký để nhận tư vấn
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="footer_email"
                      placeholder="Email của bạn"
                      className="w-full pl-4 py-3 pr-9.5 text-sm bg-white rounded-lg text-[#333] placeholder:text-[#A1A1A1] placeholder:text-sm placeholder:font-normal border-none ring-0"
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 -translate-y-1/2 right-2"
                    >
                      <ArrowRight stroke="#A1A1A1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 pl-8 pr-6 max-sm:p-6 max-sm:pt-4 bg-[rgba(112,115,124,0.08)] max-sm:bg-[rgba(112,115,124,0.16)] backdrop-blur-[25px] rounded-2xl flex max-sm:flex-col max-sm:gap-4 items-center justify-between">
            <p className="text-white font-bold max-sm:text-sm leading-[1.3125rem] max-sm:order-2">
              © 2024 iCanfield. Designed by OKHUB
            </p>
            <div className="flex items-center space-x-3">
              {socials.map((social, index) => (
                <Link href={social.href} key={index} className="p-2.5">
                  <Image
                    src={social.icon}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="size-6 object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
