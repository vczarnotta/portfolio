import s from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  variant?: "transparent" | "gradient"
  id?: string
  center?: boolean
}

export default function Container({ children, variant = "transparent", id, center}: ContainerProps) {
  return (
    <section className={`${s.container} ${s[variant]}`} id={id}>
      <div className={`${s.inner} ${center && s.center}`}>
        {children}
      </div>
    </section>
  );
}