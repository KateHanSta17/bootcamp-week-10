const Validate = require('../validate'); 
// Arrange
describe('Validate', () => {
  let validate;

  beforeEach(() => {
    validate = new Validate();
  });
// TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  test('isPassword() returns false when the password is less than 8 characters', () => {
    expect(validate.isPassword('short')).toBe(false);
  });
// TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  test('isPassword() returns false when the password does not contain at least 1 uppercase letter', () => {
    expect(validate.isPassword('lowercase1')).toBe(false);
  });
// TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  test('isPassword() returns false when the password does not contain at least 1 lowercase letter', () => {
    expect(validate.isPassword('UPPERCASE1')).toBe(false);
  });
// TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  test('isPassword() returns false when the password does not contain at least 1 number', () => {
    expect(validate.isPassword('NoNumber')).toBe(false);
  });
// TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
// Act  
test('isPassword() returns true when the password is at least 8 characters long and contains an uppercase letter, a lowercase letter, and a number', () => {
    // Assert
    expect(validate.isPassword('Valid1Password')).toBe(true);
  });
});