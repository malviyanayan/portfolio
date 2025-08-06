import { useSelector } from "react-redux"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"

function MyApp() {
  let theme = useSelector((state) => state.theme.value)
  return (
    <>
      <Home />
      <Skills />
      <Projects />
    </>
  )
}

export default MyApp



// const im = ['Aspiring Software Engineer', 'Full Stack Developer', 'React Developer', 'Java Developer', 'Student'];