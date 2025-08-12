import { getById } from "@/lib/actions";
import Image from "next/image";

const page = async ({ params }) => {
  const id = (await params).id;

  const { title, desc, short_desc, price, logo, previews, banner_portrait } =
    await getById(id);
  console.log(await getById(id));
  return (
    <div>
      <h1 className="section-title">{title}</h1>
      <p>{short_desc}</p>
      <div className="horizontal-scroll ">
        {previews.map((preview, i) => (
          <Image
            src={preview}
            key={i}
            width={400}
            height={300}
            alt={`${title} image preview 1`}
            className="snap-start"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
