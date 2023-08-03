"use client";

import { Box } from "@chakra-ui/react";
import TemplateEditor from "~/components/TemplateEditor";

export default function Home() {
  return (
    <Box w="100%" h="100%" bg="#fff">
      <TemplateEditor />
    </Box>
  );
}
