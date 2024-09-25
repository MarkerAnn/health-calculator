import { HealthCalculatorFactory } from '../factories/HealthCalculatorFactory'
import { testUsers } from './testData'
import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator'

describe('HealthCalculatorFactory and BMI calculations', () => {
  let healthCalculator: InterfaceHealthCalculator

  describe('Metric users', () => {
    it('should calculate correct BMI for normal weight male', () => {
      const user = testUsers.normalWeightMaleMetric
      healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

      const bmi = healthCalculator.getBmi()
      expect(bmi).toBeCloseTo(22.86, 2)

      const bmiType = healthCalculator.getBmiType()
      expect(bmiType).toBe('normal weight')
    })

    it('should calculate correct BMI for overweight female', () => {
      const user = testUsers.overweightFemaleMetric
      healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

      const bmi = healthCalculator.getBmi()
      expect(bmi).toBeCloseTo(27.55, 2)

      const bmiType = healthCalculator.getBmiType()
      expect(bmiType).toBe('overweight, pre-obese')
    })
  })

  describe('Imperial users', () => {
    it('should calculate correct BMI for underweight male', () => {
      const user = testUsers.underweightMaleImperial
      healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

      const bmi = healthCalculator.getBmi()
      expect(bmi).toBeCloseTo(16.97, 1)

      const bmiType = healthCalculator.getBmiType()
      expect(bmiType).toBe('underweight, mild thinness')
    })

    it('should calculate correct BMI for obese female', () => {
      const user = testUsers.obeseFemaleImperial
      healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

      const bmi = healthCalculator.getBmi()
      expect(bmi).toBeCloseTo(35.07, 2)

      const bmiType = healthCalculator.getBmiType()
      expect(bmiType).toBe('obese, class II')
    })
  })

  describe('BMI Prime and Ideal Weight', () => {
    it('should calculate correct BMI Prime', () => {
      const user = testUsers.normalWeightMaleMetric
      healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

      const bmiPrime = healthCalculator.getBmiPrime()
      expect(bmiPrime).toBeCloseTo(0.91, 2)
    })

    it('should calculate correct Ideal Weight range', () => {
      const user = testUsers.normalWeightMaleMetric
      healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

      const [minIdealWeight, maxIdealWeight] = healthCalculator.getIdealWeight()
      expect(minIdealWeight).toBeCloseTo(56.65, 1)
      expect(maxIdealWeight).toBeCloseTo(76.25, 1)
    })
  })

  describe('Error handling', () => {
    it('should throw an error for invalid user input', () => {
      const invalidUser = testUsers.invalidUserMissingRequired
      expect(() =>
        HealthCalculatorFactory.createHealthCalculator(invalidUser)
      ).toThrow()
    })

    it('should throw an error for negative values', () => {
      const invalidUser = testUsers.invalidUserNegativeValues
      expect(() =>
        HealthCalculatorFactory.createHealthCalculator(invalidUser)
      ).toThrow()
    })
  })
})
