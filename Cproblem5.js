// Create an empty array to represent the stack
let groceryStack = [];

// Create a function to peek at the top of the stack
function peek() {
  // Check if the stack is empty
  if (groceryStack.length === 0) {
    // Return null if the stack is empty
    return null;
  } else {
    // Return the last element of the stack
    return groceryStack[groceryStack.length - 1];
  }
}

// Create a function to push an item onto the stack
function push(item) {
  // Add the item to the end of the stack
  groceryStack.push(item);

  // Print the updated stack to the console
  console.log("Stack:", groceryStack);
}

// Create a function to pop an item from the stack
function pop() {
  // Check if the stack is empty
  if (groceryStack.length === 0) {
    // Return null if the stack is empty
    return null;
  } else {
    // Remove the last element from the stack
    let poppedItem = groceryStack.pop();

    // Print the updated stack to the console
    console.log("Stack:", groceryStack);

    // Return the popped item
    return poppedItem;
  }
}

// Get 5 grocery items from the user using prompt()
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item +{i + 1}:`); // Fixed string concatenation
  if (item) { // Check if the user entered a valid item
    push(item);
  } else {
    console.log("No item entered. Please try again.");
    i--; // Decrement i to repeat the iteration
  }
}

// Example usage of the stack functions
console.log("Peek:", peek());
pop();
console.log("Peek:", peek());
push("Milk");
