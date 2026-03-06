import s from "./Input.module.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string,
  label: string,
  higherBox?: boolean
}

export default function Input({id, label, ...props}: InputProps) {
  return(
    <div className={s.container}>
      <label htmlFor={id} className={s.label}>{label}</label>
      <input
        id={id}
        className={s.input}
        {...props}
      />
    </div>
  )
}