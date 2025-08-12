"use client";

import { getTrending } from "@/lib/actions";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TrendingCarousel = ({ trending }) => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const [index, setIndex] = useState(0);

  // Handle Content Changing
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % trending.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Animate on Index Change
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: 10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.inOut" }
      );
    }
  }, [index]);

  return (
    <section className="mb-[-250px] md:mb-0">
      <h1 className="section-title">Trending</h1>

      <div className="flex flex-row justify-center gap-5">
        {/* Main Carousel */}
        <Link
          href={`details/${trending[index].$id}`}
          className="h-[714px] w-full md:relative md:h-[513px] md:w-full rounded-3xl overflow-hidden"
        >
          <div ref={imageRef}>
            <Image
              src={trending[index].banner}
              fill
              sizes="714px"
              alt={`${trending[index].title} background`}
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

          <div
            ref={contentRef}
            className="absolute bottom-10 left-10 z-30 w-[calc(100%-5rem)]"
          >
            <div className="flex justify-between">
              {/* Left content */}
              <div className="flex flex-col gap-5 text-white w-[300px] mb-15 md:mb-0 md:w-[350px]">
                <Image
                  src={trending[index].logo}
                  alt={`${trending[index].title} logo`}
                  width={300}
                  height={80}
                  className="relative w-auto h-auto"
                />
                <p className="leading-[27px]">{trending[index].short_desc}</p>
              </div>

              {/* Right content */}
              <div className="flex flex-col justify-end">
                <p className="text-black font-bold rounded-xl bg-white px-[30px] py-[10px]">
                  Play for {trending[index].price.toLocaleString("en-us")}
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Thumb Column */}
        <div className="hidden md:flex md:flex-col md:justify-between">
          {trending.map((item, i) => (
            <div
              key={item.$id}
              className={`flex gap-5 rounded-xl p-2 ${
                i === index ? "bg-[#ffffff20]" : "bg-none"
              }`}
            >
              <Image
                src={item.banner_portrait}
                width={55}
                height={150}
                alt={item.title}
                className="rounded-md"
              />
              <p
                className={`text-sm my-auto ${
                  i === index ? "font-bold" : "font-normal"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* {trending.map((i) => (
        <div key={i.$id}>
          <Image src={i.banner} width={1920} height={1080} alt={i.title} />
          <p>{i.short_desc}</p>
        </div>
      ))} */}
    </section>
  );
};

export default TrendingCarousel;
