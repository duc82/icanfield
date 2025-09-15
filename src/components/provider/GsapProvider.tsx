"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../header/Header";
import Footer from "../footer/Footer";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  CustomEase,
  ScrollToPlugin,
  ScrollSmoother
);

export default function GsapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    CustomEase.create("easeOut", "0,0,0.58,1");
    CustomEase.create("easeInOut", "0.42,0,0.58,1");
    gsap.defaults({
      ease: "power2",
      duration: 0.9,
    });
    ScrollSmoother.create({
      smooth: 1.5,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });
    ScrollTrigger.defaults({
      toggleActions: "play play play none",
      start: "top top+=100%",
      end: "bottom top",
    });
    const elements = gsap.utils.toArray<HTMLElement>(".fade-in-box");
    elements.forEach((el) =>
      gsap.from(el, {
        autoAlpha: 0,
        y: 50,
        scrollTrigger: {
          trigger: el,
          markers: true,
        },
        delay: 0.2,
        duration: 1,
      })
    );
  }, []);
  return (
    <div id="smooth-wrapper">
      <Header />

      <div id="smooth-content">
        {children}
        <Footer />
      </div>
    </div>
  );
}
