// import { useEffect } from "react"
// import { Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"


function App() {
  return (
    <section className="content-container" id="navigation-container">
      <NavBar />
      <main className="bg-grid bg-gridBlack text-offWhite font-pixel">
        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
    </section>
  )
}

export default App;
