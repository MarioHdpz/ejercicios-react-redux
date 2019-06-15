import React from "react";
import Ingredient from "../Ingredient";

const Burger = props => {
  const burgerIngredients = props.ingredients.map((ingredient, index) => (
    <Ingredient key={index} id={ingredient} onClick={() => props.onIngredientClick(index)} />
  ));

  return (
    <div className="burger">
      <Ingredient id="bread-top" />
      {burgerIngredients}
      <Ingredient id="bread-bottom" />
    </div>
  );
};

export default Burger;
