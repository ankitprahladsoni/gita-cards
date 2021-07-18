import Carousel from "./components/Carousel";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./components/NavBar";
import { ChapterProvider } from "./components/ChapterContext";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ChapterProvider>
        <NavBar>
          <Carousel />
        </NavBar>
      </ChapterProvider>
    </ChakraProvider>
  );
}

export default App;
