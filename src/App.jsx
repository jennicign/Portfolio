// import { useEffect } from "react"
// import { Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"


function App() {
  return (
    <div className="relative min-h-screen text-black font-pixel">
      
      <div className="fixed inset-0 -z-10 w-full h-full bg-white bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
      </div>

      
      <section id="navigation-container" className="relative z-10 content-container">
        <NavBar />
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
      </section>
    </div>
  );
}

export default App;