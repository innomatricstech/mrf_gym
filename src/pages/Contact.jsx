import { useState } from 'react'

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.55 3.5.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.2.19 2.4.55 3.5a1 1 0 0 1-.24 1l-2.1 2.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (  
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5h16v9H4z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.8 8.4 7.2 5.6 7.2-5.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 20a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18.5 9.2a2.3 2.3 0 1 0 0-4.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20.5 20a4.5 4.5 0 0 0-3.5-4.3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="inner-page" id="contact">
    <section
  className="page-hero contact-hero"
  style={{
    minHeight: "380px",
    padding: "30px 20px",
  }}
>
  <div>
    <p className="eyebrow">Start your journey</p>

    <h1
      style={{
        display: "block",
        whiteSpace: "normal",
        fontSize: "clamp(42px, 10vw, 64px)",
        lineHeight: "1",
      }}
    >
      Talk to the
      <em
        style={{
          display: "block",
          color: "#e9112b",
          fontStyle: "normal",
          marginTop: "6px",
        }}
      >
        Team.
      </em>
    </h1>

    <p
      style={{
        whiteSpace: "normal",
        maxWidth: "560px",
        lineHeight: "1.6",
        fontSize: "16px",
      }}
    >
      Connect with MRF ZONE and start your fitness transformation with
      trusted guidance.
    </p>
  </div>
</section>
      <section className="section contact-section">
        <div className="contact-layout">
          <div className="contact-details reveal visible"><p className="eyebrow">Find MRF ZONE</p><h2>Ready When <em>You Are.</em></h2>
          <p>Visit the gym, meet the team, and discover the right training plan for your goals.</p>
          <div className="contact-list">
            <p className="contact-item"><span className="contact-icon"><PeopleIcon /></span><span><b>Coaches</b>Madhan • Riyas • Sakthi • Sanjay</span></p>
            <p className="contact-item">
              <span className="contact-icon"><MapIcon /></span>
              <span>
                <b>Location</b>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=48,+Subramani+Street,+Telungupalayam,+Coimbatore,+Tamil+Nadu+641039"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  48, Subramani Street, Telungupalayam, Coimbatore, Tamil Nadu 641039
                </a>
              </span>
            </p>
            <p className="contact-item"><span className="contact-icon"><PhoneIcon /></span><span><b>Phone</b>9994977660 • 9042081660</span></p>
            <p className="contact-item"><span className="contact-icon"><MailIcon /></span><span><b>Email</b>mrfitzone@gmail.com</span></p>
          </div><p className="coach-callout" style={{ marginTop: '20px', padding: '16px 18px', border: '1px solid #b11226', background: 'linear-gradient(135deg, rgba(177,18,38,.12), rgba(177,18,38,.04))', color: '#f4f6f2', fontSize: '13px', lineHeight: '1.7' }}>Train with experienced coaches who help you stay consistent, strong, and confident.</p></div>
         <form className="contact-form reveal visible" onSubmit={submitForm}>
  <label>
    Name
    <input
      name="name"
      required
      placeholder="Your name"
    />
  </label>

  <label>
    Email
    <input
      name="email"
      required
      type="email"
      placeholder="you@example.com"
    />
  </label>

  <label>
    Phone
    <input
      name="phone"
      type="tel"
      placeholder="Your phone number"
    />
  </label>

  <label>
  Membership Plan
  <select
    name="plan"
    required
    style={{
      width: "100%",
      padding: "14px 16px",
      border: "1px solid #b11226",
      borderRadius: "12px",
      background: "#1b1b1b",
      color: "#fff",
      fontSize: "15px",
      outline: "none",
      cursor: "pointer",
      marginTop: "8px",
      fontFamily: "inherit",
    }}
  >
    <option value="" style={{ background: "#1b1b1b", color: "#fff" }}>
      Select a Plan
    </option>
    <option value="1 Month" style={{ background: "#1b1b1b", color: "#fff" }}>
      1 Month - ₹1,200
    </option>
    <option value="3 Months" style={{ background: "#1b1b1b", color: "#fff" }}>
      3 Months - ₹3,300
    </option>
    <option value="6 + 6 Months" style={{ background: "#1b1b1b", color: "#fff" }}>
      6 + 6 Months - ₹5,999
    </option>
    <option value="12 + 12 Months" style={{ background: "#1b1b1b", color: "#fff" }}>
      12 + 12 Months - ₹9,999
    </option>
  </select>
</label>

  <label>
    What are your goals?
    <textarea
      name="message"
      required
      rows="5"
      placeholder="Tell us how you want to train..."
    />
  </label>

  <button type="submit">Send Message</button>

  {submitted && (
    <p className="form-success" role="status">
      Thanks — your message has been received. We will be in touch soon.
    </p>
  )}
</form>
        </div>
      </section>
    </section>
  )
}

export default Contact
