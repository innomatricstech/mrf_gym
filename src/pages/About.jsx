function About() {
  return (
    <section className="inner-page" id="about">
      <section className="page-hero about-hero"><div><p className="eyebrow">More than a gym</p><h1>Train with <em>Purpose.</em></h1><p>MRF ZONE is where focused coaching, measurable results, and a supportive community come together.</p></div></section>
      <section className="section story-section">
        <div className="story-image reveal visible"><img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85" alt="Athlete training in the gym" /></div>
        <div className="story-copy reveal visible"><p className="eyebrow">Our story</p><h2>Transform with <em>Confidence.</em></h2><p>At MRF ZONE, we help members build healthier bodies, stronger routines, and lasting confidence through professional coaching and a positive environment.</p><p>Our mission is to inspire and empower every individual to become stronger, healthier, and more confident through consistent support and focused training.</p><a className="button primary" href="#contact">Visit MRF ZONE</a></div>
      </section>
      <section className="section values-section"><div className="section-heading centered reveal visible"><p className="eyebrow">What guides us</p><h2>The MRF ZONE <em>Values</em></h2></div><div className="value-grid">
        <article className="value-card reveal visible"><span>01</span><h3>Results First</h3><p>Proven training programs focused on measurable progress and long-term fitness gains.</p></article>
        <article className="value-card reveal visible"><span>02</span><h3>Expert Coaching</h3><p>Strength training, bodybuilding, and powerlifting support from dedicated trainers.</p></article>
        <article className="value-card reveal visible"><span>03</span><h3>Supportive Community</h3><p>A motivating atmosphere where every member is encouraged to keep improving.</p></article>
      </div></section>
    </section>
  )
}

export default About
