let a = new Set([1, 2, 3]); 
let b = new Set([4, 3, 2]); 
 let union = new Set([...a, ...b]);  
 console.log(union); 
 let intersection = new Set([...a].filter(x => b. has(x))); 
 console.log(intersection);
 let different = new Set([...a].filter(x => !b. has(x))); 
 console.log(different);