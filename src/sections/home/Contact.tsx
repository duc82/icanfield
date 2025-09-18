"use client";
import InputGroup from "@/components/home/InputGroup";
import ArrowRight from "@/components/svg/ArrowRight";
import { contactSchema } from "@/schemas/contact";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useForm } from "react-hook-form";
import z from "zod";

gsap.registerPlugin(ScrollTrigger);

type FormContact = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormContact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: FormContact) => {
    console.log(data);
  };

  useGSAP(() => {
    gsap.from(".fade-in-box-contact", {
      autoAlpha: 0,
      y: 100,
      duration: 1,
      delay: 0.2,
      ease: "power2",
      scrollTrigger: {
        trigger: ".fade-in-box-contact",
        start: "5% bottom",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <section className="relative h-[118.25rem] max-sm:h-[69.9375rem] w-full overflow-hidden">
      <Image
        src="/home/contact.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-full object-cover z-30 max-sm:hidden"
      />
      <Image
        src="/home/contact-west.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute fade-in-box-contact -top-[5rem] left-6 w-[64.45769rem] h-[71.75rem] object-cover z-20 max-sm:hidden"
      />
      <Image
        src="/home/contact-building.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-auto object-cover max-sm:hidden"
      />
      <Image
        src="/home/contact-plane.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-[7.7rem] left-[27.06rem] w-[5.79794rem] h-[3.85869rem] object-cover z-40 max-sm:hidden"
      />
      <Image
        src="/home/contact-bird.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-[28.06rem] left-[36.88rem] w-[12.56263rem] h-[10.36419rem] object-cover z-40 max-sm:hidden"
      />
      <Image
        src="/home/contact-mobile.png"
        alt=""
        fill
        className="object-cover z-10 sm:hidden"
      />

      <div className="absolute top-[9.19rem] right-[6.12rem] w-[36.5rem] max-sm:top-0 max-sm:px-4 max-sm:left-0 max-sm:w-full max-sm:pt-10 z-40">
        <h1 className="mb-8 max-sm:mb-[1.87rem] text-[2rem] max-sm:text-2xl font-svn-mightiest font-medium text-brown tracking-[-0.04rem] leading-[2.4rem]">
          Hãy kết nối với chúng tôi
        </h1>

        <form
          className="grid grid-cols-2 gap-y-6 gap-x-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputGroup
            id="fullName"
            label="Họ và tên"
            wrapperClassName="col-span-2"
            {...register("fullName")}
            error={errors.fullName?.message}
            required
          />
          <InputGroup
            id="email"
            label="Email"
            {...register("email")}
            error={errors.email?.message}
            required
          />
          <InputGroup
            id="phone"
            label="Số điện thoại"
            {...register("phone")}
            error={errors.phone?.message}
            required
          />
          <InputGroup
            id="message"
            label="Lời nhắn của bạn"
            wrapperClassName="col-span-2"
            {...register("message")}
            error={errors.message?.message}
          />
          <button
            type="submit"
            className="pl-6 pr-3 py-2 w-fit text-sm font-medium leading-[1.3125rem] tracking-[-0.0175rem] text-white inline-flex items-center justify-center rounded-lg space-x-2 bg-linear-[97deg] from-brown from-[-3.86%] via-secondary via-[51.97%] to-third to-[117.18%]"
          >
            <span>Gửi thông tin</span>
            <ArrowRight />
          </button>
        </form>
      </div>

      <div className="absolute bottom-[12.31rem] max-sm:bottom-8 left-0 w-full flex max-sm:flex-col max-sm:px-4 max-sm:gap-10 items-center justify-between pl-20 pr-[2.19rem] z-40">
        <Image
          src="/home/contact-logo.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="fade-in-box w-[35.5625rem] max-sm:w-[18.375rem] h-[9.68869rem] max-sm:h-auto shrink-0 object-cover"
        />
        <div className="max-w-[42rem] max-sm:max-w-full">
          <p className="fade-in-box mb-8 max-sm:mb-4 text-[2rem] max-sm:text-xl font-semibold leading-[2.6rem]  max-sm:leading-[1.625rem] text-brown -tracking-[0.08rem] max-sm:-tracking-[0.05rem]">
            Cuộc sống là một hành trình, và mỗi bước đi đúng đắn hôm nay sẽ mở
            ra cánh cửa cho một tương lai tươi sáng và tràn đầy hy vọng.
          </p>
          <p className="fade-in-box text-2xl max-sm:text-base font-medium -tracking-[0.06rem] max-sm:-tracking-[0.04rem] text-[#767676]">
            Khuyết danh
          </p>
        </div>
      </div>
    </section>
  );
}
