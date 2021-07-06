import { useSpringCarousel } from "react-spring-carousel-js";
import { Box, Flex } from "@chakra-ui/react";

const Carousal = () => {
  const { carouselFragment } = useSpringCarousel({
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

  return <SliderWrapper>{carouselFragment}</SliderWrapper>;
};

export default Carousal;

const SliderItem = ({ children, ...rest }: any) => {
  return (
    <Flex h="100%" w="100%" sx={{ touchAction: "none" }} {...rest}>
      {children}
    </Flex>
  );
};

const SliderWrapper = ({ children }: any) => {
  return (
    <Box borderRadius={12} overflow="hidden" p={4} m={4} boxShadow="md">
      {children}
    </Box>
  );
};

const Content = () => {
  return (
    <Box>
      Title of the card
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam
      fugiat voluptas veniam quos voluptatem perferendis sint odio ratione? Amet
      blanditiis totam, tenetur dolorem dicta facilis beatae. Optio, odio
      blanditiis!
      <br />
    </Box>
  );
};
