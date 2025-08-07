import StarryBackground from "./components/background";
import MyApp from "./components/MyApp";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./css/theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <StarryBackground />
      <Navbar />
      <MyApp />
    </>
  }
]);

function App() {

  alert("Asubidha ke liye khed hai.. website juld hi complete hogi...");
  return (
    <RouterProvider router={router} />
  );
}

export default App;
