// CalorieCalculator.test.ts

import { CalorieCalculator } from '../calculators/CalorieCalculator'
import { testUsers } from './testData'
import { User } from '../models/User'

describe('CalorieCalculator', () => {
  let calculator: CalorieCalculator

  beforeEach(() => {
    calculator = new CalorieCalculator()
  })

  describe('calculateCaloricSurplusOrDeficit', () => {
    it('should calculate caloric surplus correctly', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        dailyCalories: 2500,
      }
      const tdee = 2700
      expect(calculator.calculateCaloricSurplusOrDeficit(user, tdee)).toBe(200)
    })

    it('should calculate caloric deficit correctly', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        dailyCalories: 2200,
      }
      const tdee = 2500
      expect(calculator.calculateCaloricSurplusOrDeficit(user, tdee)).toBe(300)
    })

    it('should throw an error if dailyCalories is not provided', () => {
      const user: User = { ...testUsers.normalWeightMaleMetric }
      const tdee = 2500
      expect(() =>
        calculator.calculateCaloricSurplusOrDeficit(user, tdee)
      ).toThrow()
    })
  })

  describe('calculateEstimatedWeightChangeWeekly', () => {
    it('should calculate weekly weight gain correctly', () => {
      const user: User = testUsers.normalWeightMaleMetric
      const surplus = 500
      const weightChange = calculator.calculateEstimatedWeightChangeWeekly(
        surplus,
        user
      )
      expect(weightChange).toBeCloseTo(0.45, 1) // Expecting about 0.45kg gain per week
    })

    it('should calculate weekly weight loss correctly', () => {
      const user: User = testUsers.normalWeightMaleMetric
      const deficit = -500
      const weightChange = calculator.calculateEstimatedWeightChangeWeekly(
        deficit,
        user
      )
      expect(weightChange).toBeCloseTo(-0.45, 1) // Expecting about 0.45kg loss per week
    })
  })

  describe('calculateEstimatedWeightChangeMonthly', () => {
    it('should calculate monthly weight gain correctly', () => {
      const user: User = testUsers.normalWeightMaleMetric
      const surplus = 500
      const weightChange = calculator.calculateEstimatedWeightChangeMonthly(
        surplus,
        user
      )
      expect(weightChange).toBeCloseTo(1.93, 1) // Expecting about 1.93kg gain per month
    })

    it('should calculate monthly weight loss correctly', () => {
      const user: User = testUsers.normalWeightMaleMetric
      const deficit = -500
      const weightChange = calculator.calculateEstimatedWeightChangeMonthly(
        deficit,
        user
      )
      expect(weightChange).toBeCloseTo(-1.93, 1) // Expecting about 1.93kg loss per month
    })
  })

  describe('calculateEstimatedWeeksToWeightGoal', () => {
    it('should calculate weeks to weight gain goal correctly', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        weightGoal: 75, // 5kg gain goal
      }
      const surplus = 500
      const weeks = calculator.calculateEstimatedWeeksToWeightGoal(
        surplus,
        user
      )
      expect(weeks).toBe(11) // Expecting about 12 weeks to gain 5kg
    })

    it('should calculate weeks to weight loss goal correctly', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        weightGoal: 65, // 5kg loss goal
      }
      const deficit = -500
      const weeks = calculator.calculateEstimatedWeeksToWeightGoal(
        deficit,
        user
      )
      expect(weeks).toBe(11) // Expecting about 12 weeks to lose 5kg
    })

    it('should throw an error if weightGoal is not provided', () => {
      const user: User = testUsers.normalWeightMaleMetric
      const surplus = 500
      expect(() =>
        calculator.calculateEstimatedWeeksToWeightGoal(surplus, user)
      ).toThrow()
    })
  })

  describe('calculateCaloriesForWeightGoal', () => {
    it('should calculate daily calories for weight gain goal correctly', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        weightGoal: 75, // 5kg gain goal
        weeksToWeightGoal: 10,
      }
      const dailyCalories = calculator.calculateCaloriesForWeightGoal(user)
      expect(dailyCalories).toBeCloseTo(550, 0) // Expecting about 550 extra calories per day
    })

    it('should calculate daily calories for weight loss goal correctly', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        weightGoal: 65, // 5kg loss goal
        weeksToWeightGoal: 10,
      }
      const dailyCalories = calculator.calculateCaloriesForWeightGoal(user)
      expect(dailyCalories).toBeCloseTo(550, 0) // Expecting about 550 fewer calories per day
    })

    it('should throw an error if weightGoal is not provided', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        weeksToWeightGoal: 10,
      }
      expect(() => calculator.calculateCaloriesForWeightGoal(user)).toThrow()
    })

    it('should throw an error if weeksToWeightGoal is not provided', () => {
      const user: User = {
        ...testUsers.normalWeightMaleMetric,
        weightGoal: 75,
      }
      expect(() => calculator.calculateCaloriesForWeightGoal(user)).toThrow()
    })
  })
})
