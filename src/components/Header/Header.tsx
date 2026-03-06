import s from "./Header.module.css"

export default function Header() {
  return(
    <header className={s.header}>
      <p className={s.logo}>Portfolio</p>
    </header>
  )
}