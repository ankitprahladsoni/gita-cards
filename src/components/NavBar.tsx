import { Box, Flex, useColorModeValue, Select, Image } from "@chakra-ui/react";
import { useChapterContext } from "./ChapterContext";

export default function NavBar({ children }: any) {
  const { chapter, verseCount, verse, dispatch, swiper } = useChapterContext();
  const chapters = [...Array(18)].map((_, i) => (
    <option key={i} value={`chapter_${i + 1}`}>
      अध्याय {i + 1}
    </option>
  ));
  const verses = [...Array(verseCount)].map((_, i) => (
    <option key={i} value={i}>
      श्लोक {i + 1}
    </option>
  ));
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              boxSize="50px"
              src="https://web.archive.org/web/20190219070127if_/https://bhagavadgita.io/static/images/radhakrishna.png"
              alt="logo"
            />
          </Box>
          <Flex alignItems={"center"}>
            <Select
              value={chapter}
              onChange={(e) => {
                dispatch({ type: "changeChapter", chapter: e.target.value });
                swiper.slideTo(0);
              }}
              variant="unstyled"
            >
              {chapters}
            </Select>
            <Select
              value={verse}
              onChange={(e) => {
                dispatch({ type: "changeVerse", verse: e.target.value });
                swiper.slideTo(e.target.value);
              }}
              variant="unstyled"
            >
              {verses}
            </Select>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  );
}
