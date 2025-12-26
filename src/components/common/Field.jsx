import { useId } from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = useId();
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className=" auth-label">
          {label} {children}
          {!!error && (
            <div role="alert" className="text-red-600">
              {error.message}
            </div>
          )}
        </label>
      )}
    </div>
  );
}
