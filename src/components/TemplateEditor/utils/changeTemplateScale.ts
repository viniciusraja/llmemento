import { Map, fromJS } from "immutable";
import { TemplateData, TemplateElement } from "../templateTypes";

const TEMPLATE_SCALE = 0.5;

const changeTemplateScale = (
  templateData: TemplateData,
  templateScale = TEMPLATE_SCALE
) => {
  const scaleDimension = (dimensionToScale: number) =>
    dimensionToScale * templateScale;

  const scalePositionObject = ({ x, y }: { x: number; y: number }) => {
    return {
      x: x * templateScale,
      y: y * templateScale,
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
    const scaledElements = elements?.map((element: any) =>
      element
        .updateIn(["size"], (size: any) => scaleSizeObject(size.toJS()))
        .updateIn(["position"], (position: any) =>
          scalePositionObject(position.toJS())
        )
        .updateIn(["fontSize"], scaleDimension)
    );
    return scaledElements;
  };

  const handleTemplateScaling = (templateDataToScale: TemplateData) => {
    const templateDataMap = fromJS(templateDataToScale);
    const scaledTemplateDataMap = templateDataMap
      ?.updateIn(["background", "pageConfig", "size"], (size: any) =>
        scaleSizeObject(size?.toJS())
      )
      ?.updateIn(["elements"], scaleTextOrImageElement as any);

    return scaledTemplateDataMap?.toJS() as TemplateData;
  };

  return handleTemplateScaling(templateData);
};

export default changeTemplateScale;
