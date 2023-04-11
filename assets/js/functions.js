const checkVeg = (ingredients) => {
  const noVegIngredients = ["salame", "mozzarella", "salsiccia", "acciughe", "prosciutto", "grana", "scamorza", "gorgonzola"];
  let isVeg = true;
  ingredients.forEach(ingredient => {
    if(noVegIngredients.includes(ingredient)) isVeg = false;
  });
  return isVeg;
}

export {checkVeg}