import { useEffect, useRef, useState } from 'react'

const statistics = [
  ['1,250+', 'Active Clients', 'Athletes training with MRF every month'],
  ['28,000+', 'Sessions Completed', 'Focused sessions put in by our community'],
  ['18', 'Expert Coaches', 'Specialists ready to guide your progress'],
  ['14', 'Years Strong', 'A decade of building stronger people'],
]

const milestones = [
  ['2026', 'Strength Community Award', 'Recognised for building an inclusive and driven local training community.'],
  ['2025', '10,000 Session Milestone', 'Our members completed more than ten thousand coaching sessions.'],
  ['2023', 'MRF Expansion', 'Opened dedicated conditioning and powerlifting zones for every kind of athlete.'],
]

function Achievements() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="inner-page" id="achievements">
      <section className="page-hero achievements-hero">
        <div><p className="eyebrow">Results that speak</p><h1>Built by <em>Consistency.</em></h1><p>Every number represents people who chose to show up and get stronger.</p></div>
      </section>
      <section className="section stats-section" ref={sectionRef}>
        <div className="section-heading centered reveal visible"><p className="eyebrow">The MRF community</p><h2>By The <em>Numbers</em></h2></div>
        <div className="stats-grid">
          {statistics.map(([number, label, detail], index) => <article className={visible ? 'stat-card count-in' : 'stat-card'} style={{ '--delay': `${index * 120}ms` }} key={label}><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></article>)}
        </div>
      </section>
      <section className="section milestones-section">
        <div className="section-heading reveal visible"><p className="eyebrow">Milestones</p><h2>Our <em>Journey</em></h2></div>
        <div className="milestone-list">
          {milestones.map(([year, title, text], index) => <article className="milestone reveal visible" style={{ '--delay': `${index * 130}ms` }} key={year}><span>{year}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>
    </section>
  )
}

export default Achievements
