import file from "~/components/SampleTemplate.json";
import ImageTemplateEditorElement from "./ImageTemplateEditorElement";
import { VStack } from "@chakra-ui/react";
import { TemplateElement } from "./templateTypes";
import BackgroundTemplateEditorElement from "./BackgroundTemplateEditorElement";

const TemplateEditor = () => {
  const elementsToRender = Object.values(
    file.elements
  ) as any as TemplateElement[];

  return (
    <VStack w="100%" h="100%">
      <BackgroundTemplateEditorElement
        backgroundConfig={file.background as any}
      >
        {elementsToRender?.map((elementToRender) => {
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
    </VStack>
  );
};

export default TemplateEditor;
