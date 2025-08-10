import { getTrending } from "@/lib/actions";
import Image from "next/image";
import CTAButton from "@/components/btn";

const page = async () => {
  const trending = await getTrending();
  console.log(trending[0]);
  return (
    <section>
      <h1 className="font-bold text-[40px] py-2">Trending</h1>

      <div className="flex flex-row justify-center gap-5">
        <div className="relative h-[513px] w-full rounded-3xl overflow-hidden">
          <Image
            src={trending[0].banner}
            fill
            alt={`${trending[0].title} background`}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

          <div className="absolute bottom-10 left-10 z-10 text-white w-[350px]">
            <div className="flex flex-col gap-5">
              <Image
                src={trending[0].logo}
                alt={`${trending[0].title} logo`}
                width={300}
                height={80}
              />
              <p className="leading-[27px]">{trending[0].short_desc}</p>
            </div>

          </div>
            <a className="absolute bottom-10 right-10 z-10 text-black font-bold rounded-xl  bg-white px-[30px] py-[10px]">
              Play Now!
              {/* <span>IDR {trending[0].price.toLocaleString("en-us")}</span> */}
            </a>
            {/* <CTAButton className=""/> */}
          {/* <p className="absolute top-5 left-5 z-10 text-white text-xl font-bold">
            hehehe
          </p> */}
        </div>

        <div className="flex flex-col justify-between">
          {trending.map((i) => (
            <div
              key={i.$id}
              className="flex gap-5 rounded-xl p-2 bg-[#ffffff40]"
            >
              <Image
                src={i.banner_portrait}
                width={55}
                height={150}
                alt={i.title}
                className="rounded-md"
              />
              <p className="text-[14px] font-semibold my-auto">{i.title}</p>
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

export default page;
