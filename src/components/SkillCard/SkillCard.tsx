import s from "./SkillCard.module.css"
interface SkillCardProps {
  variant: "lightPink" | "pink" | "blue",
  icon: React.ReactNode,
  title: string,
  skills: string[]
}

export default function SkillCard({variant, icon, title, skills}: SkillCardProps) {

return(
  <article
    className={s.base}
  >
    <div className={s.titleWrapper}>
      <div className={`${s.icon} ${s[variant]}`}>
        {icon}
      </div>
      <h3>{title}</h3>
    </div>
    <ul className={s.skillsList}>
      {skills.map((skill) => (
        <li key={skill} className={s.skill}>{skill}</li>
      ))}
    </ul>
  </article>
)
}