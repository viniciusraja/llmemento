import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import { BackgroundTemplateElement } from "../templateTypes";
import mmToPixels from "./util/mmToPixels";

type BackgroundTemplateEditorElementProps = {
  children: ReactElement;
  backgroundConfig: BackgroundTemplateElement;
};

const BackgroundTemplateEditorElement = ({
  children,
  backgroundConfig,
}: BackgroundTemplateEditorElementProps) => {
  const { pageConfig, r, g, b, a } = backgroundConfig;

  return (
    <Box
      bg={`rgba(${r},${g},${b},${a})`}
      overflow="hidden"
      height={mmToPixels(pageConfig?.size?.height, pageConfig?.size?.dpi)}
      width={mmToPixels(pageConfig?.size?.width, pageConfig?.size?.dpi)}
    >
      {children}
    </Box>
  );
};

export default BackgroundTemplateEditorElement;
