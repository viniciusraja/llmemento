import { Box } from "@chakra-ui/react";
import CustomInput from "~/components/form/CustomInput";
import useUpdateUploadedTemplateDataWithFormInput from "./hooks/useUpdateUploadedTemplateDataWithFormInput";
import { useEffect } from "react";

type TemplateEditorInputProps = {
  name: string;
  label?: string;
  value?: string;
};

const TemplateEditorInput = ({
  name,
  label,
  value,
}: TemplateEditorInputProps) => {
  useUpdateUploadedTemplateDataWithFormInput(name);
  return <CustomInput name={name} label={label} value={value} />;
};

export default TemplateEditorInput;
