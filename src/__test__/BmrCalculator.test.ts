import { BmrCalculator } from '../calculators/BmrCalculator.js'
import { testUsers } from './testData.js'
import { HealthCalculatorFactory } from '../factories/HealthCalculatorFactory.js'

describe('BmrCalculator', () => {
  let bmrCalculator: BmrCalculator

  beforeEach(() => {
    bmrCalculator = new BmrCalculator()
  })

  describe('calculateBmrHarrisBenedict', () => {
    it('should calculate correct BMR for normal weight male (metric)', () => {
      const user = testUsers.normalWeightMaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrHarrisBenedict()
      expect(bmr).toBeCloseTo(1695.66, 1)
    })

    it('should calculate correct BMR for overweight female (metric)', () => {
      const user = testUsers.overweightFemaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrHarrisBenedict()
      expect(bmr).toBeCloseTo(1500.73, 1)
    })

    it('should calculate correct BMR for underweight male (imperial)', () => {
      const user = testUsers.underweightMaleImperial
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrHarrisBenedict()
      expect(bmr).toBeCloseTo(1544.74, 1)
    })

    it('should calculate correct BMR for obese female (imperial)', () => {
      const user = testUsers.obeseFemaleImperial
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrHarrisBenedict()
      expect(bmr).toBeCloseTo(1600.61, 1)
    })

    it('should throw an error when age is missing', () => {
      const userWithoutAge = {
        ...testUsers.normalWeightMaleMetric,
        age: undefined,
      }
      expect(() =>
        bmrCalculator.calculateBmrHarrisBenedict(userWithoutAge)
      ).toThrow('Age is required')
    })
  })

  describe('calculateBmrMifflinStJeor', () => {
    it('should calculate correct BMR for normal weight male (metric)', () => {
      const user = testUsers.normalWeightMaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrMifflinStJeor()
      expect(bmr).toBeCloseTo(1648.75, 1)
    })

    it('should calculate correct BMR for overweight female (metric)', () => {
      const user = testUsers.overweightFemaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrMifflinStJeor()
      expect(bmr).toBeCloseTo(1445.25, 1)
    })

    it('should calculate correct BMR for underweight male (imperial)', () => {
      const user = testUsers.underweightMaleImperial
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrMifflinStJeor()
      expect(bmr).toBeCloseTo(1552.79, 1)
    })

    it('should calculate correct BMR for obese female (imperial)', () => {
      const user = testUsers.obeseFemaleImperial
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrMifflinStJeor()
      expect(bmr).toBeCloseTo(1537.23, 1)
    })

    it('should throw an error when age is missing', () => {
      const userWithoutAge = {
        ...testUsers.normalWeightMaleMetric,
        age: undefined,
      }
      expect(() =>
        bmrCalculator.calculateBmrMifflinStJeor(userWithoutAge)
      ).toThrow('Age is required')
    })
  })
})
