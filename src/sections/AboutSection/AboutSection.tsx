import Container from "../../components/Container/Container"
import s from "./AboutSection.module.css"

export default function AboutSection() {
  return(
    <Container center>
      <h2>Om Mig</h2>

      <div className={s.text}>
        <p>Jag studerar just nu till Fullstack JavaScript-utvecklare på Chas Academy och är särskilt intresserad av frontendutveckling och UX/UI-design. Under utbildningen kommer jag få en bred grund inom både frontend och backend, men det är i gränslandet mellan teknik och design jag trivs allra bäst. Jag gillar att jobba kreativt, samarbeta i team och att hela tiden lära mig nya saker.</p>

        <p>I november 2026 söker jag en LIA-praktik på 6 månader och letar efter en plats där jag får möjlighet att utvecklas inom frontend och gärna även UX/UI. Är du eller ditt företag intresserade av att ta emot praktikanter framöver? Hör gärna av dig!</p>
      </div>
      
      <a
        href="/resume.pdf"
        download="Veronica_Czarnotta_CV.pdf"
        className={s.buttonLink}
      >
        Ladda ner mitt CV
      </a>
    </Container>
  )
}