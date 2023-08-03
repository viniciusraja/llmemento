"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "~/components/Home";
import theme from "~/theme";

export default function HomePage() {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </CacheProvider>
  );
}
