import { Box, Button, HStack } from "@chakra-ui/react";
import TemplateEditorForm from "./TemplateEditorForm";
import useUploadedTemplateEditorStore from "../TemplateUploader/store/useUploadedTemplateEditorStore";
import { useEffect, useRef } from "react";
import getTemplateById from "./utils/getTemplateById";
import { useRouter } from "next/router";
import TemplateIsNotAvailable from "../TemplateIsNotAvailable";
import changeTemplateScale from "./utils/changeTemplateScale";
import handleDownloadTemplate from "./utils/handleDownloadTemplate";
import TemplateViewer from "../TemplateViewer";

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

  const printableComponent = useRef<HTMLDivElement>(null);

  const { downloadTemplatePng, downloadTemplatePdf } =
    handleDownloadTemplate(printableComponent);

  return (
    <HStack w="100%" spacing="0" h="100vh" overflow="hidden">
      <Box w="50%">
        <TemplateEditorForm />
        <HStack justifyContent="center" my="5">
          <Button onClick={async () => await downloadTemplatePdf()}>
            Baixar PDF
          </Button>
          <Button onClick={async () => await downloadTemplatePng()}>
            Baixar Imagem
          </Button>
        </HStack>
      </Box>
      <Box w="50%">
        <TemplateViewer uploadedTemplateEditor={uploadedTemplateEditor} />
      </Box>
      {/* <ManagerTemplateTools /> */}
    </HStack>
  );
};

export default TemplateEditor;
