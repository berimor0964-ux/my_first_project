
function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zа-яё]/g, '');
    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) return false;
        left++;
        right--;
    }
    return true;
}

function countVowels(str) {
    const vowels = 'аеёиоуыэюяaeiou';
    let count = 0;
    const lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        const cleanWord = words[i].replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
        if (cleanWord.length > longest.length) {
            longest = cleanWord;
        }
    }
    return longest;
}

function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

function bubbleSort(arr) {
    const sortedArr = [...arr];
    const len = sortedArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}

function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === target) return mid;
        if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
function formatCurrency(amount, currency = '₽') {
    const rounded = amount.toFixed(2);
    const parts = rounded.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.') + ' ' + currency;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function generatePassword(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}