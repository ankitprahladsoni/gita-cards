import { useSpringCarousel } from "react-spring-carousel-js";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Verse from "./Verse";
import { getVerses } from "./util";
import { useSpringCarouselContext } from "react-spring-carousel-js";
import { memo, useEffect, useState } from "react";
import { useChapterContext } from "./ChapterContext";

const Carousel = () => {
  const [allVerses, setAllVerses] = useState([]);
  const [chapter] = useChapterContext();

  useEffect(() => {
    getVerses(chapter).then((data) => setAllVerses(data as any));
  }, [chapter]);

  if (allVerses.length === 0) return null;
  return <AnotherW allVerses={allVerses} />;
};

export default Carousel;

function AnotherW({ allVerses }: any) {
  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    items: allVerses.map((v: any, i: any) => ({
      id: `${i}`,
      renderItem: (
        <SliderItem>
          <ContentMemo id={allVerses[i]} />
        </SliderItem>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      window.scrollTo(0, 0);
    }
  });

  return <SliderWrapper>{carouselFragment}</SliderWrapper>;
}

const SliderItem = ({ children, ...rest }: any) => {
  return (
    <Flex
      // h="100%"
      w="100%"
      sx={{ touchAction: "none" }}
      // bg="gray"
      alignItems="flex-start"
      alignContent="flex-start"
      {...rest}
    >
      {children}
    </Flex>
  );
};

const SliderWrapper = ({ children }: any) => {
  return (
    <Box
      borderRadius={12}
      p={2}
      m={2}
      boxShadow="md"
      // bg="blue"
      // h="100%"
      // h="200"
    >
      {children}
    </Box>
  );
};

const Content = ({ id }: any) => {
  const verse = id;

  return (
    <Box overflow="auto" sx={{ touchAction: "pan-y" }}>
      <Box py={2} textAlign="center">
        अध्याय 1, श्लोक 1
      </Box>
      <Divider />
      <Verse text={verse.text} />
      <Divider />
      <Verse.Translation text={verse.translation} />
      <Divider />
      <Verse.Commentary text={verse.commentary} />
    </Box>
  );
};

const ContentMemo = memo(Content);
