import { Box, Divider, useColorModeValue } from "@chakra-ui/react";
import Verse from "./Verse";
import { getVerses, Verse as VerseType } from "./util";
import { memo, useEffect, useState } from "react";
import { useChapterContext } from "./useChapterContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  const [allVerses, setAllVerses] = useState<VerseType[]>([]);
  const {
    chapter = "chapter_1",
    verse,
    dispatch,
    setSwiper,
  } = useChapterContext();

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
          <ContentMemo {...v} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

const Content = ({ text, translation, commentary }: VerseType) => {
  return (
    <Box
      sx={{ touchAction: "pan-y" }}
      borderRadius={12}
      p={2}
      m={2}
      boxShadow="2xl"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Verse text={text} />
      <Divider borderWidth={"medium"} />
      <Verse.Translation text={translation} />
      <Divider borderWidth={"medium"} />
      <Verse.Commentary text={commentary} />
    </Box>
  );
};

const ContentMemo = memo(Content);
