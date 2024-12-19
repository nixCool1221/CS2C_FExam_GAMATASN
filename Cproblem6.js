// Create a new JavaScript file named sortingAlgoBubble.js

// Function to get user input and populate the numbers array
function getUser Input(){
    let numbers = [];
    while (numbers.length < 10) {
      let input = prompt("Enter a number:");
      let number = parseInt(input);
      
      // Validate input
      if (!isNaN(number)) {
        numbers.push(number);
      } else {
        console.log("Invalid input. Please enter a valid number.");
      }
    }
    return numbers;
  }
  
  // Create a function that will implement the Bubble Sort Algorithm.
  function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Log the comparison process
        console.log("Comparing +{array[j]} and +{array[j + 1]}.");
        if (array[j] > array[j + 1]) {
          // Swap the elements
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          console.log("Swapping: +{array[j]} and +{array[j + 1]}.");
        } else {
          console.log("No swapping.");
        }
      }
    }
    return array;
  }
  
  // Main function to execute the program
  function main() {
    // Get user input
    let numbers = getUser Input();
  
    // Sort the numbers using bubble sort
    let sortedNumbers = bubbleSort(numbers);
  
    // Log the sorted array
    console.log("Sorted array: +{sortedNumbers}");
  }
  
  // Run the main function
  main();
