import { Box, Button } from "@chakra-ui/react";
import useUploadedTemplateEditorStore from "~/components/TemplateUploader/store/useUploadedTemplateEditorStore";
import hasManagerPrivilegeAccess from "~/utils/hasManagerPrivilegeAccess";

const ManagerTemplateTools = () => {
  const isManager = hasManagerPrivilegeAccess();
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  if (!isManager) return null;

  const updateTemplate = (templateId: string) =>
    fetch(`/api/template/${templateId}/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  const createTemplate = () =>
    fetch("/api/template", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadedTemplateEditor),
    });

  const handleSaveTemplate = () => {
    if (!!uploadedTemplateEditor?.id) updateTemplate(uploadedTemplateEditor.id);
    createTemplate();
  };

  return (
    <Box bg="blue">
      <Button onClick={handleSaveTemplate}>SAVE TEMPLATE</Button>
      <Button>DELETE</Button>
    </Box>
  );
};

export default ManagerTemplateTools;
