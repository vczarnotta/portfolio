import { LuGithub, LuExternalLink } from "react-icons/lu"
import s from "./ProjectCard.module.css"

interface ProjectCardProps {
  title: string,
  description: string,
  skills: string[],
  codeLink: string,
  demoLink: string,
  previewImg: {link: string, alt: string}
}

export default function ProjectCard({title, description, skills, codeLink, demoLink, previewImg}: ProjectCardProps) {
  return(
    <article className={s.card}>
      <img src={previewImg.link} alt={previewImg.alt} className={s.previewImg} />
      <div className={s.content}>
        <h3 className={s.title}>{title}</h3>
        <p>{description}</p>
        <ul className={s.skillsList}>
          {skills.map((skill) => (
            <li key={skill} className={s.skill}>{skill}</li>
          ))}
        </ul>
        <div className={s.buttonWrapper}>
          <a 
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.button} ${s.secondary}`}
          >
            <span className={s.icon}><LuGithub /></span>
            <span>Kod</span>
          </a>
          <a 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.button} ${s.primary}`}
          >
            <span className={s.icon}><LuExternalLink /></span>
            <span>Demo</span>
          </a>
        </div>
      </div>
    </article>
  )
}