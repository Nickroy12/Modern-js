var num = [1,2,3,4,5,6];

var result = num.reduce((previous , current) => {
  return previous - current;
},0)

console.log(num)
console.log(result)