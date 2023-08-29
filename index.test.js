const functions = require('./index');
const calculator = functions.calculator;
const capitalize = functions.capitalize;
const reverseString = functions.reverseString;
const caesarCipher = functions.caesarCipher;
const analyzeArray = functions.analyzeArray;

// capitalize function
test('capitalizes first letter of string', () => {
    expect(capitalize('the odin project')).toBe('The odin project');
});

// reverseString function
test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

// calculator object
test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test('subtracts 2 from 1 to equal -1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});
test('divides 1 by 2 to equal 0.5', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});
test('multiplies 1 by 2 to equal 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

// caesarCipher function
test('hello to equal khoor', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
});
test('zombie to equal crpelh', () => {
    expect(caesarCipher('zombie', 3)).toBe('crpelh');
});
test('ZzabcC19,./A to equal CcdefF19,./D', () => {
    expect(caesarCipher('ZzabcC19,./A', 3)).toBe('CcdefF19,./D');
});

// analyzeArray function
test('1, 2, 3, 4, 5 array average to equal 3', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});
test('1, 2, 3, 4, 5 array min to equal 1', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
});
test('1, 2, 3, 4, 5 array max to equal 5', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
});
test('1, 2, 3, 4, 5 array length to equal 5', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
});