import { Image } from "@chakra-ui/react";
import { ImageElement } from "../templateTypes";

const ImageTemplateEditorElement = ({ metadata, position }: ImageElement) => {
  return (
    <Image
      src={metadata.imageApi?.url}
      width={"100%"}
      position="relative"
      top={position?.y}
      left={position?.x}
    />
  );
};

export default ImageTemplateEditorElement;
