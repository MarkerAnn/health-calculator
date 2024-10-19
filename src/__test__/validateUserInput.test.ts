// validateUserInput.test.ts

import { validateUserInput } from '../utils/validateUserInput.js'
import { testUsers } from './testData.js'
import { User } from '../models/User.js'

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

  it('should not throw for missing optional fields', () => {
    const userWithoutOptionals: User = {
      unitSystem: 'metric',
    }
    expect(() => validateUserInput(userWithoutOptionals)).not.toThrow()
  })

  it('should throw for missing unit system', () => {
    const userWithoutUnitSystem: Partial<User> = {
      weight: 70,
      height: 1.75,
    }
    expect(() => validateUserInput(userWithoutUnitSystem as User)).toThrow(
      'Unit system is required'
    )
  })

  it('should throw for invalid unit system', () => {
    const userWithInvalidUnitSystem: User = {
      weight: 70,
      height: 1.75,
      unitSystem: 'invalid' as any,
    }
    expect(() => validateUserInput(userWithInvalidUnitSystem)).toThrow(
      'Unit system must be either "metric" or "imperial"'
    )
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

  it('should throw for out of range metric weight if provided', () => {
    const overweightUser: User = {
      ...testUsers.normalWeightMaleMetric,
      weight: 701,
    }
    expect(() => validateUserInput(overweightUser)).toThrow()
  })

  it('should throw for out of range imperial weight if provided', () => {
    const overweightUser: User = {
      ...testUsers.underweightMaleImperial,
      weight: 1544,
    }
    expect(() => validateUserInput(overweightUser)).toThrow()
  })

  it('should throw for out of range metric height if provided', () => {
    const tallUser: User = {
      ...testUsers.normalWeightMaleMetric,
      height: 2.6,
    }
    expect(() => validateUserInput(tallUser)).toThrow()
  })

  it('should throw for out of range imperial height if provided', () => {
    const tallUser: User = {
      ...testUsers.underweightMaleImperial,
      height: 8.3,
    }
    expect(() => validateUserInput(tallUser)).toThrow()
  })

  it('should validate user with valid goals without throwing', () => {
    expect(() => validateUserInput(testUsers.userWithValidGoals)).not.toThrow()
  })

  it('should throw for negative daily calories if provided', () => {
    expect(() =>
      validateUserInput(testUsers.userWithInvalidDailyCalories)
    ).toThrow()
  })

  it('should throw for invalid weight goal if provided', () => {
    expect(() =>
      validateUserInput(testUsers.userWithInvalidWeightGoal)
    ).toThrow()
  })

  it('should throw for negative weeks to weight goal if provided', () => {
    expect(() =>
      validateUserInput(testUsers.userWithInvalidWeeksToWeightGoal)
    ).toThrow()
  })

  it('should throw for non-numeric weight if provided', () => {
    expect(() => validateUserInput(testUsers.userWithNonNumericWeight)).toThrow(
      'Weight must be a number if provided'
    )
  })

  it('should throw for non-numeric height if provided', () => {
    expect(() => validateUserInput(testUsers.userWithNonNumericHeight)).toThrow(
      'Height must be a number if provided'
    )
  })

  it('should not throw for missing weight and height', () => {
    const userWithoutWeightAndHeight: User = {
      unitSystem: 'metric',
    }
    expect(() => validateUserInput(userWithoutWeightAndHeight)).not.toThrow()
  })
})
