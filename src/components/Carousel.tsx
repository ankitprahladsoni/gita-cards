import { useSpringCarousel } from "react-spring-carousel-js";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Verse from "./Verse";

const Carousel = () => {
  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    withLoop: true,
    items: [
      {
        id: "item-1",
        renderItem: (
          <SliderItem>
            <Content />
          </SliderItem>
        ),
      },
      {
        id: "item-2",
        renderItem: (
          <SliderItem>
            <Content />
          </SliderItem>
        ),
      },
    ],
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
    <Box borderRadius={12} p={2} m={2} boxShadow="md">
      {children}
    </Box>
  );
};

const Content = () => {
  return (
    <Box overflow="auto" sx={{ touchAction: "pan-y" }}>
      <Box py={2} textAlign="center">
        अध्याय 1, श्लोक 1
      </Box>
      <Divider />
      <Verse />
      <Divider />
      <Verse.Translation />
      <Divider />
      <Verse.Commentary />
    </Box>
  );
};
