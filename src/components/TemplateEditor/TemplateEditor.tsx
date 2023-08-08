"use client";
import ImageTemplateEditorElement from "./ImageTemplateEditorElement";
import { TemplateElement } from "./templateTypes";
import BackgroundTemplateEditorElement from "./BackgroundTemplateEditorElement";
import TextTemplateEditorElement from "./TextTemplateEditorElement";
import { Box, HStack } from "@chakra-ui/react";
import TemplateEditorForm from "./TemplateEditorForm";
import useUploadedTemplateEditorStore from "../TemplateUploader/store/useUploadedTemplateEditorStore";
import ManagerTemplateTools from "./ManagerTemplateTools";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import getTemplateById from "./utils/getTemplateById";

type TemplateEditorProps = {
  templateId: string;
};

const TemplateEditor = ({ templateId }: TemplateEditorProps) => {
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );
  const setUploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.setUploadedTemplateEditor
  );

  useEffect(() => {
    if (!!templateId) {
      getTemplateById(templateId).then((template) => {
        setUploadedTemplateEditor(template);
      });
    }
  }, []);

  const isUploadedTemplateEmpty =
    Object.keys(uploadedTemplateEditor).length === 0;

  if (isUploadedTemplateEmpty) return null;

  const elementsToRender = Object.values(
    uploadedTemplateEditor?.elements || {}
  );
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
      <ManagerTemplateTools />
    </HStack>
  );
};

export default TemplateEditor;
