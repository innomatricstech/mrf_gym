  const classes = [
    ['06:00', 'Barbell Basics', 'Coach Arjun', 'Strength'],
    ['07:30', 'MRF Conditioning', 'Coach Nisha', 'Conditioning'],
    ['17:30', 'Power Hour', 'Coach Arjun', 'Strength'],
    ['18:30', 'Strong Foundations', 'Coach Vikram', 'Beginner'],
    ['19:30', 'Athletic Build', 'Coach Nisha', 'Conditioning'],
  ]

  function Schedule() {
    return (
      <section className="inner-page" id="schedule">
        <section className="page-hero schedule-hero"><div><p className="eyebrow">Plan your training</p><h1>Make Time for <em>Strength.</em></h1><p>Coach-led classes designed to challenge you at every level.</p></div></section>
        <section className="section schedule-section"><div className="section-heading reveal visible"><p className="eyebrow">Today's classes</p><h2>Train With <em>Us</em></h2><p>All sessions are included with an active MRF membership.</p></div><div className="schedule-list">
          {classes.map(([time, title, coach, type], index) => <article className="class-row reveal visible" style={{ '--delay': `${index * 75}ms` }} key={`${time}-${title}`}><time>{time}</time><div><h3>{title}</h3><p>{coach}</p></div><span>{type}</span><a href="#contact">Book a spot →</a></article>)}
        </div></section>
      </section>
    )
  }

  export default Schedule
