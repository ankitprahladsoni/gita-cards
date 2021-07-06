import React from "react";
import Commentary from "./Commentary";
import Translation from "./Translation";
import { Box, Text } from "@chakra-ui/react";
type Props = {};

const Verse = (props: Props) => {
  return (
    <Box as="section" py={2}>
      <Text>मूल श्लोकः</Text>
      <Text>धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।</Text>
      <Text>मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।</Text>
    </Box>
  );
};

Verse.Translation = Translation;
Verse.Commentary = Commentary;

export default Verse;
