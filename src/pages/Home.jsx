import { useEffect, useState } from 'react'

const facility = {
  power: { title: 'Powerlifting Zone', text: 'Competition racks, calibrated plates, deadlift platforms, and benches built for serious strength work.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85' },
  weights: { title: 'Dumbbell Arsenal', text: 'A complete free-weight floor with everything you need to build your strongest body.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85' },
  conditioning: { title: 'Turf & Conditioning', text: 'Push sleds, ropes, kettlebells, and open turf for conditioning that carries over.', image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1400&q=85' },
}

const features = [
  ['⌁', 'Elite Equipment', 'Precision equipment and specialist bars selected for athletes who train with purpose.'],
  ['◷', '24/7 Access', 'Train on your schedule with secure keycard entry for active members.'],
  ['◉', 'Driven Community', 'Train alongside people who show up, put in the work, and raise the bar.'],
  ['↗', 'Expert Coaching', 'Get smarter programming and technique guidance to keep moving forward.'],
]

const reviews = [
  ['I am stronger, more consistent, and far more confident under the bar than I was six months ago.', 'Arjun K.', 'Powerlifting'],
  ['The energy here is different. Everyone takes their training seriously, and it makes you want more.', 'Nisha R.', 'Strength training'],
  ['No nonsense, great equipment, and coaches who care about the details. Exactly what I wanted.', 'Vikram S.', 'Conditioning'],
]

function Home() {
  const [active, setActive] = useState('power')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const choosePlan = (plan) => setMessage(`${plan} selected — our team will help you finish your membership.`)
  const activeFacility = facility[active]

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-image" /><div className="hero-overlay" />
        <div className="hero-content hero-enter">
          <p className="eyebrow">MRF Strength & Conditioning</p><h1>Forge Your <em>Legacy.</em></h1>
          <p className="hero-copy">No mirrors. No excuses. Only heavy iron and a community driven by raw strength.</p>
          <div className="hero-actions"><a className="button primary" href="#memberships">Join The Core</a><a className="button secondary" href="#facility">Explore Facility</a></div>
        </div>
        <div className="scroll-note">SCROLL TO TRAIN <span>↓</span></div>
      </section>

      <section className="section features-section">
        <div className="section-heading centered reveal"><p className="eyebrow">Built for the work</p><h2>Why <em>MRF</em></h2><p>We cut the distractions so you can focus on the process.</p></div>
        <div className="feature-grid">
          {features.map(([icon, title, text], index) => <article className="feature-card reveal" style={{ '--delay': `${index * 110}ms` }} key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section facility-section" id="facility">
        <div className="section-heading centered reveal"><p className="eyebrow">Your training ground</p><h2>The <em>Facility</em></h2></div>
        <div className="facility-layout reveal">
          <div className="facility-tabs" aria-label="Facility areas">
            {Object.entries(facility).map(([key, item]) => <button key={key} onClick={() => setActive(key)} className={active === key ? 'active' : ''}>{item.title}<span>→</span></button>)}
          </div>
          <article className="facility-preview" key={active}>
            <img src={activeFacility.image} alt={activeFacility.title} />
            <div><p className="eyebrow">{activeFacility.title}</p><p>{activeFacility.text}</p></div>
          </article>
        </div>
      </section>

      <section className="section reviews-section" id="coaches">
        <div className="section-heading centered reveal"><p className="eyebrow">The MRF standard</p><h2>Athlete <em>Reviews</em></h2></div>
        <div className="review-grid">
          {reviews.map(([text, name, detail], index) => <article className="review-card reveal" style={{ '--delay': `${index * 130}ms` }} key={name}><span className="quote">“</span><p>{text}</p><div className="reviewer"><b>{name[0]}</b><span><strong>{name}</strong><small>{detail}</small></span></div></article>)}
        </div>
      </section>

      <section className="section membership-section" id="memberships">
        <div className="section-heading centered reveal"><p className="eyebrow">Choose your commitment</p><h2>Memberships</h2><p>All plans include complete gym access and the MRF community.</p></div>
        <div className="plans reveal">
          <article className="plan"><h3>Monthly Grinder</h3><p className="price">₹1,999 <small>/ month</small></p><p>Train your way with flexible monthly access.</p><ul><li>24/7 gym access</li><li>All training zones</li><li>Community events</li></ul><button onClick={() => choosePlan('Monthly Grinder')}>Select Plan</button></article>
          <article className="plan featured"><div className="plan-tag">MOST COMMITTED</div><h3>Annual Iron</h3><p className="price">₹17,999 <small>/ year</small></p><p>Make the commitment and get the most from your training.</p><ul><li>Everything in Monthly</li><li>One coaching session</li><li>Best value membership</li></ul><button onClick={() => choosePlan('Annual Iron')}>Select Plan</button></article>
        </div>
        {message && <p className="plan-message" role="status">{message}</p>}
      </section>
    </main>
  )
}

export default Home
