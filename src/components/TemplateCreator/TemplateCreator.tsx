import { VStack } from "@chakra-ui/react";
import TemplateUploader from "./TemplateUploader";
import useUploadedTemplateEditorStore from "./TemplateUploader/store/useUploadedTemplateEditorStore";
import ManagerTemplateTools from "./ManagerTemplateTools";

const TemplateCreator = () => {
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  const isUploadedTemplateEmpty =
    Object.keys(uploadedTemplateEditor).length === 0;

  return (
    <VStack w="100%" h="100vh" justifyContent="center">
      <TemplateUploader />
      {!isUploadedTemplateEmpty && <ManagerTemplateTools />}
    </VStack>
  );
};

export default TemplateCreator;
