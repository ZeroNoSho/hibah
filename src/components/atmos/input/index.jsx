import React, { forwardRef } from "react";
const Input = forwardRef(
  ({
    placeholder,
    onFocus,
    onBlur,
    className,
    type,
    value,
    onChange,
    disabled,
  }) => {
    return (
      <input
        disabled={disabled || false}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
);
export default Input;
