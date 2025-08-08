import { useSelector } from "react-redux"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Leetcode from "./Leetcode"
import Education from "./Education"

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
      
    </>
  )
}

export default MyApp



// const im = ['Aspiring Software Engineer', 'Full Stack Developer', 'React Developer', 'Java Developer', 'Student'];