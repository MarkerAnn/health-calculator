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
  // *************** adamUser Object ******************** //
  test('calculates BMI prime for metric user', () => {
    const calculator = new HealthCalculator(adamUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(0.91, 2)
  })

  test('calculates BMR (Harris Benedict) for metric user male user', () => {
    const calculator = new HealthCalculator(adamUser)
    expect(calculator.calculateBmrHarrisBenedict()).toBe(1695.6670000000001)
  })

  test('calculates BMR (Miffling St Jeor) for metric user male user', () => {
    const calculator = new HealthCalculator(adamUser)
    expect(calculator.calculateBmrMifflinStJeor()).toBe(1648.75)
  })

  // *************** beatriceUser Object ******************** //
  test('calculates BMI correctly for imperial user', () => {
    const calculator = new HealthCalculator(beatriceUser)
    expect(calculator.calculateBmi()).toBeCloseTo(22.82, 2)
  })

  test('calculates BMI prime correctly for imperial user', () => {
    const calculator = new HealthCalculator(beatriceUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(0.91, 2)
  })

  test('calculates BMR (Harris Benedict) for imperial user female user', () => {
    const calculator = new HealthCalculator(beatriceUser)
    expect(calculator.calculateBmrHarrisBenedict()).toBe(1462.336454096)
  })

  test('calculates BMR (Miffling St Jeor) for imperial female user', () => {
    const calculator = new HealthCalculator(beatriceUser)
    expect(calculator.calculateBmrMifflinStJeor()).toBe(1431.0016799999999)
  })

  // *************** ceasarUser Object -  underweight ******************** //
  test('determines correct BMI type for underweight user, moderate thinness', () => {
    const calculator = new HealthCalculator(CeasarUnderweightUser)
    expect(calculator.calculateBmiType()).toBe('underweight, moderate thinness')
  })

  test('determines correct BMI prime for underweight user, moderate thinness', () => {
    const calculator = new HealthCalculator(CeasarUnderweightUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(0.65, 2)
  })

  test('calculates BMR (Harris Benedict) for metric and underweight male user', () => {
    const calculator = new HealthCalculator(CeasarUnderweightUser)
    expect(calculator.calculateBmrHarrisBenedict()).toBe(1257.417)
  })

  test('calculates BMR (Miffling St Jeor) for underweight metric male user', () => {
    const calculator = new HealthCalculator(CeasarUnderweightUser)
    expect(calculator.calculateBmrMifflinStJeor()).toBe(1298.75)
  })

  // *************** dianaUser Object - overweight ******************** //
  test('determines correct BMI type for overweight user, pre-obese', () => {
    const calculator = new HealthCalculator(DianaOverweightUser)
    expect(calculator.calculateBmiType()).toBe('overweight, pre-obese')
  })

  test('determines correct BMI prime for overweight user, pre-obese', () => {
    const calculator = new HealthCalculator(DianaOverweightUser)
    expect(calculator.calculateBmiPrime()).toBeCloseTo(1.18, 2)
  })

  test('calculates BMR (Harris Benedict) for metric and pre-obese female user', () => {
    const calculator = new HealthCalculator(DianaOverweightUser)
    expect(calculator.calculateBmrHarrisBenedict()).toBe(1744.033)
  })

  test('calculates BMR (Miffling St Jeor) for pre-obese metric female user', () => {
    const calculator = new HealthCalculator(DianaOverweightUser)
    expect(calculator.calculateBmrMifflinStJeor()).toBe(1742.75)
  })

  // *************** BMI out of range metric User Object ******************** //
  test('calculates BMItype out of range correctly for metric user', () => {
    const calculator = new HealthCalculator(outOfRangeBmiMetricUser)
    expect(calculator.calculateBmiType()).toBe(
      'BMI out of range. Please check you values.'
    )
  })

  test('calculates BMR (Harris Benedict) for a user without age', () => {
    const calculator = new HealthCalculator(outOfRangeBmiMetricUser)
    expect(calculator.calculateBmrHarrisBenedict()).toBe(NaN)
  })

  // *************** BMI out of range imperial User Object ******************** //
  test('calculates BMItyp out of range correctly for imperial user', () => {
    const calculator = new HealthCalculator(outOfRangeBmiImperialUser)
    expect(calculator.calculateBmiType()).toBe(
      'BMI out of range. Please check you values.'
    )
  })

  test('calculates BMR (Harris Benedict) for a imperial user with BMI out of range', () => {
    const calculator = new HealthCalculator(outOfRangeBmiImperialUser)
    expect(calculator.calculateBmrHarrisBenedict()).toBe(6077.104517328001)
  })

  // *************** invalid weight metric User Object ******************** //
  test('throws RangeError when creating HealthCalculator with invalid weight in metric system', () => {
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesMetricUser)
    ).toThrow(RangeError)
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesMetricUser)
    ).toThrow('Weight using the metric system must be between 0-700 kg')
  })

  // *************** invalid weight imperial User Object ******************** //
  test('throws RangeError when creating HealthCalculator with invalid weight in imperial system', () => {
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesImperialUser)
    ).toThrow(RangeError)
    expect(
      () => new HealthCalculator(bmiInvalidWeightValuesImperialUser)
    ).toThrow('Weight using the imperial system must be between 0-1543 lbs')
  })
})

//TODO: reflektion, dela upp denna?
// TODO: ändra namn, konsekvent namngivning, börja med små bokstäver
