import s from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode,
  onClick: () => void,
  variant?: "primary" | "secondary"
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