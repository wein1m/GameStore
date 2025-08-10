import { getTrending } from "@/lib/actions";
import Image from "next/image";
import CTAButton from "@/components/btn";

const TrendingCarousel = async () => {
  const trending = await getTrending();
  return (
    <section className="mb-[-250px] md:mb-0">
      <h1 className="section-title">Trending</h1>

      <div className="flex flex-row justify-center gap-5">
        <div className=" h-[714px] w-full md:relative md:h-[513px] md:w-full rounded-3xl overflow-hidden">
          <Image
            src={trending[1].banner}
            fill
            alt={`${trending[1].title} background`}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

          <div className="absolute bottom-10 left-10 z-10 text-white w-[300px] mb-15 md:mb-0 md:w-[350px] ">
            <div className="flex flex-col gap-5">
              <Image
                src={trending[1].logo}
                alt={`${trending[1].title} logo`}
                width={300}
                height={80}
              />
              <p className="leading-[27px]">{trending[1].short_desc}</p>
            </div>

          </div>
            <a className="absolute bottom-10 right-10 z-10 text-black font-bold rounded-xl  bg-white px-[30px] py-[10px]">
              Play Now!
              {/* <span>IDR {trending[0].price.toLocaleString("en-us")}</span> */}
            </a>
        </div>

        <div className="hidden md:flex md:flex-col md:justify-between">
          {trending.map((i) => (
            <div
              key={i.$id}
              className="flex gap-5 rounded-xl p-2 "
            >
              <Image
                src={i.banner_portrait}
                width={55}
                height={150}
                alt={i.title}
                className="rounded-md"
              />
              <p className="text-sm font-semibold my-auto">{i.title}</p>
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
