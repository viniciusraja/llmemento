import file from "~/components/SampleTemplate.json";
import ImageTemplateEditorElement from "./ImageTemplateEditorElement";
import { TemplateElement } from "./templateTypes";
import BackgroundTemplateEditorElement from "./BackgroundTemplateEditorElement";
import TextTemplateEditorElement from "./TextTemplateEditorElement";
import { Box, HStack } from "@chakra-ui/react";
import TemplateEditorForm from "./TemplateEditorForm";
import useUploadedTemplateEditorStore from "../TemplateUploader/store/useUploadedTemplateEditorStore";

const TemplateEditor = () => {
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  const elementsToRender = Object.values(
    uploadedTemplateEditor?.elements || {}
  ) as any as TemplateElement[];

  return (
    <HStack w="100%" spacing="0" h="100vh" overflow="hidden">
      <Box w="50%">
        <TemplateEditorForm />
      </Box>
      <Box w="50%">
        <BackgroundTemplateEditorElement
          backgroundConfig={uploadedTemplateEditor?.background as any}
        >
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
      </Box>
    </HStack>
  );
};

export default TemplateEditor;
