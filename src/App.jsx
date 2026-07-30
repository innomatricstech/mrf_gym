import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import About from './pages/About'
import Trainers from './pages/Trainers'
import Schedule from './pages/Schedule'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Home />
      <About />
      <Trainers />
      <Schedule />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
