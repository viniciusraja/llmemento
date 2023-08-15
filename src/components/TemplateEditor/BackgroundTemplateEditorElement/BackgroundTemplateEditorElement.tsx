import { Box } from "@chakra-ui/react";
import { ForwardRefRenderFunction, ReactNode, forwardRef } from "react";
import { BackgroundTemplateElement } from "../templateTypes";
import mmToPixels from "./util/mmToPixels";
import getTemplateBackgroundStyles from "./util/getTemplateBackgroundStyles";

type BackgroundTemplateEditorElementProps = {
  children: ReactNode | null;
  backgroundConfig: BackgroundTemplateElement;
};
const BackgroundTemplateEditorElement: ForwardRefRenderFunction<
  HTMLDivElement,
  BackgroundTemplateEditorElementProps
> = ({ children, backgroundConfig }, ref) => {
  return (
    <Box {...getTemplateBackgroundStyles(backgroundConfig || {})} ref={ref}>
      {children}
    </Box>
  );
};

export default forwardRef(BackgroundTemplateEditorElement);
