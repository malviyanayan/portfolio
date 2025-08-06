import { useSelector } from "react-redux"
import Home from "./Home"

function MyApp() {
  let theme = useSelector((state) => state.theme.value)
  return (
    <>
      <Home />
    </>
  )
}

export default MyApp



// const im = ['Aspiring Software Engineer', 'Full Stack Developer', 'React Developer', 'Java Developer', 'Student'];