import Container from "../../components/Container/Container"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import kotteklivSmall from "../../assets/kottekliv_preview_small.webp"
import kotteklivMedium from "../../assets/kottekliv_preview_medium.webp"
import kotteklivLarge from "../../assets/kottekliv_preview_Large.webp"
import weatherSmall from "../../assets/weatherapp_preview_small.webp"
import weatherMedium from "../../assets/weatherapp_preview_medium.webp"
import weatherLarge from "../../assets/weatherapp_preview_large.webp"
import s from "./ProjectSection.module.css"

export default function ProjectsSection() {
  return(
    <Container id="projects" center>
      <h2>Utvalda Projekt</h2>
      <ProjectCard
        title="Produktivitetsapp"
        description="Ett produktivitetsverktyg för tidshantering, utvecklat som ett samarbetsprojekt i ett monorepo. Projektet omfattar en komplett webbapplikation i React samt utvalda delar implementerade i React Native för att utforska koddelning mellan plattformar. Appen erbjuder både stoppur och pomodoro-timer med datavisualisering via grafer, samt en integrerad Todo-modul för uppgiftshantering."
        skills={["TypeScript", "React", "React Native", "Monorepo", "Jest Testing", "Context API", "Data Visualization"]}
        codeLink="https://github.com/goteborg-1/kottekliv-productivity-app"
        demoLink="https://kottekliv.com/"
        previewImg={{
          small: kotteklivSmall,
          medium: kotteklivMedium,
          large: kotteklivLarge, 
          alt: "Kottekliv website preview"
        }}
      />

      <ProjectCard
        title="Väderapplikation"
        description="En webbaserad väderapplikation byggd i vanilla JavaScript som hämtar och visar aktuellt väder för sökta städer. Applikationen visar den senast sökta staden i en större vy och sparar de 10 senaste sökningarna i lokal lagring."
        skills={["Vanilla JavaScript", "HTML5", "CSS3", "API", "LocalStorage"]}
        codeLink="https://github.com/vczarnotta/weather-app"
        demoLink="https://weather-app.vczarnotta.workers.dev/"
        previewImg={{
          small: weatherSmall,
          medium: weatherMedium,
          large: weatherLarge,
          alt: "Weather website preview"
        }}
      />

      <a 
        href="https://github.com/vczarnotta"
        target="_blank"
        rel="noopener noreferrer"
        className={s.readMore}
      >
        Se fler av mina projekt -{">"}
      </a>
    </Container>
  )
}