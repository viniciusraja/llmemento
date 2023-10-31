import useUploadedTemplateEditorStore from "~/components/TemplateCreator/TemplateUploader/store/useUploadedTemplateEditorStore";
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
          ...uploadedTemplateEditor.elements[elementId as any],
          ...data,
        },
      },
    } as any);

  return { handleUpdateTemplateFields };
};

export default useUpdateTemplateField;
