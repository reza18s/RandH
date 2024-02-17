import Project from "./Pages/Project";
import Home from "./Pages/home";
import Parallax from "./Pages/parallax";
import Services from "./Pages/service";
import NavBar from "./components/Nav/Navbar";
import "./styles/globals.css";
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
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;
