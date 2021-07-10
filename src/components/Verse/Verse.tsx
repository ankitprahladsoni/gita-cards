import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  text: string;
};

const Verse = ({ text }: Props) => {
  return (
    <Box as="section" py={2}>
      <Text
        fontFamily="'Gotu', sans-serif"
        textAlign="center"
        fontWeight="semibold"
        whiteSpace="pre-wrap"
      >
        {text}
      </Text>
    </Box>
  );
};

const Translation = ({ text }: Props) => {
  return (
    <Box as="section" py={2} whiteSpace="pre-wrap">
      {text}
    </Box>
  );
};

const Commentary = ({ text }: Props) => {
  return (
    <Box as="section" py={2} whiteSpace="pre-wrap">
      {text}
    </Box>
  );
};

Verse.Translation = Translation;
Verse.Commentary = Commentary;

export default Verse;
