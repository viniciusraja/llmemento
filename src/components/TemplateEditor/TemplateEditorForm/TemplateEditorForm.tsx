import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "~/components/form/CustomInput";

const TemplateEditorForm = () => {
  const templateEditorForm = useForm({
    defaultValues: {},
  });
  return (
    <FormProvider {...templateEditorForm}>
      <CustomInput name="FIrst texts" label="asmdoasdmokmokmasd" />
    </FormProvider>
  );
};

export default TemplateEditorForm;
