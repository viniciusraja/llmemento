import CustomInput from "~/components/form/CustomInput";
import useUpdateUploadedTemplateDataWithFormInput from "./hooks/useUpdateUploadedTemplateDataWithFormInput";

type TemplateEditorInputProps = {
  name: string;
  label?: string;
};

const TemplateEditorInput = ({ name, label }: TemplateEditorInputProps) => {
  useUpdateUploadedTemplateDataWithFormInput(name);

  return <CustomInput name={name} label={label} />;
};

export default TemplateEditorInput;
