import StarryBackground from "./components/background";
import MyApp from "./components/MyApp";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./css/theme.css";
import Error from "./components/Error";
import AllProjects from "./components/AllProjects";
import TempNavbar from "./components/TempNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <StarryBackground />
      <Navbar />
      <MyApp />
    </>
  },
  {
    path: "/projects",
    element: <>
      <StarryBackground />
      <TempNavbar />
      <AllProjects />
    </>
  },
  {
    path: "/*",
    element: <>
      <StarryBackground />
      <Navbar />
      <Error />
    </>
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
