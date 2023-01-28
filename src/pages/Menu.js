import React from "react";
import Card from "../components/Card";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <h1 className="menu-header">Week's specials</h1>
      <div className="menu">
        <Card
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          title="Greek Salad"
          price="$40"
          description="The farmous greek salad of crispy lettuce, peppers, 
          olives and our Chicago style feta cheese, 
          garnished with crunchy garlic and rosemary croutons."
        />
        <Card
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          title="Bruchetta"
          price="$40"
          description="The farmous greek salad of crispy lettuce, peppers,
           olives and our Chicago style feta cheese, garnished 
           with crunchy garlic and rosemary croutons."
        />
        <Card
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          title="Lemon Dessert"
          price="$40"
          description="This comes straight from grandma's recipe book, every last 
          ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </>
  );
};

export default Menu;
