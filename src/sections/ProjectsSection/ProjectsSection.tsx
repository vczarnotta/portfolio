import ProjectCard from "../../components/ProjectCard/ProjectCard"
import s from "./ProjectSection.module.css"

export default function ProjectsSection() {
  return(
    <section id="projects" className={s.container}>
      <h2>Utvalda Projekt</h2>
      <ProjectCard
        title="Produktivitetsapp"
        description="En webbaserad lösning för tidshantering, utvecklad som ett samarbetsprojekt. Appen erbjuder både vanligt stoppur och pomodoro-timer där sessioner loggas och visualiseras genom grafer. Inkluderar en integrerad Todo-modul för uppgiftshantering. Projektet är under aktiv utveckling."
        skills={["TypeScript", "React", "Context API", "Data Visualization", "React Router"]}
        codeLink="https://github.com/goteborg-1/kottekliv-productivity-app"
        demoLink="https://kottekliv.com/"
      />

      <ProjectCard
        title="Väderapplikation"
        description="En webbaserad väderapplikation byggd i vanilla JavaScript som hämtar och visar aktuellt väder för sökta städer. Applikationen visar den senast sökta staden i en större vy och sparar de 10 senaste sökningarna i lokal lagring."
        skills={["Vanilla JavaScript", "HTML5", "CSS3", "API", "LocalStorage"]}
        codeLink="https://github.com/vczarnotta/weather-app"
        demoLink="https://weather-app.vczarnotta.workers.dev/"
      />

      <a 
        href="https://github.com/vczarnotta"
        target="_blank"
        rel="noopener noreferrer"
        className={s.readMore}
      >
        Se fler av mina projekt -{">"}
      </a>
    </section>
  )
}