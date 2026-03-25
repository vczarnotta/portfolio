import { CiDark, CiLight } from "react-icons/ci";
import s from "./Header.module.css"
import { useTheme } from "../../context/useTheme";
import Button from "../Button/Button";

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return(
    <header className={s.header}>
      <p className={s.logo}>Portfolio</p>
      <Button onClick={toggleTheme} variant="transparent">
        <span className={s.icon}>
          {theme === "dark" ?(
            <CiLight />
          ) : (
            <CiDark />
          )}
        </span>
      </Button>
    </header>
  )
}