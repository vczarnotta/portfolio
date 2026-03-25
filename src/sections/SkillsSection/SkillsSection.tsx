import Container from "../../components/Container/Container";
import SkillCard from "../../components/SkillCard/SkillCard"
import { LuLayoutTemplate, LuServer} from "react-icons/lu";
import s from "./skillsSection.module.css"

export default function SkillsSection() {
  return(
    <Container variant="gradient">
      <h2>Tekniska Färdigheter</h2>
      <p className={s.description}>Inför min LIA kommer jag, genom min utbildning till Fullstack JavaScript-utvecklare, ha byggt upp en bred kompetens inom både frontend och backend. Mina kunskaper kommer bland annat omfatta:</p>
      <div className={s.skillsWrapper}>
        <SkillCard
          variant="lightPink"
          icon={<LuLayoutTemplate />}
          title="Frontend & Design"
          skills={["React", "React-Native", "JavaScript (ES6+)", "TypeScript", "HTML5 / CSS3", "Responsiv Design", "Webbprestanda"]}
        />

        <SkillCard
          variant="blue"
          icon={<LuServer />}
          title="Backend & Utveckling"
          skills={["Node.js / Express", "REST API:er", "Databaser (Relational/Document)", "Git / Github", "TDD & Testing (Jest)", "Webbsäkerhet (OWASP)", "DevOps-principer", "Agilt arbetssätt"]}
        />
      </div>
    </Container>
  )
}