import { Input, Label, TextField as RaTextField } from 'react-aria-components';
import { type Control, type FieldValues, type UseControllerProps, useController } from 'react-hook-form';

interface TextFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: UseControllerProps<TFieldValues>['name'];
  label?: string;
  required?: boolean;
}

export function TextField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  required = false,
}: TextFieldProps<TFieldValues>) {
  const { field } = useController({
    name,
    control,
    rules: { required },
  });

  return (
    <RaTextField>
      {label && <Label>{label}</Label>}
      <Input name={name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
    </RaTextField>
  );
}
