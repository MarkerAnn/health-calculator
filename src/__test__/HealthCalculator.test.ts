// HealthCalculator.test.ts

import { HealthCalculator } from '../calculators/HealthCalculator'
import {
  adamUser,
  beatriceUser,
  CeasarUnderweightUser,
  DianaOverweightUser,
  outOfRangeBmiMetricUser,
  outOfRangeBmiImperialUser,
  bmiInvalidWeightValuesMetricUser,
  bmiInvalidWeightValuesImperialUser,
} from './testData'

describe('HealthCalculator', () => {
  test('calculates BMI correctly for metric user', () => {
    const calculator = new HealthCalculator(adamUser)
    expect(calculator.calculateBmi()).toBeCloseTo(22.86, 2)
  })

  test('calculates BMI prime for metric user', () => {
    const calculator = new HealthCalculator(adamUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(0.91, 2)
  })

  test('calculates BMR for metric user', () => {
    const calculator = new HealthCalculator(adamUser)
    expect(calculator.calculateBmrHarrisBenedict()).toBeCloseTo(1695.66, 2)
  })

  test('calculates BMI correctly for imperial user', () => {
    const calculator = new HealthCalculator(beatriceUser)
    expect(calculator.calculateBmi()).toBeCloseTo(22.82, 2)
  })

  test('calculates BMI prime correctly for imperial user', () => {
    const calculator = new HealthCalculator(beatriceUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(0.91, 2)
  })

  test('determines correct BMI type for underweight user, moderate thinness', () => {
    const calculator = new HealthCalculator(CeasarUnderweightUser)
    expect(calculator.calculateBmiType()).toBe('underweight, moderate thinness')
  })

  test('determines correct BMI prime for underweight user, moderate thinness', () => {
    const calculator = new HealthCalculator(CeasarUnderweightUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(0.65, 2)
  })

  test('determines correct BMI type for overweight user, pre-obese', () => {
    const calculator = new HealthCalculator(DianaOverweightUser)
    expect(calculator.calculateBmiType()).toBe('overweight, pre-obese')
  })

  test('determines correct BMI prime for overweight user, pre-obese', () => {
    const calculator = new HealthCalculator(DianaOverweightUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(1.18, 2)
  })

  test('calculates BMItype out of range correctly for metric user', () => {
    const calculator = new HealthCalculator(outOfRangeBmiMetricUser)
    expect(calculator.calculateBmiType()).toBe(
      'BMI out of range. Please check you values.'
    )
  })

  test('calculates BMItyp out of range correctly for imperial user', () => {
    const calculator = new HealthCalculator(outOfRangeBmiImperialUser)
    expect(calculator.calculateBmiType()).toBe(
      'BMI out of range. Please check you values.'
    )
  })

  test('throws RangeError when creating HealthCalculator with invalid weight in metric system', () => {
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesMetricUser)
    ).toThrow(RangeError)
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesMetricUser)
    ).toThrow('Weight using the metric system must be between 0-700 kg')
  })

  test('throws RangeError when creating HealthCalculator with invalid weight in imperial system', () => {
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesImperialUser)
    ).toThrow(RangeError)
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesImperialUser)
    ).toThrow('Weight using the imperial system must be between 0-1543 lbs')
  })
})
