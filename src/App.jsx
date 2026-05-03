import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Sponsorships from './components/Sponsorships'
import Outreach from './components/Outreach'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Sponsorships />
        <Outreach />
      </main>
      <Footer />
    </>
  )
}

export default App
