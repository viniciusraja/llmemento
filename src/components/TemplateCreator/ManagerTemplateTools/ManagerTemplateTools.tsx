import { Button, HStack } from "@chakra-ui/react";
import useUploadedTemplateEditorStore from "~/components/TemplateCreator/TemplateUploader/store/useUploadedTemplateEditorStore";
import hasManagerPrivilegeAccess from "~/utils/hasManagerPrivilegeAccess";
import formatTemplateToSave from "./utils/formatTemplateToSave";

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
      body: JSON.stringify(formatTemplateToSave(uploadedTemplateEditor)),
    });

  const handleSaveTemplate = () => {
    if (!!uploadedTemplateEditor?.id) updateTemplate(uploadedTemplateEditor.id);
    createTemplate();
  };

  return (
    <HStack>
      <Button onClick={handleSaveTemplate}>SAVE TEMPLATE</Button>
      <Button>DELETE</Button>
    </HStack>
  );
};

export default ManagerTemplateTools;
