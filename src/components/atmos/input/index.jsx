import React, { forwardRef } from "react";
const Input = forwardRef(({ placeholder, onFocus, onBlur, className }, ref) => {
  return (
    <input
      ref={ref}
      className={`${className}`}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
});
export default Input;
