import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe ('Sum', () => {
    it ('should add correctly', () => {
        const operandA = 5;
        const operandB = 5;

        const actualValue = sum(operandA, operandB);

        const expectedValue = 10;
        assert.equal(actualValue, expectedValue);
    });

    it ('should return value of 0 if string passed on "a" parameter', () => {
        const operandA = '6';
        const operandB = 5;

        const actualValue = sum(operandA, operandB);

        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);
    });

    it ('should return value of 0 if string passed on "b" parameter', () => {
        const operandA = 6;
        const operandB = '5';

        const actualValue = sum(operandA, operandB);

        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);
    });
});