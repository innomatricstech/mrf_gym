import { useEffect, useRef, useState } from 'react'

const statistics = [
  ['1000+', 'Total Clients', 'Members who train with MRF ZONE and stay committed to their goals'],
  ['4', 'Dedicated Trainers', 'Expert support from Sakthi Vel and Sanjay'],
  ['100%', 'Community Focus', 'A motivating environment designed for progress and consistency'],
  ['1', 'Clear Mission', 'To inspire stronger, healthier, and more confident members'],
]

const milestones = [
  ['2026', 'Member Transformation Focus', 'At MRF ZONE, we take pride in helping our members achieve fitness goals while building a strong and supportive community.'],
  ['2025', 'Results-Driven Coaching', 'Our programs are built around measurable progress, expert guidance, and personalized support.'],
  ['2024', 'Trusted Local Gym', 'Helping hundreds of members transform their health and fitness through strength training, bodybuilding, and powerlifting.'],
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
        <div><p className="eyebrow">Results that speak</p><h1>Built by <em>Consistency.</em></h1><p>At MRF ZONE, every success story reflects the strength of our community and the commitment of our members.</p></div>
      </section>
      <section className="section stats-section" ref={sectionRef}>
        <div className="section-heading centered reveal visible"><p className="eyebrow">The MRF ZONE community</p><h2>By The <em>Numbers</em></h2></div>
        <div className="stats-grid">
          {statistics.map(([number, label, detail], index) => <article className={visible ? 'stat-card count-in' : 'stat-card'} style={{ '--delay': `${index * 120}ms` }} key={label}><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></article>)}
        </div>
      </section>
      <section className="section milestones-section">
        <div className="section-heading reveal visible"><p className="eyebrow">Highlights</p><h2>Our <em>Journey</em></h2></div>
        <div className="milestone-list">
          {milestones.map(([year, title, text], index) => <article className="milestone reveal visible" style={{ '--delay': `${index * 130}ms` }} key={year}><span>{year}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>
    </section>
  )
}

export default Achievements
