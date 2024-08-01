// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.

class validate {
  isPassword(password) {
    if (password === '') {
      return false;
    }
  }
}

// TODO: Export the Validate class from this file.

module.exports = validate;


// Expect function is to create assertions in your tests. 
// Assertions are used to check if the code under test behaves as expected. 
//The expect function allows you to define what the expected outcome of your test is 
// and then compare the actual result to this expected outcome.

// Unit Tests: Low-level, isolated tests of individual components or functions.
// Integration Tests: Medium-level tests of interactions between multiple components.
// E2E Tests: High-level tests of the entire application, simulating real-world scenarios.
