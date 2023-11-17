import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import HydrateStore from "~/components/HydrateStore";
import theme from "~/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HydrateStore>
        <Component {...pageProps} />
      </HydrateStore>
    </ChakraProvider>
  );
}
