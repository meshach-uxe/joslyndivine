import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  id: string;
  required?: boolean;
  help?: ReactNode;
  error?: string;
};

export function FormField({
  label,
  id,
  required,
  help,
  error,
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
        {required && <span className="field__required">Required</span>}
      </label>
      <input
        id={id}
        className={`input ${error ? "input--error" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : help ? `${id}-help` : undefined}
        required={required}
        {...rest}
      />
      {error && <span id={`${id}-err`} className="field__help field__help--error">⚠ {error}</span>}
      {!error && help && <span id={`${id}-help`} className="field__help">{help}</span>}
    </div>
  );
}

export function FormTextarea({
  label,
  id,
  required,
  help,
  error,
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
        {required && <span className="field__required">Required</span>}
      </label>
      <textarea
        id={id}
        className={`textarea ${error ? "input--error" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : help ? `${id}-help` : undefined}
        required={required}
        {...rest}
      />
      {error && <span id={`${id}-err`} className="field__help field__help--error">⚠ {error}</span>}
      {!error && help && <span id={`${id}-help`} className="field__help">{help}</span>}
    </div>
  );
}

export function FormSelect({
  label,
  id,
  required,
  help,
  error,
  children,
  ...rest
}: BaseProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
        {required && <span className="field__required">Required</span>}
      </label>
      <select
        id={id}
        className={`select ${error ? "input--error" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : help ? `${id}-help` : undefined}
        required={required}
        {...rest}
      >
        {children}
      </select>
      {error && <span id={`${id}-err`} className="field__help field__help--error">⚠ {error}</span>}
      {!error && help && <span id={`${id}-help`} className="field__help">{help}</span>}
    </div>
  );
}
