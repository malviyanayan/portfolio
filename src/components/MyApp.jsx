import { useSelector } from "react-redux"

function MyApp() {
  let theme = useSelector((state) => state.theme.value)
  return (
    <>
    <div className={`mx-5 mt-5 text-justify ${theme ? 'link-light' : 'link-dark'}`}>jai ho</div>
    </>
  )
}

export default MyApp