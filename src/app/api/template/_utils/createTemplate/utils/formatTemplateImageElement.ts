import { ImageElement } from "~/components/TemplateEditor/templateTypes";

const formatTemplateImageElement = (
  imageTemplateElement: any
): Omit<ImageElement, "id" | "crop"> => {
  return {
    sizeWidth: imageTemplateElement?.size?.width,
    sizeHeight: imageTemplateElement?.size?.height,
    positionX: imageTemplateElement?.position?.x,
    positionY: imageTemplateElement?.position?.y,
    rotation: imageTemplateElement?.rotation,
    keepProportions: imageTemplateElement?.keepProportions,
    opacity: imageTemplateElement?.opacity,
    type: imageTemplateElement?.type,
    url: imageTemplateElement?.url,
  };
};

export default formatTemplateImageElement;
