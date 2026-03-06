import type { ButtonHTMLAttributes } from "react"
import s from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  onClick?: () => void,
  variant?: "primary" | "secondary" | "transparent" | "submit"
}

export default function Button({variant = "primary", onClick, children}: ButtonProps) {
  return(
    <button
      className={`${s.base} ${s[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}