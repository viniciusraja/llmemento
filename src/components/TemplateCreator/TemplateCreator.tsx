import { VStack } from "@chakra-ui/react";
import TemplateUploader from "./TemplateUploader";
import useUploadedTemplateEditorStore from "./TemplateUploader/store/useUploadedTemplateEditorStore";

const TemplateCreator = () => {
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  console.log(uploadedTemplateEditor);

  return (
    <VStack w="100%" h="100vh" justifyContent="center">
      <TemplateUploader />
    </VStack>
  );
};

export default TemplateCreator;
