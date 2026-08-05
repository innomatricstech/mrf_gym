function Privacy() {
  const items = [
    'We collect basic contact details needed to manage your membership and communication.',
    'Your information is used only for scheduling, support, and service-related purposes.',
    'We do not sell or share your personal information with third parties for marketing.',
    'We maintain reasonable security practices to protect submitted information.',
    'You may contact the gym at any time to request updates or removal of your data.',
    'We may retain some records as required for billing, legal obligations, or safety reporting.'
  ]

  return (
    <section className="inner-page" id="privacy">
      <section className="page-hero contact-hero legal-hero">
        <div>
          <p className="eyebrow">MRF ZONE</p>
          <h1>Privacy <em>Policy</em></h1>
          <p>Your privacy matters to us, and we handle your information responsibly.</p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="legal-shell reveal visible">
          <h2>How we collect and use information</h2>
          <p>MRF Gym collects information you provide directly during enrollment, inquiries, coaching sessions, and communication with our team. This may include your name, phone number, email address, membership plan details, and training preferences.</p>
          <ul className="legal-list">
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Protection and security</h2>
          <p>We use reasonable administrative, technical, and organizational measures to help protect personal information. While no digital system can be guaranteed to be completely secure, we take commercially reasonable steps to reduce risks associated with unauthorized access, loss, or misuse.</p>

          <h2>Your rights and contact</h2>
          <p>You may request access to the personal information we hold about you, ask for corrections, or raise questions about how your information is used. If you have a privacy concern, you can contact us through the support channels listed on our website and we will review your request in accordance with applicable law.</p>

          <h2>Updates to this policy</h2>
          <p>We reserve the right to update this policy as needed to reflect operational, legal, or security changes. Any revision will be reflected in the website content, and continued use of our services means you accept the updated policy.</p>
        </div>
      </section>
    </section>
  )
}

export default Privacy
