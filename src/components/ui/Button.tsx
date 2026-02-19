// src/components/ui/Button.tsx
import React, { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children, 
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const base = "px-4 py-2 my-3 rounded font-medium transition focus:outline-none focus:ring";

  const variants: Record<ButtonProps["variant"], string> = {
    primary: "bg-[var(--theme-primary)] text-white py-4 px-8",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-gray-400 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
