import useUploadedTemplateEditorStore from "~/components/TemplateUploader/store/useUploadedTemplateEditorStore";
import useTemplateFormEditorStore from "../../store/useTemplateFormEditorStore";
import { useUpdateEffect } from "react-use";

const useUpdateUploadedTemplateDataWithFormInput = (elementId: string) => {
  const templateEditorForm = useTemplateFormEditorStore(
    (state) => state.templateEditorForm
  ) as any;

  const setUploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.setUploadedTemplateEditor
  );
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  useUpdateEffect(() => {
    setUploadedTemplateEditor({
      ...uploadedTemplateEditor,
      elements: {
        ...uploadedTemplateEditor.elements,
        [elementId]: {
          ...uploadedTemplateEditor.elements[elementId],
          content: templateEditorForm[elementId],
        },
      },
    } as any);
  }, [templateEditorForm[elementId]]);
};

export default useUpdateUploadedTemplateDataWithFormInput;
