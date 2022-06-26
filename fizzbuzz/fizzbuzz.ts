export const fizzbuzz = (number: number): string => {
    return evalueNumbers(Array.from({length: number}, (v, i) => ++i))
}

const evalueNumbers = (numbers: number[]): string => numbers.map(evalueNumber).join('')

const evalueNumber = (number: number): number | string => {
    if (number % 15 === 0) {
        return "FizzBuzz"
    }
    if (number % 5 === 0) {
        return "Buzz"
    }
    if (number % 3 === 0) {
        return "Fizz"
    }
    return number
}