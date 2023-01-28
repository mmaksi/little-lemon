import "./App.css";
import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;
