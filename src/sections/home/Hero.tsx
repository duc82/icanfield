import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

export default function Hero() {
  return (
    <section className="bg-hero bg-no-repeat bg-center bg-cover min-h-[29.875rem] max-sm:min-h-[25rem] w-full">
      <div className="px-20 py-6 max-sm:py-[3.94rem] max-sm:px-4">
        <Breadcrumb
          data={[
            {
              title: "Tin tức",
              slug: "/blogs",
            },
          ]}
          className="max-sm:hidden"
        />
        <div className="mt-6">
          <div className="w-[58.96875rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="947"
              height="6"
              viewBox="0 0 947 6"
              fill="none"
              className="max-sm:hidden"
            >
              <path
                d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H946.5V2.5H3V3.5Z"
                fill="url(#paint0_linear_1889_53326)"
                fillOpacity="0.3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1889_53326"
                  x1="3"
                  y1="3.5"
                  x2="946.5"
                  y2="3.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.5" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex items-center max-sm:flex-col gap-20 max-sm:gap-8">
            <div className="w-full">
              <h1 className="mt-4 max-sm:m-0 font-svn-mightiest text-white font-medium uppercase text-[5rem] max-sm:text-[2.375rem] max-sm:leading-[2.85rem] leading-[6rem] tracking-[-0.1rem] max-sm:tracking-[-0.0475rem]">
                Sự Kiện icanfield
              </h1>
              <h2 className="font-svn-mightiest text-white text-[3.25rem] max-sm:text-[1.75rem] max-sm:font-medium max-sm:leading-[2.275rem] max-sm:tracking-[-0.035rem] font-medium leading-[3.9rem] tracking-[0.065rem]">
                Dòng Chảy Tin Tức
              </h2>
            </div>
            <div className="w-full">
              <p className="uppercase text-base max-sm:text-xs max-sm:leading-[1.125rem] font-semibold text-white/85 max-w-[20.1875rem] max-sm:max-w-full">
                Khám phá những chia sẻ giá trị, kinh nghiệm thực tiễn và thông
                tin hữu ích với iCanfield.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
