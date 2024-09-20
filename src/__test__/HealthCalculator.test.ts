import { User } from '../models/User'
import { HealthCalculator } from '../calculators/HealthCalculator'

describe('HealthCalculator', () => {
  const testUser: User = {
    height: 1.8,
    weight: 75,
    age: 30,
    gender: 'male',
    unitSystem: 'metric',
  }

  const healthCalc = new HealthCalculator(testUser)

  test('Calculates BMI correctly', () => {
    expect(healthCalc.calculateBmi()).toBeCloseTo(23.15, 2)
  })

  test('Print BMI type correctly', () => {
    expect(healthCalc.calculateBmiType()).toBe('normal weight')
  })
})
