import menu from "./db.js"
import {checkVeg} from "./functions.js";

const menuRemap = menu.map(pizza => {
  const {name, image, price, ingredients, description, votes} = pizza;
  const isVeg = checkVeg(ingredients);
  return {name, image, price, ingredients, description, votes, isVeg}
})

menuRemap.sort((a,b) => a.price - b.price);