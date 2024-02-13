import { motion } from "framer-motion";
import NavBar from "./components/NavBar/Navbar";
import SideBar from "./components/NavBar/SideBar";
const App = () => {
  return (
    <div className="">
      <section id="home">
        {/* <SideBar></SideBar> */}
        <main>
          <NavBar></NavBar>
        </main>
      </section>
      <section>parallax</section>
      <section>servers</section>
      <section>parallax</section>
      <section>contact</section>
    </div>
  );
};

export default App;
