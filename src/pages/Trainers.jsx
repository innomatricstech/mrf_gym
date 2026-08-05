const coaches = [
  
  ['MM', 'Madhan Maruthachalam', 'Head Coach', '15+ Years experience '],
  ['RM', 'Riyas Meeran', 'Coach', '5+ Years experience'],
  ['SV', 'Sakthi Vel', 'Trainer', '2 Years experience'],
  ['SJ', 'Sanjay', 'Trainer', '2 Years experience '],
]

function Trainers() {
  return (
    <section className="inner-page" id="trainers">
    <section
  className="page-hero trainers-hero"
  style={{
    minHeight: "380px",
    padding: "30px 20px",
  }}
>
  <div>
    <p className="eyebrow">Guidance that matters</p>

    <h1
      style={{
        display: "block",
        whiteSpace: "normal",
        fontSize: "clamp(42px, 10vw, 64px)",
        lineHeight: "1",
      }}
    >
      Meet Your
      <br />
      <em
        style={{
          color: "#e9112b",
          fontStyle: "normal",
          display: "block",
          marginTop: "6px",
        }}
      >
        Coaches.
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
      Dedicated trainers committed to helping every member train with
      confidence and consistency.
    </p>
  </div>
</section>
      <section className="section coaches-section"><div className="section-heading centered reveal visible"><p className="eyebrow">The MRF ZONE team</p><h2>Coaching With <em>Purpose</em></h2><p>Our trainers focus on practical, results-driven support for all experience levels.</p></div><div className="coach-grid">
        {coaches.map(([initials, name, role, specialties], index) => <article className="coach-card reveal visible" style={{ '--delay': `${index * 120}ms` }} key={name}><div className="coach-avatar">{initials}</div><p className="eyebrow">{role}</p><h3>{name}</h3><p>{specialties}</p><a href="#contact">Train with {name.split(' ')[0]} →</a></article>)}
      </div></section>
    </section>
  )
}

export default Trainers
