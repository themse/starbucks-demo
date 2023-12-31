'use client';

import { Field } from 'react-final-form';

import { TextInput, Icon, FormControl } from 'components';

type Props = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  hideError?: boolean;
  required?: boolean;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  className,
  placeholder,
  required = false,
  hideError = false,
}: Props) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => {
        const hasError = !hideError && meta.touched && meta.error;

        return (
          <FormControl errorMessage={meta.error} hideError={!hasError}>
            <TextInput
              type={type}
              label={label}
              defaultValue={defaultValue}
              className={className}
              placeholder={placeholder}
              required={required}
              {...input}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default FormInput;
