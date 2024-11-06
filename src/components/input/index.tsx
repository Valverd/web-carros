import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export default function Input({
  type,
  placeholder,
  name,
  register,
  error,
  rules
}: InputProps) {
  return (
    <>
      <input
        className="w-full border-2 rounded-md h-11 px-2 outline-none"
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-400">{error}</p>}

    </>
  );
}
