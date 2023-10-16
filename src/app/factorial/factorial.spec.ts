import { factorial } from './factorial'

describe('fact test suite', () => {
    it('Should return 1 if n is 0', () => {
        const result = factorial(0);
        expect(result).toBe(1);
    })

    it('Should return 0 if n is negative', () => {
        const result =factorial(-1);
        expect(result).toBe(0);
    })

    it('Should return 0 if n > 16', () => {
        const result =factorial(123456789123456123);
        expect(result).toBe(0);
    })

    it('Should return 6 if n is 3', () => {
        const result =factorial(3);
        expect(result).toBe(6);
    })

    it('Should return 120 if n is 5', () => {
        const result =factorial(5);
        expect(result).toBe(120);
    })

    it('Should return 24 if n is 4', () => {
        const result =factorial(4);
        expect(result).toBe(24);
    })



})