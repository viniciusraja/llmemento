import { ImageElement } from "../templateTypes";

const ImageTemplateEditorElement = ({
  metadata,
  size,
  ...props
}: ImageElement) => {
  return (
    <img
      src={metadata.imageApi?.url}
      height={size.height}
      width={size.width}
      {...props}
    />
  );
};

export default ImageTemplateEditorElement;
