var customerName = "bob";
// function that access a global variable and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;
// function to declare a variable in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}
setBestCustomer();
// function that changes a global scope variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
overwriteBestCustomer();
// constant in the global scope
const leastFavoriteCustomer = "value";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "intial";
}
changeLeastFavoriteCustomer();
