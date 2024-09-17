//I want a new name to appear in my name list every few seconds
//I want a new occupation to appear in my occupation list every few seconds
//I want a new starting price to appear in my starting-price list every few seconds

//avg price of $30, $40, $50, $60, and $70 is $50
//need random name
//need random occupation
//need random number between 30 and 70

//alice and bob on list first, few seconds later Carol, then random.
//writer and teacher on list first, few seconds later, programmer, then random.
//$30 and $50 on list first, few seconds later, $70, then random.

//to get random name, create array with list of names, then Math.floor(Math.random() * arrayName.length)
//to get random occupation, create array with list of occupation, then Math.floor(Math.random() * arrayName.length)
//to get random number, create function with min and max as parameters that returns Math.floor(Math.random() * (max - min))

//state
//add arrays
//add function

//render
//map


//state

const names = ["Allison", "Elle", "Christian", "Sue", "Brandan", "Christina", "Tamar", "Ashley", "Nolan", "Dan"];
const occupations = ["Writer", "Teacher", "Programmer", "Engineer", "Realtor", "Accountant", "Musician", "Electrician", "Architect", "Camera Operator"];
const max = 20;
const avgPrice = 50;
const freelancers = [
  {name: "Mrs. Thomas", occupation: "Writer", price: 55},
  {name: "Mrs. Flower", occupation: "Teacher", price: 40},
  {name: "Mr. Fisher", occupation: "Programmer", price: 65},
  {name: "Mrs. Gordon", occupation: "Engineer", price: 70},
  {name: "Mr. S", occupation: "Realtor", price: 47},
  {name: "Mrs. Ferguson", occupation: "Accountant", price: 47},
  {name: "Mrs. Stubbs", occupation: "Musician", price: 50},
  {name: "Mrs. Deummler", occupation: "Electrician", price: 55},
  {name: "Mr. Ferguson", occupation: "Architect", price: 48},
  {name: "Mr. Hanks", occupaton: "Camera Operator", price: 60},
]

function pickFreelancer() {
const name = [Math.floor(Math.random() * names.length)];
const occupation = [Math.floor(Math.random() * (70 - 30) + 30)];

freelancers.push({name, occupation, price});
}

function renderFreelancers() {
  const $freelancers = freelancers.map((freelancer) =>
  {const $freelancer = document.createElement("ul");

  const $nameTd = document.getElementById("li")
  $nameTd.textContent = freelancer.name;

  const $occupationTd = document.getElementById("li")
  $nameTd.textContent = freelancer.occupation;

  const $priceTd = document.getElementById("li")
  $nameTd.textContent = freelancer.price;
debugger;
  $freelancers.replaceChildren(...[$nameTd], [$occupationTd], [$priceTd]);
});
}return $ul;