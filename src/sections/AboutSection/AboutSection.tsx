import s from "./AboutSection.module.css"

export default function AboutSection() {
  return(
    <section className={s.container}>
      <h2>Om Mig</h2>

      <div className={s.text}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat deserunt neque obcaecati numquam incidunt dolorem perferendis velit error doloribus eum dignissimos pariatur veritatis, saepe illo quam quas.</p>
        <p>Neque quae aut laudantium expedita ipsum, minima maxime! Architecto illum enim assumenda reiciendis illo sapiente facere inventore, laudantium autem tempore pariatur doloremque commodi dignissimos, error doloribus, dolorum perferendis cumque quasi sed totam a voluptate et?</p>
        <p>Dolorem veritatis aliquid placeat assumenda expedita iste necessitatibus. Provident laboriosam excepturi, nostrum aliquid dolores explicabo quisquam porro et, delectus at incidunt blanditiis impedit eligendi voluptatibus ut quasi dicta sunt aliquam dolor quo? Dolores eius repellendus molestiae culpa architecto?</p>
      </div>
      
      <a
        href="/resume.pdf"
        download="Veronica_Czarnotta_CV.pdf"
        className={s.buttonLink}
      >
        Ladda ner mitt CV
      </a>
    </section>
  )
}