import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BackgroundTemplateElement } from "../templateTypes";
import mmToPixels from "./util/mmToPixels";

type BackgroundTemplateEditorElementProps = {
  children: ReactNode | null;
  backgroundConfig: BackgroundTemplateElement;
};
const BackgroundTemplateEditorElement = ({
  children,
  backgroundConfig,
}: BackgroundTemplateEditorElementProps) => {
  const { pageConfig, r, g, b, a } = backgroundConfig || {};

  return (
    <Box
      bg={`rgba(${r},${g},${b},${a})`}
      overflow="hidden"
      position="relative"
      height={mmToPixels(pageConfig?.size?.height)}
      width={mmToPixels(pageConfig?.size?.width)}
    >
      {children}
    </Box>
  );
};

export default BackgroundTemplateEditorElement;
