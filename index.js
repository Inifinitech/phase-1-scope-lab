var customerName = "bob";
// function that access a global variable and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


// function to declare a variable in global scope
function setBestCustomer() {
 bestCustomer = 'not bob';
 return bestCustomer;
}

//function that changes a global scope variable
function overwriteBestCustomer() {
  return bestCustomer = 'maybe bob';
}

//constant in the global scope
const leastFavoriteCustomer = "value";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "intial";
}
changeLeastFavoriteCustomer();
