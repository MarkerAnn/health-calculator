import { BodyCompositionCalculator } from '../calculators/BodyCompositionCalculator'
import { testUsers } from './testData'
import { HealthCalculatorFactory } from '../factories/HealthCalculatorFactory'

describe('BodyCompositionCalculator', () => {
  let bodyCompositionCalculator: BodyCompositionCalculator

  beforeEach(() => {
    bodyCompositionCalculator = new BodyCompositionCalculator()
  })

  describe('calculateWaistToHipRatio', () => {
    it('should calculate correct waist to hip ratio for normal weight male (metric)', () => {
      const user = testUsers.normalWeightMaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const ratio = healthCalculator.getWaistToHipRatio()
      expect(ratio).toBeCloseTo(0.8421, 4)
    })

    it('should calculate correct waist to hip ratio for overweight female (metric)', () => {
      const user = testUsers.overweightFemaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const ratio = healthCalculator.getWaistToHipRatio()
      expect(ratio).toBeCloseTo(0.85, 4)
    })

    it('should throw an error when waist or hip measurements are missing', () => {
      const userWithoutWaist = {
        ...testUsers.normalWeightMaleMetric,
        waist: undefined,
      }
      expect(() =>
        bodyCompositionCalculator.calculateWaistToHipRatio(userWithoutWaist)
      ).toThrow('Waist and hip measurements are required')
    })
  })

  describe('calculateWaistToHeightRatio', () => {
    it('should calculate correct waist to height ratio for normal weight male (metric)', () => {
      const user = testUsers.normalWeightMaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const ratio = healthCalculator.getWaistToHeightRatio()
      expect(ratio).toBeCloseTo(0.4571, 4)
    })

    it('should calculate correct waist to height ratio for overweight female (metric)', () => {
      const user = testUsers.overweightFemaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const ratio = healthCalculator.getWaistToHeightRatio()
      expect(ratio).toBeCloseTo(0.5152, 4)
    })

    it('should throw an error when waist or height measurements are missing', () => {
      const userWithoutWaist = {
        ...testUsers.normalWeightMaleMetric,
        waist: undefined,
      }
      expect(() =>
        bodyCompositionCalculator.calculateWaistToHeightRatio(userWithoutWaist)
      ).toThrow('Waist and height are required')
    })
  })

  describe('calculateBodyFatPercentage', () => {
    it('should calculate correct body fat percentage for normal weight male (metric)', () => {
      const user = testUsers.normalWeightMaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bodyFatPercentage = healthCalculator.getBodyFatPercentage()
      expect(bodyFatPercentage).toBeCloseTo(20.14, 1)
    })

    it('should calculate correct body fat percentage for overweight female (metric)', () => {
      const user = testUsers.overweightFemaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bodyFatPercentage = healthCalculator.getBodyFatPercentage()
      expect(bodyFatPercentage).toBeCloseTo(60.62, 1)
    })

    it('should throw an error when waist measurement is missing', () => {
      const userWithoutWaist = {
        ...testUsers.normalWeightMaleMetric,
        waist: undefined,
      }
      expect(() =>
        bodyCompositionCalculator.calculateBodyFatPercentage(userWithoutWaist)
      ).toThrow('Waist value is required')
    })

    it('should throw an error when neck measurement is missing', () => {
      const userWithoutNeck = {
        ...testUsers.normalWeightMaleMetric,
        neck: undefined,
      }
      expect(() =>
        bodyCompositionCalculator.calculateBodyFatPercentage(userWithoutNeck)
      ).toThrow('Neck value is required')
    })

    it('should throw an error when hip measurement is missing for female', () => {
      const femaleUserWithoutHip = {
        ...testUsers.overweightFemaleMetric,
        hip: undefined,
      }
      expect(() =>
        bodyCompositionCalculator.calculateBodyFatPercentage(
          femaleUserWithoutHip
        )
      ).toThrow('Hip value is required for females')
    })

    it('should throw an error for invalid gender', () => {
      const userWithInvalidGender = {
        ...testUsers.normalWeightMaleMetric,
        gender: 'other' as 'male' | 'female',
      }
      expect(() =>
        bodyCompositionCalculator.calculateBodyFatPercentage(
          userWithInvalidGender
        )
      ).toThrow('Invalid gender')
    })
  })
})
