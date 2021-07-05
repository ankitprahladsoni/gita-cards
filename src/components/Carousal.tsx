/** @jsxImportSource @emotion/react */
import { useSpringCarousel } from "react-spring-carousel-js";
import { css, Global } from "@emotion/react";

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
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 24px;
        color: #000;
        min-height: 200px;
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

const SliderWrapper = ({ children }: any) => {
  return (
    <div
      css={css`
        border-radius: 12px;
        overflow: hidden;
        background-color: #fff;
        padding: 16px;
        flex: 1;
        margin: 24px;
        box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.0012),
          0 12.3px 17.9px rgba(0, 0, 0, 0.062), 0 10px 20px rgba(0, 0, 0, 0.06);
      `}
    >
      <Global
        styles={css`
          html {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          body {
            display: flex;
            flex: 1;
            letter-spacing: 1px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
          #root {
            display: flex;
            flex: 1;
            width: 100vw;
          }
          .sb-main-padded.sb-main-padded {
            display: flex;
            padding: 0;
            margin: 0;
          }
        `}
      />
      {children}
    </div>
  );
};

const Content = () => {
  return (
    <div>
      Title of the card
      {/* <br />
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
      <br /> */}
    </div>
  );
};
