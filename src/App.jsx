import NavBar from "./components/NavBar/Navbar";
import SideBar from "./components/NavBar/SideBar";
const App = () => {
  return (
    <div className="">
      <section id="Home">
        {/* <SideBar></SideBar> */}
        <NavBar></NavBar>
      </section>
      <section id="Service">parallax</section>
      <section>servers</section>
      <section id="project">parallax</section>
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;
