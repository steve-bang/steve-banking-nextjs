import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { authFormSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath, Form } from 'react-hook-form'
import { z } from 'zod'

const authForm = authFormSchema('sign-up')

interface CustomFormInputProps {
    control : Control<z.infer<typeof authForm>>
    name: FieldPath<z.infer<typeof authForm>>,
    label: string,
    type?: string,
    placeholder?: string,

}

const CustomFormInput = ({
     control, name, label, type, placeholder 
} : CustomFormInputProps ) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <div className="form-item">
            <FormItem>
            <FormLabel className="form-label">{label}</FormLabel>
            <FormControl>
                <Input type={type ?? 'text'} className="input-class" placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage className="form-message" />
            </FormItem>
        </div>
        )}
    />
  )
}

export default CustomFormInput