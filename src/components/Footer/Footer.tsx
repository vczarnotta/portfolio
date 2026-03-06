import Button from "../Button/Button"
import s from "./Footer.module.css"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({top: 0})
  }
  return(
    <footer className={s.footer}>
      <p className={s.copyright}>© 2026 Veronica Czarnotta</p>
      <Button variant="transparent" onClick={scrollToTop}>↑ Till toppen</Button>
    </footer>
  )
}