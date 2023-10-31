import useUpdateTemplateField from "~/components/TemplateEditor/hooks/useUpdateTemplateField";
import useTemplateFormEditorStore from "../../store/useTemplateFormEditorStore";
import { useUpdateEffect } from "react-use";

const useUpdateUploadedTemplateDataWithFormInput = (
  elementId: string,
  keyToUpdate = "content"
) => {
  const templateEditorForm = useTemplateFormEditorStore(
    (state) => state.templateEditorForm
  ) as any;
  const { handleUpdateTemplateFields } = useUpdateTemplateField();

  useUpdateEffect(() => {
    handleUpdateTemplateFields({
      elementId,
      data: { [keyToUpdate]: templateEditorForm[elementId] },
    });
  }, [templateEditorForm[elementId]]);
};

export default useUpdateUploadedTemplateDataWithFormInput;
