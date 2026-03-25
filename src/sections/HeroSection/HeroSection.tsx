import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button"
import profileImg from "../../assets/veronica_czarnotta.webp"
import s from "./HeroSection.module.css"

export default function HeroSection() {
  return(
    <Container variant="gradient" center>
      <img fetchPriority="high" src={profileImg} alt="Veronica Czarnotta" className={s.profileImg}/>

      <div>
        <h1>Veronica Czarnotta</h1>
        <p className={s.title}>Fullstack JavaScript Student</p>
      </div>

      <p className={s.description}>Fullstack-studerande med passion för frontend och UX/UI. Söker 6 månaders LIA-praktik med start i november 2026.</p>

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
    </Container>
  )
}