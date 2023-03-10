import React from 'react';

function Input({
  type,
  placeholder,
  size,
  color,
  variant,
  value,
  onChange,
  ...props
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-color_${color} input-size_${size} input-variant_${variant}`}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;
