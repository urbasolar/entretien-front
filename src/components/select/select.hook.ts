import { useEffect, useRef, useState } from "react";

import { TOptionsWithIndex, TSelect, TSelectHook } from "@components/select/select.types";
import { TOption } from "@components/shared/types/option.types";
import { FormikContextType, useFormikContext } from "formik";

export const useSelect = (props: TSelect): TSelectHook => {
    const { options, selectedValue, isMulti, field, disabled } = props;
    const [selected, setSelected] = useState<TOptionsWithIndex | TOptionsWithIndex[] | undefined>();
    const [isOpen, setIsOpen] = useState(false);
    const [optionsFormatted, setOptionsFormatted] = useState(options)
    const ref = useRef()

    let formikContext: FormikContextType<TOption> | null = null
    if(field) {
        formikContext = useFormikContext()
    }
    
    const handleClickOnOption = (optionSelected: TOption) => {
        if(disabled) return;
        let optionsUpdated
        if(isMulti) {
            if (!selected || Array.isArray(selected) && !selected.length) {
                optionsUpdated = [optionSelected]
                setSelected([optionSelected]);
                setOptionsFormatted(options.filter((option) => option.value !== optionSelected.value))
            } else if (Array.isArray(selected) && selected.length) {
                const updatedSelected = [...selected, optionSelected];
                optionsUpdated = updatedSelected
                setSelected(updatedSelected);
                setOptionsFormatted(options.filter((option) => {
                    const toRemove = updatedSelected.find(item => item.value === option.value)
                    return toRemove === undefined
                }))
            }
        } else {
            optionsUpdated = optionSelected
            setSelected(optionSelected);
            setIsOpen(false);
            setOptionsFormatted(options.filter((option) => option.value !== optionSelected.value))
        }

        if(field) {
            formikContext?.setFieldValue(field.name, optionsUpdated)
        }
    }

    /**
     * Remove one selected option
     * then push it back to the optionsFormatted array
     * @param optionToUnselect string
     */
    const removeOneSelected = (optionToUnselect: string) => {
        if(Array.isArray(selected) && selected.length) {
            const updatedSelected = selected.filter((item: TOption) => item.value !== optionToUnselect);
            setSelected(updatedSelected);
            if(field) {
                formikContext?.setFieldValue(field.name, updatedSelected)
            }

            const optionIndex = options.findIndex(option => option.value === optionToUnselect)
            const currentOptionToUnselect = options.find(option => option.value === optionToUnselect)
            const optionsFormattedCopy = [...optionsFormatted]
            // Push current option unselected at its old index
            optionsFormattedCopy.splice(optionIndex, 0, currentOptionToUnselect as TOption)
            setOptionsFormatted(optionsFormattedCopy)
        }
    }

    const cleanSelect = () => {
        setSelected(undefined)
        setOptionsFormatted(options)
        if(field) {
            formikContext?.setFieldValue(field.name, undefined)
        }
    }

    useEffect(() => {
        if (selected === undefined) return;
        // selectedValue is useless if select component is used in a formik form
        if(selectedValue) {
            selectedValue(selected);
        }
    }, [selected]);

    const handleClickToOpenOptions = () => {
        if(disabled) return;
       setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if(!(ref.current as unknown as HTMLElement)?.contains(event.target)) {
                setIsOpen(false)
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
      }, [ref]);
      
    return {
        selectedValue,
        isOpen,
        selected,
        setSelected,
        optionsFormatted,
        handleClickOnOption,
        removeOneSelected,
        handleClickToOpenOptions,
        ref,
        cleanSelect
    }
}