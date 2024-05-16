import HeadlineNews from "@/modules/News/HeadlineNews";
import HighlightNews from "@/modules/News/HighlightNews";
import LatestAndPopularNews from "@/modules/News/LatestAndPopularNews";

const News = () => {
  return (
    <>
      <HeadlineNews />
      <LatestAndPopularNews />
      <HighlightNews />
    </>
  );
};

export default News;
