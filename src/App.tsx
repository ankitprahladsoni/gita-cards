import Carousel from "./components/Carousel";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar>
        <Carousel />
      </NavBar>
    </ChakraProvider>
  );
}

export default App;
