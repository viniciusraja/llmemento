import file from "~/components/SampleTemplate.json";
import ImageTemplateEditorElement from "./ImageTemplateEditorElement";
import { TemplateElement } from "./templateTypes";
import BackgroundTemplateEditorElement from "./BackgroundTemplateEditorElement";
import TextTemplateEditorElement from "./TextTemplateEditorElement";

const TemplateEditor = () => {
  const elementsToRender = Object.values(
    file.elements
  ) as any as TemplateElement[];

  return (
    <BackgroundTemplateEditorElement backgroundConfig={file.background as any}>
      {elementsToRender?.map((elementToRender) => {
        if (elementToRender.type === "text")
          return (
            <TextTemplateEditorElement
              key={elementToRender?.id}
              {...elementToRender}
            />
          );

        if (elementToRender.type === "image")
          return (
            <ImageTemplateEditorElement
              key={elementToRender?.id}
              {...elementToRender}
            />
          );
        return null;
      })}
    </BackgroundTemplateEditorElement>
  );
};

export default TemplateEditor;
