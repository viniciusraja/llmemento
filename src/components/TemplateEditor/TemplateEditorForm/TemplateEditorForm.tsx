import { FormProvider, useForm } from "react-hook-form";
import useTemplateFormEditorStore from "./store/useTemplateFormEditorStore";
import { useEffect } from "react";
import useUploadedTemplateEditorStore from "~/components/TemplateUploader/store/useUploadedTemplateEditorStore";
import { TextElement } from "../templateTypes";
import TemplateEditorInput from "./TemplateEditorInput";
import getSanitizedString from "./utils/getSanitizedString";

const TemplateEditorForm = () => {
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  const templateTextEditableFields = (
    Object.values(uploadedTemplateEditor.elements) as TextElement[]
  )
    ?.filter(
      (uploadedTemplateElement) => uploadedTemplateElement?.type === "text"
    )
    ?.map((uploadedTemplateElementText) => ({
      label: "",
      value: uploadedTemplateElementText?.content,
      name: uploadedTemplateElementText?.id,
    }));

  const templateEditorFormDefaultValues = templateTextEditableFields.reduce(
    (result, obj) => {
      return { ...result, [obj?.name]: getSanitizedString(obj?.value) };
    },
    {}
  );

  const templateEditorForm = useForm({
    defaultValues: templateEditorFormDefaultValues,
  });
  const { watch } = templateEditorForm;
  const formEditorValues = watch();
  const setTemplateEditorForm = useTemplateFormEditorStore(
    (state) => state.setTemplateEditorForm
  );

  useEffect(() => {
    setTemplateEditorForm(formEditorValues);
  }, [formEditorValues]);

  return (
    <FormProvider {...templateEditorForm}>
      {templateTextEditableFields?.map((templateEditorTextElement) => (
        <TemplateEditorInput
          name={templateEditorTextElement?.name}
          label={templateEditorTextElement?.label}
          value={templateEditorTextElement?.value}
        />
      ))}
    </FormProvider>
  );
};

export default TemplateEditorForm;
