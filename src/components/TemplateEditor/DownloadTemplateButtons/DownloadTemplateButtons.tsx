import { Box, Button, HStack } from "@chakra-ui/react";
import { useRef } from "react";
import TemplateViewer from "~/components/TemplateViewer";
import useUploadedTemplateEditorStore from "~/components/TemplateUploader/store/useUploadedTemplateEditorStore";
import handleDownloadTemplate from "../utils/handleDownloadTemplate";

const DownloadTemplateButtons = () => {
  const printableComponent = useRef<HTMLDivElement>(null);

  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  const { downloadTemplatePng, downloadTemplatePdf } =
    handleDownloadTemplate(printableComponent);

  return (
    <HStack justifyContent="center" my="5">
      <Box position="absolute" top={-100000} left={-100000}>
        <TemplateViewer
          uploadedTemplateEditor={uploadedTemplateEditor}
          ref={printableComponent}
        />
      </Box>

      <Button onClick={async () => await downloadTemplatePdf()}>
        Baixar PDF
      </Button>
      <Button onClick={async () => await downloadTemplatePng()}>
        Baixar Imagem
      </Button>
    </HStack>
  );
};

export default DownloadTemplateButtons;
