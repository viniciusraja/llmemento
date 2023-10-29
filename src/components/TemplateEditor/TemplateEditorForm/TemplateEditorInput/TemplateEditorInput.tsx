import CustomInput from "~/components/form/CustomInput";
import useUpdateUploadedTemplateDataWithFormInput from "./hooks/useUpdateUploadedTemplateDataWithFormInput";

type TemplateEditorInputProps = {
  name: string;
  label?: string;
  isLinkElement?: boolean;
};

const TemplateEditorInput = ({
  name,
  label,
  isLinkElement,
}: TemplateEditorInputProps) => {
  useUpdateUploadedTemplateDataWithFormInput(
    name,
    isLinkElement ? "url" : undefined
  );

  return <CustomInput name={name} label={label} />;
};

export default TemplateEditorInput;
