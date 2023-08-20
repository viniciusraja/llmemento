import { Box, Text, VStack } from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import useUploadedTemplateEditorStore from "./store/useUploadedTemplateEditorStore";

const TemplateUploader = () => {
  const name = "template_uploader";
  const setUploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.setUploadedTemplateEditor
  );

  const handleFileLoad = (event: ProgressEvent<FileReader>) => {
    const content = event?.target?.result as string;
    try {
      const parsedData = JSON.parse(content);
      setUploadedTemplateEditor(parsedData);
    } catch (error) {
      console.error("Error parsing JSON file:", error);
    }
  };
  const handleFileSelection = (selectedFile: File) => {
    const reader = new FileReader();
    reader.onload = handleFileLoad;
    reader.readAsText(selectedFile);
  };

  return (
    <Box w="400px" h="100px" bg="gray.200">
      <FileUploader
        multiple={false}
        handleChange={handleFileSelection}
        name={name}
        dropMessageStyle={{
          opacity: 0.1,
          color: "transparent",
        }}
        types={["JSON"]}
      >
        <VStack w="100%" h="100%" justifyContent="center">
          <Text>Drop your template file here!</Text>
        </VStack>
      </FileUploader>
    </Box>
  );
};

export default TemplateUploader;
