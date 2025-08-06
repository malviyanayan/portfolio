import { useSelector } from "react-redux"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Leetcode from "./Leetcode"

function MyApp() {
  let theme = useSelector((state) => state.theme.value)
  return (
    <>
      <Home />
      <Skills />

      {/* Competative Profile */}
      <Leetcode />

      <Projects />
      {/* <Certificates /> */}
      
    </>
  )
}

export default MyApp



// const im = ['Aspiring Software Engineer', 'Full Stack Developer', 'React Developer', 'Java Developer', 'Student'];