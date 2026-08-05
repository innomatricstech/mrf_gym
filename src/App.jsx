import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Trainers from "./pages/Trainers";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Rules from "./pages/Rules";

import "./App.css";

const hashPages = {
  "#terms": "terms",
  "#privacy": "privacy",
  "#rules": "rules",
};

function App() {
  const [page, setPage] = useState(() => {
    if (typeof window === "undefined") return "home";
    return hashPages[window.location.hash] || "home";
  });

  const [showTop, setShowTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const syncPageFromHash = () => {
      setPage(hashPages[window.location.hash] || "home");
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent =
        scrollHeight > 0
          ? Math.round((scrollTop / scrollHeight) * 100)
          : 0;

      setScrollPercent(percent);
      setShowTop(scrollTop > 200);
    };

    syncPageFromHash();
    handleScroll();

    window.addEventListener("hashchange", syncPageFromHash);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", syncPageFromHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPage = () => {
    if (page === "terms") return <Terms />;
    if (page === "privacy") return <Privacy />;
    if (page === "rules") return <Rules />;

    return (
      <>
        <Home />
        <Trainers />
        <Achievements />
        <Contact />
      </>
    );
  };

  return (
    <div className="site-shell">
      <Navbar onNavigate={setPage} />

      {renderPage()}

      <Footer onNavigate={setPage} />

      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          style={{
            background: `conic-gradient(
              #ff1a1a ${scrollPercent * 3.6}deg,
              rgba(255,255,255,0.15) ${scrollPercent * 3.6}deg
            )`,
          }}
        >
          <div className="back-inner">
            <FaChevronUp />
            <span>{scrollPercent}%</span>
          </div>

          <div className="tooltip">
            Back To Top
          </div>
        </button>
      )}
    </div>
  );
}

export default App;