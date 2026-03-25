import { useState } from "react"
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu"
import Container from "../../components/Container/Container"
import ContactCard from "../../components/ContactCard/ContactCard"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import s from "./ContactSection.module.css"

export default function ContactSection() {
  const [ feedback, setFeedback ] = useState<React.ReactNode | null>(null)

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/xreygyay", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })

      if(!res.ok) {
        setFeedback(
          <span>Kunde inte skicka meddelandet just nu. Vänligen försök igen eller kontakta mig direkt på:{" "}
            <a href="mailto:vczarnotta@gmail.com" className={s.link}>vczarnotta@gmail.com</a>
          </span>
        )
        return
      } 
        

      setFeedback("Tack för ditt mail! Jag återkommer så snart jag kan.")
      form.reset()

    } catch {
      setFeedback(
        <span>Kunde inte ansluta till servern. Kontrollera din anslutning eller maila:{" "}
          <a href="mailto:vczarnotta@gmail.com" className={s.link}>vczarnotta@gmail.com</a>
        </span>
      )

    } finally {
      setTimeout(() => {
        setFeedback(null)
      }, 10 * 1000)
    }
  }

  return(
    <Container variant="gradient" id="contact">
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

        {feedback && <p className={s.feedback}>{feedback}</p>}
      </form>
    </Container>
  )
}