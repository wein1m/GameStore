import TrendingCarousel from "@/components/TrendingCarousel";
import JustReleased from "@/components/JustReleased";
import { getTrending } from "@/lib/actions";

const page = async () => {
  const trending = await getTrending()
  return (
    <>
      <TrendingCarousel trending={trending}/>
      <JustReleased />
    </>
  );
};

export default page;
