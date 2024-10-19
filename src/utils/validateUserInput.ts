/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'

// Constants for
const METRIC_WEIGHT_LIMITS = { min: 0, max: 700 }
const IMPERIAL_WEIGHT_LIMITS = { min: 0, max: 1543 }
const METRIC_HEIGHT_LIMITS = { min: 0, max: 2.5 }
const IMPERIAL_HEIGHT_LIMITS = { min: 0, max: 8.2 }

export function validateUserInput(user: User): void {
  try {
    validateNumericFields(user)
    if (user.weight !== undefined) validateWeight(user)
    if (user.height !== undefined) validateHeight(user)
    validateGender(user)
    validateAge(user)
    validateActivityLevel(user)
    validateUnitSystem(user)
    validateDailyCalories(user)
    validateWeightGoal(user)
    validateWeeksToWeightGoal(user)
  } catch (error) {
    const errorMessage = `Validation error in user object: ${JSON.stringify(
      user
    )} - ${(error as Error).message}. Stack trace: ${(error as Error).stack}`
    throw new Error(errorMessage)
  }
}

function validateNumericFields(user: User): void {
  const numericFields: (keyof User)[] = [
    'age',
    'waist',
    'hip',
    'neck',
    'dailyCalories',
    'weightGoal',
    'weeksToWeightGoal',
  ]
  numericFields.forEach((field) => {
    if (field in user && user[field] !== undefined) {
      if (typeof user[field] !== 'number') {
        throw new TypeError(`${field} must be a number if provided`)
      }
    }
  })
}

function validateUnitSystem(user: User) {
  if (user.unitSystem === undefined) {
    throw new Error('Unit system is required')
  }
  if (typeof user.unitSystem !== 'string') {
    throw new TypeError(
      `Unit system must be a string. Check the unitSystem value in ${JSON.stringify(
        user
      )}`
    )
  }
  if (user.unitSystem !== 'metric' && user.unitSystem !== 'imperial') {
    throw new Error('Unit system must be either "metric" or "imperial"')
  }
}

function validateWithinRange(
  value: number,
  limits: { min: number; max: number },
  fieldName: string,
  unitSystem: string,
  user: User
): void {
  if (value < limits.min || value > limits.max) {
    throw new RangeError(
      `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} using the ${unitSystem} system must be between ${limits.min}-${limits.max}. Check the ${fieldName.toLowerCase()} value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateWeight(user: User): void {
  if (typeof user.weight !== 'number') {
    throw new Error(
      `Weight must be a number if provided. Check the weight value in ${JSON.stringify(
        user
      )}`
    )
  }
  const limits =
    user.unitSystem === 'metric' ? METRIC_WEIGHT_LIMITS : IMPERIAL_WEIGHT_LIMITS
  const unitSystem = user.unitSystem === 'metric' ? 'metric' : 'imperial'
  validateWithinRange(user.weight, limits, 'weight', unitSystem, user)
}

function validateHeight(user: User): void {
  if (typeof user.height !== 'number') {
    throw new Error(
      `Height must be a number if provided. Check the height value in ${JSON.stringify(
        user
      )}`
    )
  }
  const limits =
    user.unitSystem === 'metric' ? METRIC_HEIGHT_LIMITS : IMPERIAL_HEIGHT_LIMITS
  const unitSystem = user.unitSystem === 'metric' ? 'metric' : 'imperial'
  validateWithinRange(user.height, limits, 'height', unitSystem, user)
}

function validateGender(user: User) {
  if (user.gender === undefined) {
    return
  }
  if (user.gender !== 'male' && user.gender !== 'female') {
    throw new TypeError(
      `Gender must be male or female. Check the gender value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateAge(user: User) {
  if (user.age === undefined) {
    return
  }
  if (user.age < 18) {
    console.warn(
      `Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateActivityLevel(user: User): void {
  const validActivityLevels = [
    'sedentary',
    'lightly',
    'moderately',
    'very',
    'extremely',
  ]

  if (user.activityLevel === undefined) {
    return
  }

  if (!validActivityLevels.includes(user.activityLevel)) {
    throw new TypeError(
      `Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(user)}`
    )
  }
}

function validateDailyCalories(user: User) {
  if (user.dailyCalories === undefined) {
    return
  }
  if (user.dailyCalories < 0)
    throw new Error(
      `Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(
        user
      )}`
    )
}

function validateWeightGoal(user: User) {
  if (user.weightGoal === undefined) {
    return
  }
  if (user.weightGoal < 0) {
    throw new Error(
      `The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateWeeksToWeightGoal(user: User) {
  if (user.weeksToWeightGoal === undefined) {
    return
  }
  if (user.weeksToWeightGoal < 0) {
    throw new Error(
      `Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(
        user
      )}`
    )
  }
}
