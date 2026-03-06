import { useState } from "react"
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu"
import ContactCard from "../../components/ContactCard/ContactCard"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import s from "./ContactSection.module.css"

export default function ContactSection() {
  const [ submitted, setSubmitted ] = useState(false)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitted(true)
    e.currentTarget.reset()

    setTimeout(() => {
      setSubmitted(false)
    }, 5 * 1000)
  }

  return(
    <section id="contact" className={s.container}>
      <h2>Kontakta mig</h2>
      <p className={s.subTitle}>Söker du en LIA-praktikant? Hör gärna av dig!</p>
      <p className={s.description}>Jag är väldigt nyfiken på att arbeta med riktiga projekt och utvecklas tillsammans med ett team. Jag bidrar gärna med engagemang, nyfikenhet och en vilja att lära mig.</p>
      <div className={s.contactWrapper}>
        <ContactCard
          icon={<LuMail />}
          title="Email"
          variant="lightPink"
        >
          <a href="mailto:vczarnotta@gmail.com">vczarnotta@gmail.com</a>
        </ContactCard>

        <ContactCard
          icon={<LuPhone />}
          title="Telefon"
          variant="blue"
        >
          <a href="tel:+46703469591">+46 70-346 95 91</a>
        </ContactCard>

        <ContactCard
          icon={<LuMapPin />}
          title="Stad"
          variant="pink"
        >
          <p>Göteborg</p>
        </ContactCard>
      </div>

      <form 
        action="https://formspree.io/f/xreygyay"
        method="POST"
        onSubmit={handleSubmit}
        className={s.form}
      >
        <Input 
          id="name"
          name="name"
          label="Namn"
          placeholder="Ditt Namn"
          required
        />

        <Input 
          id="email"
          name="email"
          label="Email"
          placeholder="din.email@exempel.se"
          required
        />

        <div className={s.textareaWrapper}>
          <label htmlFor="message" className={s.label}>Meddelande</label>
          <textarea 
            id="message"
            name="message"
            placeholder="Ditt meddelande..."
            className={s.textarea}
            required
          />
        </div>

        <Button 
          type="submit"
          variant="submit"
        >
            Skicka Meddelande
        </Button>

        {submitted && <p className={s.successMessage}>Tack för ditt mail! Jag återkommer så snart jag kan.</p>}
      </form>

    </section>
  )
}