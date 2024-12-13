function reverseNum(num) {
    let reversed = 0;
    while (num > 0) {
        const lastDigit = num % 10;
        reversed = reversed + lastDigit;
        num = Math.floor(num / 10)
    }
    return reversed
}

const number = 12345;
const reversedNumber = reverseNum(number)

console.log(reversedNumber)