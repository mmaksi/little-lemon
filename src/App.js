import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
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
    </>
  );
}

export default App;
