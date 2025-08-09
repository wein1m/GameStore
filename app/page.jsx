import { getTrending } from "@/lib/actions";
import Image from "next/image";

const page = async () => {
  const fetching = await fetch()
  console.log(fetching)
  return (
    <section>
      <h1 className="font-bold text-[40px]">Trending</h1>

      <Image src={fetching.banner} width="1920" height="1080" alt={fetching.title}/>
      <p>{fetching.short_desc}</p>
    </section>
  )
}

export default page
