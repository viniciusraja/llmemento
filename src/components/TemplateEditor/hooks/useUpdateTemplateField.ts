import useUploadedTemplateEditorStore from "~/components/TemplateUploader/store/useUploadedTemplateEditorStore";
import { TemplateElement } from "../templateTypes";

type UseUpdateTemplateFieldProps = {
  elementId: string;
  data: Partial<TemplateElement>;
};

const useUpdateTemplateField = () => {
  const setUploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.setUploadedTemplateEditor
  );
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );
  const handleUpdateTemplateFields = ({
    elementId,
    data,
  }: UseUpdateTemplateFieldProps) =>
    setUploadedTemplateEditor({
      ...uploadedTemplateEditor,
      elements: {
        ...uploadedTemplateEditor.elements,
        [elementId]: {
          ...uploadedTemplateEditor.elements[elementId],
          ...data,
        },
      },
    } as any);

  return { handleUpdateTemplateFields };
};

export default useUpdateTemplateField;
