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
    function shiftText(charCode, shift) { // wrap from z to a
        let newCode = charCode + shift;
        if (charCode >= 65 && charCode <= 90) { // uppercase
            if (newCode > 90) {
                newCode = 64 + (newCode - 90);
            }
        } else if (charCode >= 97 && charCode <= 122) {
            if (newCode > 122) {
                newCode = 96 + (newCode - 122);
            }
        }
        return newCode;
    }

    let cipherText = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            const newCode = shiftText(charCode, shiftFactor);
            cipherText += String.fromCharCode(newCode);
        } else {
            cipherText += str[i];
        }
    }

    return cipherText;
}

function analyzeArray(arr) {
    function calculateAverage(array) {
        if (array.length === 0) return 0;

        let sum = 0;
        array.forEach(num => {
            sum += num;
        });

        return sum / array.length;
    }

    const object = {
        average: calculateAverage(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }

    return object;
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};