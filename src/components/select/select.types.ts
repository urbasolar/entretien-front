import { Dispatch, SetStateAction } from "react";

import { TOption } from "@components/shared/types/option.types";
import { FieldProps } from "formik";


export type TSelect = {
    options: TOption[];
    selectedValue?: (value: TOption | TOption[]) => void;
    placeholder?: string;
    isMulti?: boolean;
    label?: string
    field?: FieldProps["field"]
    disabled?: boolean
    size?: "sm" | "md" | "lg" | "full"
}

export type TSelectHook = {
    selectedValue: TSelect["selectedValue"];
    isOpen: boolean;
    setSelected: Dispatch<SetStateAction<TOption | TOption[] | undefined>>;
    optionsFormatted: TSelect["options"];
    handleClickOnOption: (value: TOption) => void;
    removeOneSelected: (value: string) => void
    ref: any
    handleClickToOpenOptions: () => void
    cleanSelect: () => void
    selected?: TOption | TOption[];
}

export type TSelectContent = {
    isMulti?: TSelect["isMulti"];
    placeholder?: TSelect["placeholder"];
    selected?: TSelectHook["selected"];
    removeOneSelected: TSelectHook["removeOneSelected"]
};

export type TCrossToDelete = {
    cleanSelect: TSelectHook["cleanSelect"];
    selected: TSelectHook["selected"];
}

export type TOptionsWithIndex = TOption &  {
    index?: number
}