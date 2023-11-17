import { Box, HStack, Stack } from "@chakra-ui/react";
import TemplateEditorForm from "./TemplateEditorForm";
import useUploadedTemplateEditorStore from "../TemplateCreator/TemplateUploader/store/useUploadedTemplateEditorStore";
import { useEffect } from "react";
import getTemplateById from "./utils/getTemplateById";
import { useRouter } from "next/router";
import TemplateIsNotAvailable from "../TemplateIsNotAvailable";
import changeTemplateScale from "./utils/changeTemplateScale";
import TemplateViewer from "../TemplateViewer";
import DownloadTemplateButtons from "./DownloadTemplateButtons";
import TemplateDropArea from "./templateDragAndDrop/TemplateDropArea";
import TemplateDraggablePreview from "./templateDragAndDrop/TemplateDraggablePreview";
import formatUploadedTemplate from "./utils/formatUploadedTemplate";
import FontLoader from "./FontLoader";
import mmToPixels from "./BackgroundTemplateEditorElement/util/mmToPixels";

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
    const uploadedTemplateIsDifferentThanStoredOne =
      templateId !== uploadedTemplateEditor?.id;
    if (
      !!templateId &&
      (isUploadedTemplateEmpty || uploadedTemplateIsDifferentThanStoredOne)
    ) {
      getTemplateById(templateId).then((template) => {
        //TODO only change template scale if it does not fit screen

        if (template)
          setUploadedTemplateEditor(
            changeTemplateScale(formatUploadedTemplate(template))
          );
      });
    }
  }, [templateId]);

  if (isUploadedTemplateEmpty) return <TemplateIsNotAvailable />;

  return (
    <Stack
      w="100%"
      spacing="0"
      h="100vh"
      alignItems="center"
      overflow="hidden"
      direction={{ base: "column", md: "row" }}
    >
      <FontLoader />
      <TemplateDraggablePreview />
      <Box w={{ base: "100%", md: "50%" }}>
        <TemplateEditorForm />
        <DownloadTemplateButtons />
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <TemplateDropArea
          width={mmToPixels(
            uploadedTemplateEditor?.background?.pageConfig?.size?.width
          )}
          height={mmToPixels(
            uploadedTemplateEditor?.background?.pageConfig?.size?.height
          )}
        >
          <TemplateViewer uploadedTemplateEditor={uploadedTemplateEditor} />
        </TemplateDropArea>
      </Box>
    </Stack>
  );
};

export default TemplateEditor;
