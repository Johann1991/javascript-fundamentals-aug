// Array of products and their corresponding prices
const products = ["apple", "banana", "orange", "mango", "grapes"];
const prices = [6, 7, 8, 12, 14];

/**
 * Function to display all products with their prices
 */
function displayProducts() {
  console.log("Available Products:");
  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product} - R${prices[index].toFixed(2)}`);
  });
}

/**
 * Function to calculate total cost of selected products
 * @param {Array} selectedProducts - Array of selected product indices
 * @returns {number} - Total cost of selected products
 */
function calculateTotalCost(selectedProducts) {
  let totalCost = 0;
  selectedProducts.forEach((productIndex) => {
    totalCost += prices[productIndex];
  });
  return totalCost;
}

/**
 * Function to calculate change based on budget and total cost
 * @param {number} budget - The amount of money the user has
 * @param {number} totalCost - The total cost of selected products
 * @returns {number} - Remaining change after purchase
 */
function calculateChange(budget, totalCost) {
  return budget - totalCost;
}

/**
 * Main function to run the shop simulation
 */
function runShopSimulation() {
  // User's budget
  let budget = 50.0; // Example budget

  // Display available products
  displayProducts();

  // Example product selection (this would be user input in a real application)
  let selectedProducts = [0, 1, 3]; // Selecting apple, banana, and mango

  // Calculate total cost of selected products
  let totalCost = calculateTotalCost(selectedProducts);

  // Check if the user can afford the selected products
  if (totalCost > budget) {
    console.log("You do not have enough money to purchase these products.");
  } else {
    // Calculate remaining change
    let change = calculateChange(budget, totalCost);

    // Display total cost and change
    console.log(`Total Cost: R${totalCost.toFixed(2)}`);
    console.log(`Change: R${change.toFixed(2)}`);
  }
}

// Run the shop simulation
runShopSimulation();
