import { useState } from "react"
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import DownloadResume from "./DownloadResume";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'slide',
      stiffness: 250,
      damping: 20,
    },
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'slide',
      stiffness: 250,
      damping: 20,
    },
  },
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="navigation px-6 py-4 text-gridBlack bg-white/10 backdrop-blur-md font-pixel sticky top-0 z-50 border-b border-gray-300 flex justify-between items-center">
      
      <div className="text-xl font-bold whitespace-nowrap">
        Jennifer Ignacio <span className="font-normal">| Portfolio</span>
      </div>

      <section className="hidden md:flex gap-6 items-center">
        <button onClick={() => scrollToSection("home")} className="hover:text-serenity">
          Home
        </button>
        <span>|</span>
        <button onClick={() => scrollToSection("projects")} className="hover:text-serenity">
          Projects
        </button>
        <span>|</span>
        <button onClick={() => scrollToSection("about")} className="hover:text-serenity">
          About
        </button>
        <span>|</span>
        <button onClick={() => scrollToSection("contact")} className="hover:text-serenity">
          Contact
        </button>
        <span>|</span>
        <DownloadResume />
      </section>

      {/* Mobile hamburger */}
      <section className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="border border-white border-2 p-2 rounded bg-roseQuartz"
        >
          <GiHamburgerMenu size={25} color="black" />
        </button>
      </section>

      {/* Mobile slide-out menu */}
      <motion.aside
        className="md:hidden fixed top-0 right-0 w-3/4 h-screen bg-gridBlack p-6 z-50 flex flex-col"
        variants={sidebarVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <section className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="border border-white border-2 p-1 rounded text-red-400"
          >
            <IoMdClose size={25} />
          </button>
        </section>
        <button onClick={() => { scrollToSection("home"); setOpen(false); }} className="mb-4 hover:text-serenity">Home</button>
        <button onClick={() => { scrollToSection("projects"); setOpen(false); }} className="mb-4 hover:text-serenity">Projects</button>
        <button onClick={() => { scrollToSection("about"); setOpen(false); }} className="mb-4 hover:text-serenity">About</button>
        <button onClick={() => { scrollToSection("contact"); setOpen(false); }} className="mb-4 hover:text-serenity">Contact</button>
        <DownloadResume />
      </motion.aside>
    </nav>
  )
}

export default NavBar