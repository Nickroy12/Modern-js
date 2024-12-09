let myArray = [1, 2, 3]; // An array with values
let mySet = new Set(myArray); // Convert array to a Set (to remove duplicates if any)

// Log the spread version of mySet
console.log([...mySet]); // Converts the Set back to an array and logs
let mynum = [1, 2, 3, 4, 5, 5, 5, 6, 5]; 
 console.log([...new Set (mynum)]);