import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {Input} from "./ui/input"

const CustomInput = ({form, name, label}) => {
  return (
    <div>
      <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="input-class" />
                      </FormControl>
                      <FormMessage className="form-message mt-2"/>
                    </div>
                  </div>
                )}
              />
    </div>
  )
}

export default CustomInput
