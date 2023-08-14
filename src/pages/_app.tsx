import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HydrateStore from "~/components/HydrateStore";
import theme from "~/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HydrateStore>
      <DndProvider backend={HTML5Backend}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </DndProvider>
    </HydrateStore>
  );
}
