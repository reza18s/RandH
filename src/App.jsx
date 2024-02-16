import Home from "./Pages/home";
import Parallax from "./Pages/parallax";
import NavBar from "./components/Nav/Navbar";
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
      <section>Services</section>
      <section id="Profile">
        <Parallax type="profile"></Parallax>
      </section>
      <section id="project">Parallax</section>
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;
