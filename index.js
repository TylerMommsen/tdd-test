function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}

function caesarCipher(str, shiftFactor) {
    let cipherText = '';
    for (let i = 0; i < str.length; i++) {
        cipherText = cipherText + String.fromCharCode(str.charCodeAt(i) + shiftFactor);
    }
    return cipherText;
}

function analyzeArray(arr) {
    function calculateAverage(array) {
        if (numbers.length === 0) return 0;

        let sum = 0;
        array.forEach(num => {
            sum += num;
        });

        return sum / array.length;
    }

    const object = {
        average: calculateAverage(arr),
        min: min(...arr),
        max: max(...arr),
        length: arr.length
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};