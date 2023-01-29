import React, { useContext, useEffect } from "react";
import { ReservationContext } from "../store/reservation.context";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Menu from "./Menu";
import Testimonials from "./Testimonials";

const Home = () => {
  const { state, dispatch } = useContext(ReservationContext);
  useEffect(() => {
    console.log(state);
  });
  
  return (
    <>
      <Hero />
      <Menu />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
};

export default Home;
