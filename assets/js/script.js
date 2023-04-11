import menu from "./db.js"

const menuRemap = menu.map(pizza => {
  const {name, image, price, ingredients, description, votes} = pizza;
  const isVeg = checkVeg(ingredients);
  return {name, image, price, ingredients, description, votes, isVeg}
})

function checkVeg(ingredients) {
  const noVegIngredients = ["salame", "mozzarella", "salsiccia", "acciughe", "prosciutto", "grana", "scamorza", "gorgonzola"];
  let isVeg = true;
  ingredients.forEach(ingredient => {
    if(noVegIngredients.includes(ingredient)) isVeg = false;
  });
  return isVeg;
}