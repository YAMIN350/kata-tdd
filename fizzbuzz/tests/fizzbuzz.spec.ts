import { describe, it, expect } from 'vitest'
import { fizzbuzz } from "../fizzbuzz";

describe('kata fizzbuzz tdd', () => {

    it('should return 1 if number is 1', () => {
        expect(fizzbuzz(1)).toEqual("1");
    });

    it('should return 12 if number is 2', () => {
        expect(fizzbuzz(2)).toEqual("12");
    });

    it('should return 12Fizz if number is 3', () => {
        expect(fizzbuzz(3)).toEqual("12Fizz");
    });

    it('should return 12Fizz4Buzz if number is 5', () => {
        expect(fizzbuzz(5)).toEqual("12Fizz4Buzz");
    });

    it('should return 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz if number is 15', () => {
        expect(fizzbuzz(15)).toEqual("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
    });
});