import { Box } from "@chakra-ui/react";
import { BoxElement } from "../templateTypes";
import getLinkTemplateStyles from "./utils/getLinkTemplateStyles";

type LinkTemplateElementProps = {} & BoxElement;

const LinkTemplateElement = (elementToRender: LinkTemplateElementProps) => {
  const linkTemplateElementStyles = getLinkTemplateStyles(elementToRender);
  return <Box {...linkTemplateElementStyles} />;
};

export default LinkTemplateElement;
