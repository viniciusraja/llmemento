import { Box } from "@chakra-ui/react";
import { BoxElement } from "../templateTypes";
import getLinkTemplateStyles from "./utils/getLinkTemplateStyles";

type LinkTemplateElementProps = {} & BoxElement;

const LinkTemplateElement = (elementToRender: LinkTemplateElementProps) => {
  const linkTemplateElementStyles = getLinkTemplateStyles(elementToRender);

  const handleOpenLinkInPreview = () => {
    window?.open(elementToRender?.url, "_blank");
  };

  return (
    <Box
      {...linkTemplateElementStyles}
      cursor="pointer"
      onClick={handleOpenLinkInPreview}
    />
  );
};

export default LinkTemplateElement;
