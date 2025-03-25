import React, { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, ...rest }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref} // Correctly forwarding the ref
      className="border p-2 rounded-md w-full"
      {...rest}
    />
  );
});

export default Input; // Ensure you are exporting it properly
