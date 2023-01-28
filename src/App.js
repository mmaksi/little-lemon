import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}

export default App;
