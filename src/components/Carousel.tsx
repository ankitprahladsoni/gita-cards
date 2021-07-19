import { Box, Divider } from "@chakra-ui/react";
import Verse from "./Verse";
import { getVerses, Verse as VerseType } from "./util";
import { memo, useEffect, useState } from "react";
import { useChapterContext } from "./ChapterContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Carousel = () => {
  const [allVerses, setAllVerses] = useState<VerseType[]>([]);
  const [chapter] = useChapterContext();

  useEffect(() => {
    getVerses(chapter).then((data) => setAllVerses(data));
  }, [chapter]);

  return (
    <Swiper className="mySwiper" autoHeight={true}>
      {allVerses.map((v, i) => (
        <SwiperSlide key={i}>
          <ContentMemo verse={v} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

const Content = ({ verse }: { verse: VerseType }) => {
  return (
    <Box
      overflow="auto"
      sx={{ touchAction: "pan-y" }}
      borderRadius={12}
      p={2}
      m={2}
      boxShadow="md"
    >
      <Verse text={verse.text} />
      <Divider />
      <Verse.Translation text={verse.translation} />
      <Divider />
      <Verse.Commentary text={verse.commentary} />
    </Box>
  );
};

const ContentMemo = memo(Content);
