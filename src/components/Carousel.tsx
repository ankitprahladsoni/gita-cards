import { useSpringCarousel } from "react-spring-carousel-js";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Verse from "./Verse";
import { getVerses } from "./util";
import { useSpringCarouselContext } from "react-spring-carousel-js";
import { useState } from "react";

const allVerses: any[] = getVerses();

const Carousel = () => {
  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    withLoop: true,
    items: allVerses.map((v, i) => ({
      id: `${i}`,
      renderItem: (
        <SliderItem>
          <Content id={i} />
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
};

export default Carousel;

const SliderItem = ({ children, ...rest }: any) => {
  return (
    <Flex h="100%" w="100%" sx={{ touchAction: "none" }} {...rest}>
      {children}
    </Flex>
  );
};

const SliderWrapper = ({ children }: any) => {
  return (
    <Box borderRadius={12} p={2} m={2} boxShadow="md" h="100%">
      {children}
    </Box>
  );
};

const Content = ({ id }: any) => {
  const {
    getIsActiveItem,
    useListenToCustomEvent,
    getIsNextItem,
    getIsPrevItem,
  } = useSpringCarouselContext();
  // console.log(getCurrentActiveItem(), id);

  const [isActive, setIsActive] = useState(getIsActiveItem("" + id));
  useListenToCustomEvent((data) => {
    if (data.eventName === "onSlideChange") {
      const i = "" + id;
      setIsActive(getIsActiveItem(i) || getIsNextItem(i) || getIsPrevItem(i));
    }
  });
  if (!isActive) {
    return null;
  }
  const verse = allVerses[id];

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
