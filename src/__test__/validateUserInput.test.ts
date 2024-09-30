// validateUserInput.test.ts

import { validateUserInput } from '../utils/validateUserInput'
import { testUsers } from './testData'
import { User } from '../models/User'

describe('validateUserInput', () => {
  it('should validate correct metric user input without throwing', () => {
    expect(() =>
      validateUserInput(testUsers.normalWeightMaleMetric)
    ).not.toThrow()
  })

  it('should validate correct imperial user input without throwing', () => {
    expect(() =>
      validateUserInput(testUsers.underweightMaleImperial)
    ).not.toThrow()
  })

  it('should throw for missing required fields', () => {
    expect(() =>
      validateUserInput(testUsers.invalidUserMissingRequired as User)
    ).toThrow()
  })

  it('should throw for negative values', () => {
    expect(() =>
      validateUserInput(testUsers.invalidUserNegativeValues)
    ).toThrow()
  })

  it('should not throw for missing optional fields', () => {
    const userWithoutOptionals: User = {
      weight: 70,
      height: 1.75,
      unitSystem: 'metric',
    }
    expect(() => validateUserInput(userWithoutOptionals)).not.toThrow()
  })

  it('should warn for age under 18', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()
    const youngUser: User = {
      ...testUsers.normalWeightMaleMetric,
      age: 17,
    }
    validateUserInput(youngUser)
    expect(consoleWarnSpy).toHaveBeenCalled()
    consoleWarnSpy.mockRestore()
  })

  it('should throw for out of range metric weight', () => {
    const overweightUser: User = {
      ...testUsers.normalWeightMaleMetric,
      weight: 701,
    }
    expect(() => validateUserInput(overweightUser)).toThrow()
  })

  it('should throw for out of range imperial weight', () => {
    const overweightUser: User = {
      ...testUsers.underweightMaleImperial,
      weight: 1544,
    }
    expect(() => validateUserInput(overweightUser)).toThrow()
  })

  it('should throw for out of range metric height', () => {
    const tallUser: User = {
      ...testUsers.normalWeightMaleMetric,
      height: 2.6,
    }
    expect(() => validateUserInput(tallUser)).toThrow()
  })

  it('should throw for out of range imperial height', () => {
    const tallUser: User = {
      ...testUsers.underweightMaleImperial,
      height: 8.3,
    }
    expect(() => validateUserInput(tallUser)).toThrow()
  })

  it('should validate user with valid goals without throwing', () => {
    expect(() => validateUserInput(testUsers.userWithValidGoals)).not.toThrow()
  })

  it('should throw for negative daily calories', () => {
    expect(() =>
      validateUserInput(testUsers.userWithInvalidDailyCalories)
    ).toThrow()
  })

  it('should throw for invalid weight goal', () => {
    expect(() =>
      validateUserInput(testUsers.userWithInvalidWeightGoal)
    ).toThrow()
  })

  it('should throw for negative weeks to weight goal', () => {
    expect(() =>
      validateUserInput(testUsers.userWithInvalidWeeksToWeightGoal)
    ).toThrow()
  })

  it('should throw for non-numeric weight', () => {
    expect(() =>
      validateUserInput(testUsers.userWithNonNumericWeight)
    ).toThrow()
  })

  it('should throw for non-numeric height', () => {
    expect(() => validateUserInput(testUsers.userWithNonNumericHeight)).toThrow(
      'Height is required and must be a number'
    )
  })
})
