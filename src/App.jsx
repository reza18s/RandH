import Project from "./Pages/Project";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Parallax from "./Pages/parallax";
import Services from "./Pages/Service";
import NavBar from "./components/Nav/Navbar";
import "./styles/globals.css";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="">
      <section id="Home">
        <NavBar></NavBar>
        <Home></Home>
      </section>

      <section id="Service">
        <Parallax type="services"></Parallax>
      </section>
      <section
        className="bg-[linear-gradient(180deg,#000000,#439bff20)]"
        id="Services"
      >
        <Services></Services>
      </section>
      <section id="Project">
        <Parallax type="profile"></Parallax>
      </section>
      <Project></Project>
      <section
        id="Contact"
        className="bg-[linear-gradient(180deg,#000000,#439bff20)]"
      >
        <Contact></Contact>
      </section>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </div>
  );
};

export default App;
