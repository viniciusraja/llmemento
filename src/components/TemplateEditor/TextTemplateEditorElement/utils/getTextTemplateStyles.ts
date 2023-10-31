import { TextElement } from "../../templateTypes";

const getTextTemplateStyles = ({
  fontSize,
  fontFamily,
  size,
  textAlign,
  color: { r, g, b, a } = {} as any,
  fontStyle,
  fontWeight,
}: TextElement) => {
  const textValidStyles = {
    textAlign,
    fontFamily,
    fontSize,
    color: `rgba(${r},${g},${b},${a})`,
    fontWeight,
    fontStyle,
    height: size?.height,
    width: size?.width,
  } as any;

  return textValidStyles;
};

export default getTextTemplateStyles;
