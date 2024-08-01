// Import the Arithmetic class.
const Arithmetic = require('../arithmetic.js');

// A testing suite for the Arithmetic class.
describe('Arithmetic', () => {
    // A test is created to check the constructor of the Arithmetic class.
    describe('constructor', () => {
        it('should create an instance of Arithmetic with the provided values', () => {
            const num1 = 2;
            const num2 = 3;
            const operator = '+';
            const arithmetic = new Arithmetic(num1, num2, operator);
            expect(arithmetic.num1).toEqual(num1);
            expect(arithmetic.num2).toEqual(num2);
            expect(arithmetic.operator).toEqual(operator);
        });

        it('should throw an error if non-numeric values are provided', () => {
            expect(() => new Arithmetic('2', 3, '+')).toThrow('Please enter numbers for calculation');
            expect(() => new Arithmetic(2, '3', '+')).toThrow('Please enter numbers for calculation');
            expect(() => new Arithmetic('2', '3', '+')).toThrow('Please enter numbers for calculation');
        });
    });
});