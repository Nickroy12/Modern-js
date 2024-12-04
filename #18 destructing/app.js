const user ={
  id:22,
  name:"Amin",
  age:35,
  // education: {
  //   degree: "B.A"
  // }
}


const {education: x  = {}} = user;
console.log(x)