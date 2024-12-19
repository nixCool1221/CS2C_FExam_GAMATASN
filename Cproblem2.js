// Create two arrays
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays into a single array
const mergedArray = [...numbers, ...names];

// Log the merged array to the console
console.log("Merged Array:", mergedArray);

// Sort numbers numerically in reverse
const sortedNumbers = numbers.sort((a, b) => b - a);

// Log the sorted numbers to the console
console.log("Sorted Numbers:", sortedNumbers);

// Sort names alphabetically
const sortedNames = names.sort();

// Log the sorted names to the console
console.log("Sorted Names:", sortedNames);