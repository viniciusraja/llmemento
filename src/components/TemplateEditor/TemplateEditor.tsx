import { Box, HStack } from "@chakra-ui/react";
import TemplateEditorForm from "./TemplateEditorForm";
import useUploadedTemplateEditorStore from "../TemplateUploader/store/useUploadedTemplateEditorStore";
import { useEffect } from "react";
import getTemplateById from "./utils/getTemplateById";
import { useRouter } from "next/router";
import TemplateIsNotAvailable from "../TemplateIsNotAvailable";
import changeTemplateScale from "./utils/changeTemplateScale";
import TemplateViewer from "../TemplateViewer";
import DownloadTemplateButtons from "./DownloadTemplateButtons";
import TemplateDropArea from "./templateDragAndDrop/TemplateDropArea";

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

  return (
    <HStack w="100%" spacing="0" h="100vh" overflow="hidden">
      <Box w="50%">
        <TemplateEditorForm />
        <DownloadTemplateButtons />
      </Box>
      <Box w="50%">
        <TemplateDropArea>
          <TemplateViewer uploadedTemplateEditor={uploadedTemplateEditor} />
        </TemplateDropArea>
      </Box>
    </HStack>
  );
};

export default TemplateEditor;
