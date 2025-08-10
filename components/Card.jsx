import Image from "next/image";
import { getTrending } from "./../lib/actions";

const Card = async ({ title, banner_portrait, price }) => {
  const trending = await getTrending();
  return (
    <div className="flex flex-col gap-5 w-[240px]">
      <div className=" mx-auto">
        <Image
          src={banner_portrait}
          height={235}
          width={240}
          alt={`${title} banner_portrait`}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg leading-6">{title}</h1>
        <p className="text-sm">IDR {price.toLocaleString('en-us')}</p>
      </div>
    </div>
  );
};

export default Card;
