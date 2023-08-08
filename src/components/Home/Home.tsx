import { VStack } from "@chakra-ui/react";
import TemplateEditor from "../TemplateEditor";
import useUploadedTemplateEditorStore from "../TemplateUploader/store/useUploadedTemplateEditorStore";
import TemplateUploader from "../TemplateUploader";

export default function Page() {
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  const isUploadedTemplateEmpty =
    Object.keys(uploadedTemplateEditor).length === 0;

  return (
    <VStack w="100%" bg="red">
      {isUploadedTemplateEmpty ? <TemplateUploader /> : <TemplateEditor />}
    </VStack>
  );
}
