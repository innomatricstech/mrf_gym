import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="inner-page" id="contact">
      <section className="page-hero contact-hero">
        <div><p className="eyebrow">Start your journey</p><h1>Talk to the <em>Team.</em></h1><p>Tell us about your goals. We will help you find the right way to train.</p></div>
      </section>
      <section className="section contact-section">
        <div className="contact-layout">
          <div className="contact-details reveal visible"><p className="eyebrow">Find MRF</p><h2>Ready When <em>You Are.</em></h2><p>Visit the gym, take a tour, or leave us a message. A coach will get back to you shortly.</p><div className="contact-list"><p><b>Location</b>123 Iron Avenue, Chennai, Tamil Nadu</p><p><b>Phone</b>+91 98765 43210</p><p><b>Email</b>hello@mrfgym.in</p><p><b>Hours</b>Open 24 hours, every day</p></div></div>
          <form className="contact-form reveal visible" onSubmit={submitForm}>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" required type="email" placeholder="you@example.com" /></label>
            <label>Phone<input name="phone" type="tel" placeholder="Your phone number" /></label>
            <label>What are your goals?<textarea name="message" required rows="5" placeholder="Tell us how you want to train..." /></label>
            <button type="submit">Send Message</button>
            {submitted && <p className="form-success" role="status">Thanks — your message has been received. We will be in touch soon.</p>}
          </form>
        </div>
      </section>
    </section>
  )
}

export default Contact
