console.log("Week 7 - JS - Arrays and array methods - Homework");

// Database
// const menuDatabase = [
// ['Papadum', 20, 'vegetarian'],
// ['Pakora', 50, 'meat'],
// ['Tandoori Chicken', 60, 'meat'],
// ['Samosa', 50, 'vegetarian'],
// ['Butter Chicken', 139, 'meat'],
// ['Chicken Korma', 129, 'meat'],
// ['Chicken Vindaloo', 149, 'meat'],
// ['Saag Lamb', 130, 'meat'],
// ['Lam Tikka Masala', 159, 'meat'],
// ['Yellow Daal Tadka', 119, 'vegetarian'],
// ['Biryani', 129, 'vegetarian'],
// ['Gulab Jamun', 55, 'dessert'],
// ['Mango Kulfi', 35, 'dessert'],
// ['Rasmalai', 60, 'dessert'],
// ];

// Above, you can find an array that represents the database of your restaurant’s website.
// On this database we want you to do the following tasks:
// 1. After some months of your restaurant being open, you realised that the last element in the menu hasn’t been sold in the last 4 months so you decide to remove it from the menu, use an array method to remove the last element of an array and save it in a variable called: removedMenuItem.
// 2. Due to inflation you have gone through your finances and you realised that you need to increase all the menu prices by 10%. To do this we want to create a new array (called increasedMenuDatabase) containing all the menu items with the mentioned price increase.
// 3. A customer asks you about how many vegetarian dishes you have in the menu, for this you might want to filter the menu and get the amount of items filtered by the type: ‘vegetarian’. Call this variable: amountVegetariantDishes.
// 4. There’s a table that ordered all the dishes containing meat (1x time each dish), and they are ready to pay. Use the reduce method to get the total value of all the dishes that contain meat so that the customer can pay you. Call this variable: totalAmountMeatDishes.

const menuDatabase = [
  ['Papadum', 20, 'vegetarian'],
  ['Pakora', 50, 'meat'],
  ['Tandoori Chicken', 60, 'meat'],
  ['Samosa', 50, 'vegetarian'],
  ['Butter Chicken', 139, 'meat'],
  ['Chicken Korma', 129, 'meat'],
  ['Chicken Vindaloo', 149, 'meat'],
  ['Saag Lamb', 130, 'meat'],
  ['Lam Tikka Masala', 159, 'meat'],
  ['Yellow Daal Tadka', 119, 'vegetarian'],
  ['Biryani', 129, 'vegetarian'],
  ['Gulab Jamun', 55, 'dessert'],
  ['Mango Kulfi', 35, 'dessert'],
  ['Rasmalai', 60, 'dessert'],
];

const displayValueElement = document.querySelector(".display_value");

const displayValueOnAnHTMLElement = (message, elementValue) => {
  let result = `<p class='display_result'>${message}: <span>${elementValue}</span></p> <br />`;
  return displayValueElement.innerHTML += result;
};

console.log(`menuDatabase: ${menuDatabase}`);
displayValueOnAnHTMLElement("MenuDatabase (original array)", menuDatabase);

const clonedMenuDatabase = [...menuDatabase];
console.log(`clonedMenuDatabase: ${clonedMenuDatabase}`);
displayValueOnAnHTMLElement("ClonedMenuDatabase (copy of an array)", clonedMenuDatabase);

// 1. After some months of your restaurant being open, you realised that the last element in the menu hasn’t been sold in the last 4 months so you decide to remove it from the menu, use an array method to remove the last element of an array and save it in a variable called: removedMenuItem.
const removedMenuItem = clonedMenuDatabase.pop();
console.log(`removedMenuItem: ${removedMenuItem}`);
displayValueOnAnHTMLElement("removedMenuItem (Last item from an array)", removedMenuItem);

displayValueOnAnHTMLElement("ClonedMenuDatabase (copy of an array) - after applying pop() method", clonedMenuDatabase);

// 2. Due to inflation you have gone through your finances and you realised that you need to increase all the menu prices by 10%. To do this we want to create a new array (called increasedMenuDatabase) containing all the menu items with the mentioned price increase.
const increasedMenuDatabase = clonedMenuDatabase.map((menu) => {
  const increadMenuPrice = menu[1] * 10 / 100;
  return increadMenuPrice;
});

console.log(`increasedMenuDatabase: ${increasedMenuDatabase}`);
displayValueOnAnHTMLElement("IncreasedMenuDatabase (increase all the menu prices by 10%)", increasedMenuDatabase);

// 3. A customer asks you about how many vegetarian dishes you have in the menu, for this you might want to filter the menu and get the amount of items filtered by the type: ‘vegetarian’. Call this variable: amountVegetariantDishes.
const vegetarianDish = 'vegetarian';

const amountVegetariantDishes = menuDatabase.filter(dish => dish[2] === vegetarianDish).length;

console.log(`amountVegetariantDishes: ${amountVegetariantDishes}`);
displayValueOnAnHTMLElement("AmountVegetariantDishes", amountVegetariantDishes);

// Extra
const nameOfVegetarianDishes = menuDatabase
  .filter(dish => dish[2] === vegetarianDish)
  .map(dish => dish[0]);

console.log(`nameOfVegetarianDishes: ${nameOfVegetarianDishes}`);
displayValueOnAnHTMLElement("NameOfVegetarianDishes", nameOfVegetarianDishes);

// 4. There’s a table that ordered all the dishes containing meat (1x time each dish), and they are ready to pay. Use the reduce method to get the total value of all the dishes that contain meat so that the customer can pay you. Call this variable: totalAmountMeatDishes.
const meatDish = 'meat';

const totalAmountMeatDishes = menuDatabase.reduce((accumulator, dish) => {
  if (dish[2] === meatDish) {
    return accumulator + dish[1];
  }
  return accumulator;
}, 0);

console.log(`totalAmountMeatDishes: ${totalAmountMeatDishes}`);
displayValueOnAnHTMLElement("MeatDishesTotalAmount", totalAmountMeatDishes);

// Extra
const numberOfMeatDishes = menuDatabase.filter(dish => dish[2] === meatDish).length;
console.log(`numberOfMeatDishes: ${numberOfMeatDishes}`);
displayValueOnAnHTMLElement("NumberOfMeatDishes", numberOfMeatDishes);

const nameOfMeatDishes = menuDatabase
  .filter(item => item[2] === meatDish)
  .map(item => item[0]);

console.log(`nameOfMeatDishes: ${nameOfMeatDishes}`);
displayValueOnAnHTMLElement("NameOfMeatDishes", nameOfMeatDishes);
