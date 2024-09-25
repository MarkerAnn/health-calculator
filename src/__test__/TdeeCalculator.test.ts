import { TdeeCalculator } from '../calculators/TdeeCalculator'
import { testUsers } from './testData'
import { HealthCalculatorFactory } from '../factories/HealthCalculatorFactory'

describe('TdeeCalculator', () => {
  let tdeeCalculator: TdeeCalculator

  beforeEach(() => {
    tdeeCalculator = new TdeeCalculator()
  })

  describe('calculateTdeeMifflinStJeor', () => {
    it('should calculate correct TDEE for normal weight male (metric) with moderate activity', () => {
      const user = testUsers.normalWeightMaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrMifflinStJeor()
      const tdee = healthCalculator.getTdeeMifflinStJeor()
      expect(tdee).toBeCloseTo(bmr * 1.55, 2)
    })

    it('should calculate correct TDEE for overweight female (metric) with sedentary activity', () => {
      const user = testUsers.overweightFemaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrMifflinStJeor()
      const tdee = healthCalculator.getTdeeMifflinStJeor()
      expect(tdee).toBeCloseTo(bmr * 1.2, 2)
    })

    it('should calculate correct TDEE for underweight male (imperial) with very active lifestyle', () => {
      const user = testUsers.underweightMaleImperial
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrMifflinStJeor()
      const tdee = healthCalculator.getTdeeMifflinStJeor()
      expect(tdee).toBeCloseTo(bmr * 1.725, 2)
    })

    it('should throw an error when age is missing', () => {
      const userWithoutAge = {
        ...testUsers.normalWeightMaleMetric,
        age: undefined,
      }
      expect(() =>
        tdeeCalculator.calculateTdeeMifflinStJeor(userWithoutAge, 1500)
      ).toThrow('Age and activity level is required')
    })

    it('should throw an error when activity level is missing', () => {
      const userWithoutActivityLevel = {
        ...testUsers.normalWeightMaleMetric,
        activityLevel: undefined,
      }
      expect(() =>
        tdeeCalculator.calculateTdeeMifflinStJeor(
          userWithoutActivityLevel,
          1500
        )
      ).toThrow('Age and activity level is required')
    })
  })

  describe('calculateTdeeHarrisBenedict', () => {
    it('should calculate correct TDEE for normal weight male (metric) with moderate activity', () => {
      const user = testUsers.normalWeightMaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrHarrisBenedict()
      const tdee = healthCalculator.getTdeeHarrisBenedict()
      expect(tdee).toBeCloseTo(bmr * 1.55, 2)
    })

    it('should calculate correct TDEE for overweight female (metric) with sedentary activity', () => {
      const user = testUsers.overweightFemaleMetric
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrHarrisBenedict()
      const tdee = healthCalculator.getTdeeHarrisBenedict()
      expect(tdee).toBeCloseTo(bmr * 1.2, 2)
    })

    it('should calculate correct TDEE for underweight male (imperial) with very active lifestyle', () => {
      const user = testUsers.underweightMaleImperial
      const healthCalculator =
        HealthCalculatorFactory.createHealthCalculator(user)
      const bmr = healthCalculator.getBmrHarrisBenedict()
      const tdee = healthCalculator.getTdeeHarrisBenedict()
      expect(tdee).toBeCloseTo(bmr * 1.725, 2)
    })

    it('should throw an error when age is missing', () => {
      const userWithoutAge = {
        ...testUsers.normalWeightMaleMetric,
        age: undefined,
      }
      expect(() =>
        tdeeCalculator.calculateTdeeHarrisBenedict(userWithoutAge, 1500)
      ).toThrow('Age and activity level is required')
    })

    it('should throw an error when activity level is missing', () => {
      const userWithoutActivityLevel = {
        ...testUsers.normalWeightMaleMetric,
        activityLevel: undefined,
      }
      expect(() =>
        tdeeCalculator.calculateTdeeHarrisBenedict(
          userWithoutActivityLevel,
          1500
        )
      ).toThrow('Age and activity level is required')
    })
  })

  describe('Activity level factors', () => {
    const testActivityLevels = (method: 'Mifflin' | 'Harris') => {
      const baseUser = testUsers.normalWeightMaleMetric
      const activityLevels = [
        'sedentary',
        'lightly',
        'moderately',
        'very',
        'extremely',
      ] as const
      const activityFactors = [1.2, 1.375, 1.55, 1.725, 1.9]

      activityLevels.forEach((level, index) => {
        it(`should use correct activity factor for ${level} activity`, () => {
          const user = { ...baseUser, activityLevel: level }
          const healthCalculator =
            HealthCalculatorFactory.createHealthCalculator(user)
          const bmr =
            method === 'Mifflin'
              ? healthCalculator.getBmrMifflinStJeor()
              : healthCalculator.getBmrHarrisBenedict()
          const tdee =
            method === 'Mifflin'
              ? healthCalculator.getTdeeMifflinStJeor()
              : healthCalculator.getTdeeHarrisBenedict()
          expect(tdee).toBeCloseTo(bmr * activityFactors[index], 2)
        })
      })
    }

    describe('Mifflin-St Jeor', () => {
      testActivityLevels('Mifflin')
    })

    describe('Harris-Benedict', () => {
      testActivityLevels('Harris')
    })
  })
})
