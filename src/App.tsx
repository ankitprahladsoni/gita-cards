import Carousel from "./components/Carousel";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Carousel />
    </ChakraProvider>
  );
}

export default App;
