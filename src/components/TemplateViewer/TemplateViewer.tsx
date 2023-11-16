import BackgroundTemplateEditorElement from "../TemplateEditor/BackgroundTemplateEditorElement";
import ImageTemplateEditorElement from "../TemplateEditor/ImageTemplateEditorElement";
import TemplateDraggableItem from "../TemplateEditor/templateDragAndDrop/TemplateDraggableItem";
import { ITEM_TYPES } from "../TemplateEditor/templateDragAndDrop/TemplateDraggableItem/itemTypes";
import TextTemplateEditorElement from "../TemplateEditor/TextTemplateEditorElement";
import TemplateIsNotAvailable from "../TemplateIsNotAvailable";
import { TemplateData } from "../TemplateEditor/templateTypes";
import { ForwardRefRenderFunction, forwardRef } from "react";
import LinkTemplateElement from "../TemplateEditor/LinkTemplateElement";

type TemplateViewerProps = {
  uploadedTemplateEditor: TemplateData;
};

const TemplateViewer: ForwardRefRenderFunction<
  HTMLDivElement,
  TemplateViewerProps
> = ({ uploadedTemplateEditor }, ref) => {
  const elementsToRender = Object.values(
    uploadedTemplateEditor?.elements || {}
  );

  const isUploadedTemplateEmpty =
    Object.keys(uploadedTemplateEditor || {}).length === 0;

  if (isUploadedTemplateEmpty) return <TemplateIsNotAvailable />;

  return (
    <BackgroundTemplateEditorElement
      backgroundConfig={uploadedTemplateEditor?.background as any}
      ref={ref}
    >
      {elementsToRender?.map((elementToRender) => {
        if (elementToRender.type === "image")
          return (
            <ImageTemplateEditorElement
              key={elementToRender?.id}
              {...elementToRender}
            />
          );

        if (elementToRender.type === "text")
          return (
            <TemplateDraggableItem
              key={elementToRender?.id}
              draggableItem={elementToRender}
              itemType={ITEM_TYPES.TEXT}
            >
              <TextTemplateEditorElement {...elementToRender} />
            </TemplateDraggableItem>
          );

        if (elementToRender.type === "box")
          return <LinkTemplateElement {...elementToRender} />;

        return null;
      })}
    </BackgroundTemplateEditorElement>
  );
};

export default forwardRef(TemplateViewer);
