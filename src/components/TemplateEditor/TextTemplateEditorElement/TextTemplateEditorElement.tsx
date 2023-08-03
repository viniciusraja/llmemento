import { Box, Text } from "@chakra-ui/react";
import { TextElement } from "../templateTypes";
import dompurify from "dompurify";

type TextTemplateEditorElementProps = {} & TextElement;

const TextTemplateEditorElement = ({
  content,
  position,
  fontSize,
  fontFamily,
  size,
  textAlign,
  color: { r, g, b, a },
  fontStyle,
  fontWeight,
}: TextTemplateEditorElementProps) => {
  const safeHtml = dompurify.sanitize(content);
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
      position="absolute"
      top={position?.y}
      left={position?.x}
      height={size.height}
      width={size.width}
      dangerouslySetInnerHTML={{ __html: safeHtml }}
      {...textValidStyles}
    />
  );
};

export default TextTemplateEditorElement;
