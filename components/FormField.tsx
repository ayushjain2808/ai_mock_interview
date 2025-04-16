import React from 'react'
import {FormControl, FormDescription, FormField as shadFormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Controller, FieldValues, Path, Control} from "react-hook-form";

interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label:string;
    placeholder?:string;
    type?: "text" | "password" | "email" | "file";
}


const FormField = <T extends FieldValues>({control, name,type="text", label, placeholder}:FormFieldProps<T>) => (
    <Controller
        name={name}
        control={control} render={({field})=>(
        <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
                <Input
                    className="input"
                    placeholder={placeholder}
                    type={type}
                    {...field}
                />
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
        />
);
export default FormField
