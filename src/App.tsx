import Carousal from "./components/Carousal";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Carousal />
    </ChakraProvider>
  );
}

export default App;
