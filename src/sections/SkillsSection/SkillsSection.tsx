import SkillCard from "../../components/SkillCard/SkillCard"
import { LuLayoutTemplate, LuServer, LuWrench, LuCode, LuZap } from "react-icons/lu";
import s from "./skillsSection.module.css"

export default function SkillsSection() {
  return(
    <section className={s.container}>
      <h2>Tekniska Färdigheter</h2>
      <div className={s.skillsWrapper}>
        <SkillCard
          variant="lightPink"
          icon={<LuLayoutTemplate />}
          title="Frontend"
          skills={["React", "JavaScript", "TypeScript", "HTML5", "CSS3"]}
        />

        <SkillCard
          variant="pink"
          icon={<LuServer />}
          title="Backend"
          skills={["JavaScript", "Node.js"]}
        />

        <SkillCard
          variant="blue"
          icon={<LuWrench />}
          title="Tools"
          skills={["Git", "Github", "VS Code"]}
        />

        <SkillCard
          variant="lightPink"
          icon={<LuCode />}
          title="Core"
          skills={["JavaScript ES6+", "Async/Await", "Promises"]}
        />

        <SkillCard
          variant="pink"
          icon={<LuZap />}
          title="Other"
          skills={["Responsiv Design", "Testing (Jest)", "Agilt arbetssätt", "Webbprestanda"]}
        />
      </div>
    </section>
  )
}