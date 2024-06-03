import React, { forwardRef } from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({id, onChange, placeholder, type = "text", ...rest }, ref) => {
    return (
      <div className="my-1">
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          ref={ref}
          className="rounded-sm shadow appearance-none py-2 px-3 w-19.5rem text-left leading-tight bg-transparent focus:outline-none focus:shadow-outline border text-slight-grey border-custom-Border"
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = 'Input'; // Necessary to give the component a name

export default Input;
