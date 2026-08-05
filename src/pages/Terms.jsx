function Terms() {
  const items = [
    'Members must present a valid membership card or ID on entry.',
    'All members are expected to follow staff instructions and gym etiquette.',
    'Use of equipment must be done safely and responsibly, with supervision when needed.',
    'Any damage to equipment or property must be reported immediately to staff.',
    'Membership fees are non-refundable unless stated otherwise in writing.',
    'The gym reserves the right to suspend access for unsafe, disruptive, or abusive conduct.'
  ]

  return (
    <section className="inner-page" id="terms">
      <section className="page-hero contact-hero legal-hero">
        <div>
          <p className="eyebrow">MRF ZONE</p>
          <h1>Terms & <em>Conditions</em></h1>
          <p>Please read these terms carefully before using the gym facilities and services.</p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="legal-shell reveal visible">
          <h2>Membership and facility usage</h2>
          <p>MRF Gym provides fitness, coaching, and training services on the basis of membership access and facility usage. By registering, purchasing a membership, or entering the premises, you confirm that you understand and agree to these Terms & Conditions.</p>
          <ul className="legal-list">
            {items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Billing, access, and cancellations</h2>
          <p>Membership fees are due according to the agreed plan and billing cycle. Access may be limited or temporarily paused for maintenance, safety concerns, or management decisions. Memberships may be canceled in accordance with the written agreement, and any outstanding dues must be cleared before final termination.</p>

          <h2>Safety and responsibility</h2>
          <p>All members are responsible for their own health, fitness level, and exercise choices. The gym is not a medical provider, and members should consult a qualified professional before beginning intensive training. We reserve the right to deny or revoke access when health, safety, or conduct policies are not followed.</p>

          <h2>Changes to service</h2>
          <p>MRF Gym may update schedules, training programs, pricing, services, or operating policies from time to time. Continued use of the facility after such updates constitutes acceptance of the revised terms.</p>
        </div>
      </section>
    </section>
  )
}

export default Terms
