import { useSelector } from "react-redux"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Leetcode from "./Leetcode"
import Education from "./Education"
import About from "./About"
import Footer from "./Footer"
import Contact from "./Contact"

function MyApp() {
  let theme = useSelector((state) => state.theme.value)
  return (
    <>
      <Home />
      <Projects />
      <Skills />

      {/* Competative Profile */}
      <Leetcode />

      {/* <Certificates /> */}

      <Education />

      <About />

      <Contact />

      <Footer />

      
    </>
  )
}

export default MyApp



// const im = ['Aspiring Software Engineer', 'Full Stack Developer', 'React Developer', 'Java Developer', 'Student'];