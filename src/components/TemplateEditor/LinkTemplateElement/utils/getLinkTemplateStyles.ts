import { BoxElement } from "../../templateTypes";

const getLinkTemplateStyles = ({ size, position }: BoxElement) => {
  const linkTemplateValidStyles = {
    height: size?.height,
    width: size?.width,
    position: "absolute",
    top: position?.y,
    left: position?.x,
  } as any;

  return linkTemplateValidStyles;
};

export default getLinkTemplateStyles;
