import Home from "./Pages/home";
import NavBar from "./components/Nav/Navbar";
const App = () => {
  return (
    <div className="">
      <section id="Home">
        <NavBar></NavBar>
        <Home></Home>
      </section>
      <section id="Service">parallax</section>
      <section>servers</section>
      <section id="project">parallax</section>
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;
