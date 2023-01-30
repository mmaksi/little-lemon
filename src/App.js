import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="details" element={<UserDetails />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  );
}

export default App;
