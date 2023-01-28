import React from "react";
import Card from "../components/Card";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <h1 className="menu-header">Week's specials</h1>
      <div className="menu">
        <Card
          image="https://thecafesucrefarine.com/wp-content/uploads/The-Best-Greek-Salad.jpg"
          title="Greek Salad"
          price="$40"
          description="The farmous greek salad of crispy lettuce, peppers, 
          olives and our Chicago style feta cheese, 
          garnished with crunchy garlic and rosemary croutons."
        />
        <Card
          image="https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/11/ricetta-bruschetta-pomodoro/_jcr_content/header-par/image_single.img.jpg/1596625322419.jpg"
          title="Bruchetta"
          price="$40"
          description="The farmous greek salad of crispy lettuce, peppers,
           olives and our Chicago style feta cheese, garnished 
           with crunchy garlic and rosemary croutons."
        />
        <Card
          image="https://img.taste.com.au/OKe3yYqX/taste/2016/11/little-lemon-dessert-cakes-84569-1.jpeg"
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
