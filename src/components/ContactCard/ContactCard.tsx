import s from "./ContactCard.module.css"

interface ContactCardProps {
  icon: React.ReactNode,
  title: string,
  variant: "primary" | "secondary" | "accent"
  children: React.ReactNode
}

export default function ContactCard({icon, title, variant, children}: ContactCardProps) {
  return(
    <div className={s.card}>
      <div className={`${s.iconWrapper} ${s[variant]}`}>
        {icon}
      </div>
      <div className={s.content}>
        <h3 className={s.title}>{title}</h3>
        {children}
      </div>
    </div>
  )
}