function Rules() {
  const items = [
    'Members must wear appropriate gym attire and clean training shoes at all times.',
    'Please wipe down equipment after use and return weights to their proper place.',
    'No abusive language, unsafe behavior, or harassment will be tolerated.',
    'Respect staff members, coaches, and fellow members at all times.',
    'If you are unsure how to use equipment, ask a staff member before proceeding.',
    'All personal belongings should be stored safely and not obstruct walkways or equipment use.'
  ]

  return (
    <section className="inner-page" id="rules">
      <section className="page-hero contact-hero legal-hero">
        <div>
          <p className="eyebrow">MRF ZONE</p>
          <h1>Gym <em>Rules</em></h1>
          <p>These rules help keep the gym safe, respectful, and productive for every member.</p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="legal-shell reveal visible">
          <h2>Community standards</h2>
          <p>MRF Gym is designed to be a disciplined, welcoming, and performance-driven environment. Every member is expected to respect the space, the coaches, and other members while using the facility.</p>
          <ul className="legal-list">
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Equipment and hygiene</h2>
          <p>Members are responsible for maintaining the cleanliness and order of the gym floor. Use equipment according to its purpose, finish your set responsibly, and avoid leaving dumbbells or cables in unsafe positions. Poor hygiene, misuse of equipment, or failure to follow setup instructions may result in a temporary restriction of access.</p>

          <h2>Enforcement</h2>
          <p>Failure to follow these guidelines may result in warning, suspension, or membership review. Staff may intervene at any time to protect member safety, preserve facility order, or maintain a respectful training environment.</p>
        </div>
      </section>
    </section>
  )
}

export default Rules
