import { Text } from "@chakra-ui/react";
import { TextElement } from "../templateTypes";
import getSanitizedString from "../TemplateEditorForm/utils/getSanitizedString";
import { memo } from "react";
import getTextTemplateStyles from "./utils/getTextTemplateStyles";

type TextTemplateEditorElementProps = {} & TextElement;

const TextTemplateEditorElement = (
  textTemplateConfig: TextTemplateEditorElementProps
) => {
  const safeHtml = getSanitizedString(textTemplateConfig?.content);
  const textStyle = getTextTemplateStyles(textTemplateConfig);

  return <Text {...textStyle}>{safeHtml}</Text>;
};

export default memo(TextTemplateEditorElement);
