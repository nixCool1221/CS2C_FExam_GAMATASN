// Step 1: Creating multi-dimensional array
var names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"]; 
var ages = [24, 65, 21, 5, 9];
var multiArray = [names, ages];

// Step 2: Restructuring the multi-dimensional array
var restructuredArray = [];
for (var i = 0; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]); 
}

// Step 3: Logging the restructured array to the console
console.log("Restructured Multi-Dimensional Array:");
for (var i = 0; i < restructuredArray.length; i++) {
  console.log(restructuredArray[i]); // Output each sub-array 
}