import ImageTemplateEditorElement from "./ImageTemplateEditorElement";
import BackgroundTemplateEditorElement from "./BackgroundTemplateEditorElement";
import TextTemplateEditorElement from "./TextTemplateEditorElement";
import { Box, HStack } from "@chakra-ui/react";
import TemplateEditorForm from "./TemplateEditorForm";
import useUploadedTemplateEditorStore from "../TemplateUploader/store/useUploadedTemplateEditorStore";
import { useEffect } from "react";
import getTemplateById from "./utils/getTemplateById";
import { useRouter } from "next/router";
import TemplateIsNotAvailable from "../TemplateIsNotAvailable";
import TemplateDraggableItem from "./templateDragAndDrop/TemplateDraggableItem";
import TemplateDropArea from "./templateDragAndDrop/TemplateDropArea";
import { ITEM_TYPES } from "./templateDragAndDrop/TemplateDraggableItem/itemTypes";
import TemplateDraggablePreview from "./templateDragAndDrop/TemplateDraggablePreview";
import changeTemplateScale from "./utils/changeTemplateScale";

const TemplateEditor = () => {
  const router = useRouter();
  const templateId = router?.query?.templateId as string;

  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );
  const setUploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.setUploadedTemplateEditor
  );

  const isUploadedTemplateEmpty =
    Object.keys(uploadedTemplateEditor || {}).length === 0;

  useEffect(() => {
    if (!!templateId && isUploadedTemplateEmpty) {
      getTemplateById(templateId).then((template) => {
        //TODO only change template scale if it does not fit screen
        if (template) setUploadedTemplateEditor(changeTemplateScale(template));
      });
    }
  }, [templateId]);

  if (isUploadedTemplateEmpty) return <TemplateIsNotAvailable />;

  const elementsToRender = Object.values(
    uploadedTemplateEditor?.elements || {}
  );

  return (
    <HStack w="100%" spacing="0" h="100vh" overflow="hidden">
      <TemplateDraggablePreview />
      <Box w="50%">
        <TemplateEditorForm />
      </Box>
      <Box w="50%">
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
      </Box>
      {/* <ManagerTemplateTools /> */}
    </HStack>
  );
};

export default TemplateEditor;
