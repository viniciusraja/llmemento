import TemplateDropArea from "../TemplateEditor/templateDragAndDrop/TemplateDropArea";
import BackgroundTemplateEditorElement from "../TemplateEditor/BackgroundTemplateEditorElement";
import ImageTemplateEditorElement from "../TemplateEditor/ImageTemplateEditorElement";
import TemplateDraggableItem from "../TemplateEditor/templateDragAndDrop/TemplateDraggableItem";
import { ITEM_TYPES } from "../TemplateEditor/templateDragAndDrop/TemplateDraggableItem/itemTypes";
import TextTemplateEditorElement from "../TemplateEditor/TextTemplateEditorElement";
import TemplateIsNotAvailable from "../TemplateIsNotAvailable";
import { TemplateData } from "../TemplateEditor/templateTypes";

type TemplateViewerProps = {
  uploadedTemplateEditor: TemplateData;
};

const TemplateViewer = ({ uploadedTemplateEditor }: TemplateViewerProps) => {
  const elementsToRender = Object.values(
    uploadedTemplateEditor?.elements || {}
  );

  const isUploadedTemplateEmpty =
    Object.keys(uploadedTemplateEditor || {}).length === 0;

  if (isUploadedTemplateEmpty) return <TemplateIsNotAvailable />;

  return (
    <TemplateDropArea>
      <BackgroundTemplateEditorElement
        backgroundConfig={uploadedTemplateEditor?.background as any}
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

          return null;
        })}
      </BackgroundTemplateEditorElement>
    </TemplateDropArea>
  );
};

export default TemplateViewer;
