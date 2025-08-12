import Image from "next/image";
import Link from "next/link";

const Card = async ({ title, banner_portrait, price, $id }) => {
  return (
    <Link
      href={`/details/${$id}`}
      className="flex flex-col gap-5 min-w-[200px] w-[240px] mb-5 snap-start"
    >
      <div className="mx-auto relative">
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
        <p className="text-sm">IDR {price.toLocaleString("en-us")}</p>
      </div>
    </Link>
  );
};

export default Card;
