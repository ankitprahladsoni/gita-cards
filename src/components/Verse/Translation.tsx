import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Translation = (props: Props) => {
  return (
    <Box as="section" py={2}>
      अनुवाद:
      <br />
      धृतराष्ट्र बोले (टिप्पणी प0 1.2) - हे संजय! (टिप्पणी प0 1.3) धर्मभूमि
      कुरुक्षेत्र में युद्ध की इच्छा से इकट्ठे हुए मेरेे और पाण्डु के पुत्रों ने
      भी क्या किया?
    </Box>
  );
};

export default Translation;
