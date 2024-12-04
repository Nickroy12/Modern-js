var number = [1,2,3,4];
var [,a,,b] = number;
console.log(a,b)

var sonkha = [1,2,[110 , 123, 125],3,4];
var [,a,[a,b],] = sonkha;
console.log(a,b)

var x = 1;
y = 2;
 [x,y] = [y,x]

console.log(x,y);