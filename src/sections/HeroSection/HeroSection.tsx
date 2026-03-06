import Button from "../../components/Button/Button"
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import s from "./HeroSection.module.css"

export default function HeroSection() {
  return(
    <section className={s.container}>
      <div className={s.placeholder}>Placeholder</div>

      <div>
        <h1>Veronica Czarnotta</h1>
        <p className={s.title}>Fullstack JavaScript Student</p>
      </div>

      <p className={s.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ab aspernatur fugiat quo quia doloremque nesciunt.</p>

      <div className={s.buttonWrapper}>
        <Button
          onClick={() => window.location.href = "#contact"}
        >
          Kontakta mig
        </Button>
        <Button
          variant="secondary"
          onClick={() => window.location.href = "#projects"}
        >
          Se mina Projekt
        </Button>
      </div>

      <div className={s.iconWrapper}>
        <a 
          href="https://github.com/vczarnotta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Besök min GitHub"
          className={s.iconLink}
        >
          <LuGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/veronica-czarnotta-44236623a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Besök min LinkedIn"
          className={s.iconLink}
        >
          <LuLinkedin />
        </a>
        <a 
          href="mailto:vczarnotta@gmail.com"
          aria-label="Skicka ett mail till mig"
          className={s.iconLink}
        >
          <LuMail />
        </a>
      </div>
    </section>
  )
}