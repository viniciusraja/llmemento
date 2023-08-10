import { Text } from "@chakra-ui/react";
import { TextElement } from "../templateTypes";
import getSanitizedString from "../TemplateEditorForm/utils/getSanitizedString";
import { memo } from "react";

type TextTemplateEditorElementProps = {} & TextElement;

const TextTemplateEditorElement = ({
  content,
  position,
  fontSize,
  fontFamily,
  size,
  textAlign,
  color: { r, g, b, a } = { r: 0, g: 0, b: 0, a: 0, id: "" },
  fontStyle,
  fontWeight,
}: TextTemplateEditorElementProps) => {
  const safeHtml = getSanitizedString(content);
  const textValidStyles = {
    textAlign,
    fontFamily,
    fontSize,
    color: `rgba(${r},${g},${b},${a})`,
    fontWeight,
    fontStyle,
  } as any;

  return (
    <Text
      // position="absolute"
      // top={position?.y}
      // left={position?.x}
      height={size?.height}
      width={size?.width}
      dangerouslySetInnerHTML={{ __html: safeHtml }}
      {...textValidStyles}
    />
  );
};

export default memo(TextTemplateEditorElement);
