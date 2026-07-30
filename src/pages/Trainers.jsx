const coaches = [
  ['AK', 'Arjun Kumar', 'Head Strength Coach', 'Powerlifting, barbell technique, strength programming'],
  ['NR', 'Nisha Raj', 'Performance Coach', 'Conditioning, mobility, sustainable fitness'],
  ['VS', 'Vikram Shah', 'Bodybuilding Coach', 'Hypertrophy, nutrition, body composition'],
]

function Trainers() {
  return (
    <section className="inner-page" id="trainers">
      <section className="page-hero trainers-hero"><div><p className="eyebrow">Guidance that matters</p><h1>Meet Your <em>Coaches.</em></h1><p>Experienced trainers who meet you where you are and help take you further.</p></div></section>
      <section className="section"><div className="section-heading centered reveal visible"><p className="eyebrow">The MRF team</p><h2>Coaching With <em>Purpose</em></h2><p>Every coach brings practical experience and a real commitment to your progress.</p></div><div className="coach-grid">
        {coaches.map(([initials, name, role, specialties], index) => <article className="coach-card reveal visible" style={{ '--delay': `${index * 120}ms` }} key={name}><div className="coach-avatar">{initials}</div><p className="eyebrow">{role}</p><h3>{name}</h3><p>{specialties}</p><a href="#contact">Train with {name.split(' ')[0]} →</a></article>)}
      </div></section>
    </section>
  )
}

export default Trainers
