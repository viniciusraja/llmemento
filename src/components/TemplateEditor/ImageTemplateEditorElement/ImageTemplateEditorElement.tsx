import { Image } from "@chakra-ui/react";
import { ImageElement } from "../templateTypes";

const ImageTemplateEditorElement = ({ metadata, position }: ImageElement) => {
  return (
    <Image
      src={metadata.imageApi?.url}
      alt="Template Image"
      position="absolute"
      draggable="false"
      top={position?.y}
      left={position?.x}
    />
  );
};

export default ImageTemplateEditorElement;
