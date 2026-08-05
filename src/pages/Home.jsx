import { useEffect, useState } from "react";

const features = [
  ["⌁", "Strength Training", "Expert coaching in strength training, bodybuilding, and powerlifting."],
  ["◷", "Personal Guidance", "Personalized fitness and nutrition guidance for all experience levels."],
  ["◉", "Supportive Community", "Train in a motivating environment that helps you stay consistent."],
  ["↗", "Modern Equipment", "A clean, professional setup for serious progress and measurable results."],
];

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }),
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const choosePlan = (plan) => {
    setMessage(`${plan} selected — our team will help you complete your membership.`);

    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content hero-enter">
          <p className="eyebrow">MRF ZONE Gym</p>

          <h1>
            Train with <em>Purpose.</em>
          </h1>

          <p className="hero-copy">
            Helped hundreds of members transform their health and fitness with
            expert coaching and a motivating workout environment.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#memberships">
              Join The Zone
            </a>
          </div>
        </div>

        <div className="scroll-note">
          SCROLL TO TRAIN <span>↓</span>
        </div>
      </section>

      <section className="section features-section">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Built for the work</p>
          <h2>
            Why <em>MRF ZONE</em>
          </h2>
          <p>
            Professional coaching, measurable results, and a positive
            environment that keeps you moving forward.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(([icon, title, text], index) => (
            <article
              key={title}
              className="feature-card reveal"
              style={{ "--delay": `${index * 110}ms` }}
            >
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section membership-section" id="memberships">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Choose your commitment</p>
          <h2>Memberships</h2>
          <p>
            Flexible packages designed for everyday training goals and
            consistent progress.
          </p>
        </div>

        <div className="plans reveal">
          <article className="plan">
            <h3>1 Month</h3>
            <p className="price">₹1,200</p>
            <p>
              Short-term membership for getting started with focused training.
            </p>
            <ul>
              <li>Gym access</li>
              <li>Trainer support</li>
              <li>Progress-focused environment</li>
            </ul>

            <button onClick={() => choosePlan("1 Month")}>
              Select Plan
            </button>
          </article>

          <article className="plan">
            <h3>3 Months</h3>
            <p className="price">₹3,300</p>
            <p>A balanced plan for steady momentum and visible progress.</p>
            <ul>
              <li>Gym access</li>
              <li>Coaching guidance</li>
              <li>Consistent training support</li>
            </ul>

            <button onClick={() => choosePlan("3 Months")}>
              Select Plan
            </button>
          </article>

          <article className="plan featured">
            <div className="plan-tag">MOST POPULAR</div>

            <h3>6 + 6 Months</h3>
            <p className="price">₹5,999</p>

            <p>
              Ideal for long-term structure, consistency, and confidence-building.
            </p>

            <ul>
              <li>Gym access</li>
              <li>Trainer guidance</li>
              <li>Strong value with commitment</li>
            </ul>

            <button onClick={() => choosePlan("6 + 6 Months")}>
              Select Plan
            </button>
          </article>

          <article className="plan">
            <h3>12 + 12 Months</h3>
            <p className="price">₹9,999</p>

            <p>
              Maximum value for members ready to train with purpose over the
              long term.
            </p>

            <ul>
              <li>Gym access</li>
              <li>Dedicated support</li>
              <li>Long-term transformation plan</li>
            </ul>

            <button onClick={() => choosePlan("12 + 12 Months")}>
              Select Plan
            </button>
          </article>
        </div>

        {message && (
          <p className="plan-message" role="status">
            {message}
          </p>
        )}
      </section>
    </main>
  );
}

export default Home;