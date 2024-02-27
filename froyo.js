//===== Build your website according to this user story:

// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

//===== Hints
// If you are feeling stuck, try answering the following questions:

// Can you live serve the HTML file?
// Is the HTML file connected to the JS file?
// Can you prompt the user for froyo flavors and store their result?
// Can you parse the user input into an array of froyo flavors?
// Can you build an object to track which flavors you have observed so far?
// As you iterate through the array of flavors, when should that object be updated?
// Is your logic organized into a function?

// 1. Create prompt upon opening website and Ask user to enter a list of froyo flavors, separated by commas
// 2. Parse user input into array using .split(",") method 
// 3. Create an object to track ordered flavors 
// 4. Iterate through the array and update it 
// 5. Use console.table to display a table listing of how many of each flavor they have ordered

// Prompt user 
const orderHere = prompt(
  "Enter your order of what froyo flavors you'd like, separated by commas"
);

// Parse user input into an array // contains user order - flavors of froyo
const flavorOrder = orderHere.split(",");

//Object to keep track of flavors ordered 
const totalflavorsOrdered = {};

// Inside the for..of loop , the variable flavor will represent each individual flavor in the totalflavorsOrdered array during each iteration. 
for ( const flavor of flavorOrder) {
  if (totalflavorsOrdered[flavor]) {
    // if flavor already exists in the object, increment count/flavor to array 
    totalflavorsOrdered[flavor]++;
  } else {
    // if the flavor doesn't exist in the object, initialize its count to 1/add to array
  } totalflavorsOrdered[flavor] = 1;
}

console.table(totalflavorsOrdered);
