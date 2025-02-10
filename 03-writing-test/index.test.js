import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should add correctly', () => {
    //arrange
    const operandA = 3;
    const operandB = 5;

    //action
    const actualValue = sum(operandA, operandB);

    //assert
    const expectedValue = 8;
    assert.equal(actualValue, expectedValue);
});



