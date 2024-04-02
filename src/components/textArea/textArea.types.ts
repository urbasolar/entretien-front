import { FieldProps } from 'formik';

export type TTextArea = {
    label?: string;
    currentValue?: (value: string) => void;
    field?: FieldProps['field']; // Field object from Formik Field component
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export type TTextAreaHook = {
    value: string;
    handleOnChange: (value: string) => void;
  }