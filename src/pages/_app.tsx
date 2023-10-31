import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HydrateStore from "~/components/HydrateStore";
import TemplateDraggablePreview from "~/components/TemplateEditor/templateDragAndDrop/TemplateDraggablePreview";
import theme from "~/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider theme={theme}>
        <HydrateStore>
          <Component {...pageProps} />
        </HydrateStore>
      </ChakraProvider>
    </DndProvider>
  );
}
