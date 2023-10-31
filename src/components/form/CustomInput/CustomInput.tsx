import {
  FormControl,
  InputProps as ChakraInputProps,
  FormLabel,
  FormHelperText,
  Input,
  Box,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

type CustomInputProps = {
  name: string;
  label?: string;
  helperText?: string;
  info?: string;
  iconSize?: string;
  iconColor?: string;
} & ChakraInputProps;

const CustomInput: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputProps
> = (props) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const { name, label, helperText, isDisabled } = props;
  const hasValue = watch(name);

  return (
    <Box>
      <FormControl
        _focusWithin={{
          label: {
            transform: "translate(0, 12px) scale(0.9)",
          },
        }}
        isInvalid={!!errors.name}
      >
        <Input {...register(name)} {...props} />

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
    </Box>
  );
};
export default forwardRef(CustomInput);
