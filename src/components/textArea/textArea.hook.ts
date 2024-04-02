import { useState, useEffect } from "react";
import { useFormikContext, FormikContextType } from "formik";

import { TTextArea, TTextAreaHook } from "./textArea.types";

export const useTextArea = (props: TTextArea): TTextAreaHook => {
    const  { field, currentValue } = props;
    const [value, setValue] = useState<string>('')

    let formikContext: FormikContextType<{[k: string]: string}> | null = null
    if(field) {
        formikContext = useFormikContext();
    }

    useEffect(() => {
      if(field && field.value) {
        setValue(field.value[field.name]);
      }
    }, [])


     /**
     * handleOnChange is a function that sets the value of the input and updates the formik's field value
     * if the field prop is passed from Field component
     * @param value - The value of the input
     */
     const handleOnChange = (valueChanged: string) => {
        setValue(valueChanged);
        if(field) {
            formikContext?.setFieldValue(field.name, valueChanged);
        } 
        if(currentValue) {
            currentValue(valueChanged);
        }
    }
    
    return {
        value,
        handleOnChange
    }
}