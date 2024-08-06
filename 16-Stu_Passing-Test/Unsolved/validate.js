class Validate {}

Validate.prototype.isPassword = function(password) {
// Check if the password is less than 8 characters and return false if so.
  if (password.length < 8) {
    return false;
  }

// Check if the password contains at least 1 uppercase, 1 lowercase, and 1 number.
// arrange the regex to check for at least 1 uppercase, 1 lowercase, and 1 number.  
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  return regex.test(password);
};

module.exports = Validate;


// NOTES:
// How can you write these tests to ensure that another developer testing your code can understand what the tests are checking?
// Descriptive Test Names: Each test function has a descriptive name that clearly states what the test is checking.
// Organized with describe: The describe block groups all tests related to the Validate class's password validation functionality.
// Comments and Structure: Comments explain the purpose of each section (Arrange, Act, Assert), making the logic clear.
// Consistent Setup: Using beforeEach ensures that a fresh instance of Validate is used for each test, keeping tests isolated and consistent.