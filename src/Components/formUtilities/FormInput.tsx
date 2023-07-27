import React from "react";

type FormInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: string;
};

const FormInput= ({
  id,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
}:FormInputProps) => {
  return (
    <div className="form-group">
      <input
        type="text"
        id={id}
        name={id}
        placeholder=" "
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <label htmlFor={id}>{label}</label>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormInput;
