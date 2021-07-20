import { Box, Divider, useColorModeValue } from "@chakra-ui/react";
import Verse from "./Verse";
import { getVerses, Verse as VerseType } from "./util";
import { memo, useEffect, useState } from "react";
import { useChapterContext } from "./ChapterContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Carousel = () => {
  const [allVerses, setAllVerses] = useState<VerseType[]>([]);
  const { chapter, verse, dispatch, setSwiper } = useChapterContext();

  useEffect(() => {
    getVerses(chapter).then((data) => {
      setAllVerses(data);
      dispatch({ type: "loadChapter", verseCount: data.length });
    });
  }, [chapter, dispatch]);

  return (
    <Swiper
      className="mySwiper"
      autoHeight={true}
      initialSlide={verse}
      onSlideChange={(s) => {
        dispatch({ type: "changeVerse", verse: s.activeIndex });
      }}
      onSwiper={setSwiper}
    >
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
      boxShadow="2xl"
      bg={useColorModeValue("gray.100", "gray.900")}
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
