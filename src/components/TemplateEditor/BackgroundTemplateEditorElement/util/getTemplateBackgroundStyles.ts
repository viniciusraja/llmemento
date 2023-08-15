import { BackgroundTemplateElement } from "../../templateTypes";
import mmToPixels from "./mmToPixels";

const getTemplateBackgroundStyles = (
  backgroundConfig: BackgroundTemplateElement
) => {
  const { pageConfig, r, g, b, a } = backgroundConfig || {};

  return {
    backgroundColor: `rgba(${r},${g},${b},${a})`,
    overflow: "hidden",
    position: "relative",
    height: mmToPixels(pageConfig?.size?.height),
    width: mmToPixels(pageConfig?.size?.width),
  } as const;
};

export default getTemplateBackgroundStyles;
