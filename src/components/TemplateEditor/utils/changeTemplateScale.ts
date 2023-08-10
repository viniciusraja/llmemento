import { Map, fromJS } from "immutable";
import { TemplateData, TemplateElement } from "../templateTypes";

const TEMPLATE_SCALE = 0.5;

const scaleDimension = (dimensionToScale: number) =>
  dimensionToScale * TEMPLATE_SCALE;

const scalePositionObject = ({ x, y }: { x: number; y: number }) => {
  return {
    x: x * TEMPLATE_SCALE,
    y: y * TEMPLATE_SCALE,
  };
};
const scaleSizeObject = (
  templatePageSize: TemplateData["background"]["pageConfig"]["size"]
) => ({
  ...templatePageSize,
  width: scaleDimension(templatePageSize?.width),
  height: scaleDimension(templatePageSize?.height),
});

const scaleTextOrImageElement = (
  elements: Map<keyof TemplateElement, TemplateElement[keyof TemplateElement]>
) => {
  const scaledElements = elements?.map((element) =>
    element
      .updateIn(["size"], (size: any) => scaleSizeObject(size.toJS()))
      .updateIn(["position"], (position: any) =>
        scalePositionObject(position.toJS())
      )
      .updateIn(["fontSize"], scaleDimension)
  );
  return scaledElements;
};

const changeTemplateScale = (templateData: TemplateData) => {
  const templateDataMap = fromJS(templateData);
  const scaledTemplateDataMap = templateDataMap
    ?.updateIn(["background", "pageConfig", "size"], (size: any) =>
      scaleSizeObject(size?.toJS())
    )
    ?.updateIn(["elements"], scaleTextOrImageElement as any);

  return scaledTemplateDataMap?.toJS() as TemplateData;
};

export default changeTemplateScale;
