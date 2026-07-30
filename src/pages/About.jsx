function About() {
  return (
    <section className="inner-page" id="about">
      <section className="page-hero about-hero"><div><p className="eyebrow">More than a gym</p><h1>Made for the <em>Committed.</em></h1><p>MRF is where everyday people build uncommon strength, confidence, and discipline.</p></div></section>
      <section className="section story-section">
        <div className="story-image reveal visible"><img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85" alt="Athlete training in the gym" /></div>
        <div className="story-copy reveal visible"><p className="eyebrow">Our story</p><h2>Strength changes <em>Everything.</em></h2><p>MRF started with a simple belief: training should be focused, welcoming, and built around real progress. We created a space without distractions, where every person can discover what they are capable of.</p><p>From your first session to your next personal best, our coaches and community are here to help you stay consistent and move forward.</p><a className="button primary" href="#contact">Visit MRF</a></div>
      </section>
      <section className="section values-section"><div className="section-heading centered reveal visible"><p className="eyebrow">What guides us</p><h2>The MRF <em>Values</em></h2></div><div className="value-grid">
        <article className="value-card reveal visible"><span>01</span><h3>Show Up</h3><p>Progress starts with being present. Consistency wins every time.</p></article>
        <article className="value-card reveal visible"><span>02</span><h3>Train Smart</h3><p>We build strong movement patterns, not shortcuts or empty promises.</p></article>
        <article className="value-card reveal visible"><span>03</span><h3>Lift Others</h3><p>A better gym is one where everyone has the support to improve.</p></article>
      </div></section>
    </section>
  )
}

export default About
