"use client";
import { cn } from "@/lib/utils";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface InputGroupProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  label?: string;
  required?: boolean;
  type?: string;
  id?: string;
  wrapperClassName?: string;
}

export default function InputGroup({
  type = "text",
  required,
  label,
  error,
  wrapperClassName,
  ...rest
}: InputGroupProps) {
  const [value, setValue] = useState(rest.value ?? "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    rest.onChange?.(e);
  };

  return (
    <div className={wrapperClassName}>
      <div className="relative">
        <input
          {...rest}
          type={type}
          value={value}
          onChange={handleChange}
          className={cn(
            "px-4 py-3 text-sm w-full rounded-lg bg-[#F3F3F3] text-[#333] border border-black/10 focus:ring-0 focus:outline-none focus:border-brown transition duration-300",
            error && "border-[#EA3434] focus:border-[#EA3434]",
            rest.className
          )}
        />
        <label
          htmlFor={rest.id}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 left-4 text-base text-[#A1A1A1] -tracking-[0.02rem] cursor-text",
            value && "hidden"
          )}
        >
          {label} {required && <span className="text-[#EA3434]">*</span>}
        </label>
      </div>
      {error && (
        <p className="mt-1 text-sm max-sm:text-xs text-[#EA3434]">{error}</p>
      )}
    </div>
  );
}
