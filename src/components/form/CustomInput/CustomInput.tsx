import {
  FormControl,
  InputProps as ChakraInputProps,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type CustomInputProps = {
  name: string;
  label?: string;
  helperText?: string;
  info?: string;
  iconSize?: string;
  iconColor?: string;
} & ChakraInputProps;

const CustomInput = ({
  name,
  label,
  helperText,
  info,
  iconSize,
  iconColor,
  ...props
}: CustomInputProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const hasValue = watch(name);

  const { isDisabled } = props;

  return (
    <FormControl
      _focusWithin={{
        label: {
          transform: "translate(0, 12px) scale(0.9)",
        },
      }}
      isInvalid={!!errors.name}
    >
      <Input {...register(name)} />

      <FormLabel
        aria-disabled={isDisabled}
        transform={
          hasValue
            ? "translate(0, 12px) scale(0.9)"
            : "translate(0, 24px) scale(1)"
        }
      >
        {label}
      </FormLabel>

      {!!helperText && (
        <FormHelperText
          color="gray.800"
          _disabled={{ color: "gray.700" }}
          pl={4}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
export default CustomInput;
